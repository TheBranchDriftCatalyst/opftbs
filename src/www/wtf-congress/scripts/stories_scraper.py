import random
from time import sleep

import requests
import concurrent.futures
import os
import pickle
import queue
from bs4 import BeautifulSoup
import re
import logging
import json
import tqdm
import hashlib

from icecream import ic

MAX_RETRIES = 5
RETRY_DELAY = 30  # seconds
MAX_THREADS = 25
BACKOFF_FACTOR = 2
CANONICAL_MAX_RANGE = 10800
MAX_RANGE = CANONICAL_MAX_RANGE
PAGE_SIZE = 10

CACHE_DIR = "./.cache"

STARTING_POSITION = 0

logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

# Create a file handler
log_file = "scrapper.log"
if os.path.exists(log_file):
    os.remove(log_file)

file_handler = logging.FileHandler(log_file, mode="w")
file_handler.setLevel(level=logging.DEBUG)

# Create a console handler
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.INFO)

# Create a formatter and set it for both handlers
formatter = logging.Formatter("%(asctime)s - %(levelname)s - %(message)s")
file_handler.setFormatter(formatter)
console_handler.setFormatter(formatter)

# Add the handlers to the logger
logger.addHandler(file_handler)
logger.addHandler(console_handler)

logger.debug(f"This is a debug message - {os.getcwd()}")

story_url_pattern = re.compile(r"/stories/story\.php\?storyid=\d+")

BASE_URL = os.environ.get("SCRAPER_BASE_URL", None)
if not BASE_URL:
    raise Exception("BASE_URL environment variable not set")

story_codes_pattern = re.compile(r"(\/stories\/search\.php\?selectedcode).+")
author_pattern = re.compile(pattern=r"(\/stories\/author\.php\?authorid).+")
story_text_pattern = re.compile(pattern=r"(\/stories\/wholestory\.php\?storyid)=(.+)")

logger.debug(f"backoff delays: {[(BACKOFF_FACTOR * (2**i) + random.uniform(0, 5)) for i in range(MAX_RETRIES)]}")

def get_index_page(pos=STARTING_POSITION):
    index_url = f"{BASE_URL}/stories/list.php?pos={pos}&sortby1=hit&arrange1=DESC&sortby2=average&arrange2=DESC"
    content = fetch_with_retry(index_url)
    # Parse the content with BeautifulSoup
    soup = BeautifulSoup(content, "html.parser")
    links = soup.find_all("a", href=story_url_pattern)
    logger.debug(f"Found {len(links)} links on index page {pos}")

    # We are going to stop when we return no more story url patterns
    if len(links) == 0:
        logger.debug(f"No more links found on index page {pos}")

    results = [(BASE_URL + link["href"], link.text) for link in links]
    return results


FAILURES = []

session = requests.Session()


def fetch_with_retry(url, max_retries=MAX_RETRIES, backoff_factor=BACKOFF_FACTOR):
    # Define the cache file path based on the URL
    hashed_url = hashlib.md5(url.encode()).hexdigest()
    cache_file = os.path.join(CACHE_DIR, f"{hashed_url}.pkl")

    # Try to load cached results
    if os.path.exists(cache_file):
        with open(cache_file, "rb") as f:
            logger.debug(f"retrieving from {cache_file}")
            return pickle.load(f)

    for attempt in range(max_retries):
        try:
            response = session.get(url)
            response.raise_for_status()  # Raise an exception for HTTP errors
            content = response.text

            # Cache the results
            os.makedirs(CACHE_DIR, exist_ok=True)
            with open(cache_file, "wb") as f:
                pickle.dump(content, f)

            return content
        except Exception as e:
            if attempt < max_retries - 1:  # i.e. not the last attempt
                # Exponential backoff with jitter
                delay = backoff_factor * (2**attempt) + random.uniform(0, 5)
                logger.warning(
                    f"Attempt {attempt + 1} failed for URL {url}. Retrying in {delay:.2f} seconds. Error: {e}"
                )
                sleep(delay)
            else:
                logger.warning(
                    f"Failed to fetch {url} after {max_retries} attempts. Error: {e}"
                )
                FAILURES.append(url)


def process_story_sync(url, title):
    story_details = get_story_details(url, title)
    path = f"./downloaded/{story_details['id']}.json"
    # Ensure the directory exists
    os.makedirs(os.path.dirname(path), exist_ok=True)
    # Now, open the file
    with open(path, "w") as outfile:
        json_content = json.dumps(story_details, indent=4)
        outfile.write(json_content)
        logger.debug(f"Processed {title} and saved to file {path}")
    return story_details


def parse_story_text(story_response):
    soup = BeautifulSoup(story_response, "html.parser")
    story_blocks = soup.find_all(class_="storyblock")
    return [" ".join(block.strings) for block in story_blocks]


def get_story_details(url, title):
    response = fetch_with_retry(url)
    soup = BeautifulSoup(response, "html.parser")
    story_codes = soup.find_all("a", href=story_codes_pattern)
    story_tags = [code.text for code in story_codes]
    views_pattern = re.compile(pattern=r"Total (\d+) readers")
    story_text_link = soup.find("a", href=story_text_pattern)["href"]

    story_response = fetch_with_retry(BASE_URL + story_text_link)

    views = soup.find("b", string=views_pattern).parent.text
    match = re.search(views_pattern, views)
    if match:
        # logger.debug(f"Found {match.group(1)} views")
        number = match.group(1)
        view_count = int(number)
    else:
        view_count = 0

    story_obj = {
        "id": hashlib.sha256(title.encode()).hexdigest(),
        "title": title,
        "tags": story_tags,
        "addedOn": soup.find("b", string=re.compile("Added on:"))
        .parent.text.replace("Added on:\n", "")
        .strip(),
        "summary": soup.find("b", string=re.compile("Synopsis"))
        .parent.text.replace("Synopsis:\n", "")
        .strip(),
        "author": soup.find("a", href=author_pattern).text,
        "stats": {"views": view_count},
        "chapters": parse_story_text(story_response),
    }
    return story_obj


def main():
    i_range = range(0, MAX_RANGE, PAGE_SIZE)
    stories_queue = queue.Queue()

    # Use ThreadPoolExecutor to scrape index pages in threads
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_THREADS) as executor:
        futures = {executor.submit(get_index_page, idx): idx for idx in i_range}
        index_process_bar = tqdm.tqdm(
            total=len(futures),
            desc="Processing stories",
            position=0,
            leave=True,
            postfix=f"{MAX_THREADS} threads running",
        )
        for future in concurrent.futures.as_completed(futures):
            idx = futures[future]
            try:
                results = future.result()
                for res in results:
                    stories_queue.put(res)
                index_process_bar.set_description(
                    f"Crawling Index Pages {idx} {stories_queue.qsize()}"
                )
                index_process_bar.update()
            except Exception as e:
                ic(f"Thread {idx} raised an exception: {e}")

    # Now, use ThreadPoolExecutor again to process stories in threads
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_THREADS) as executor:
        futures = {
            executor.submit(process_story_sync, url, title): (url, title)
            for url, title in stories_queue.queue
        }
        storyProcessBar = tqdm.tqdm(
            total=len(futures),
            desc="Processing stories",
            position=0,
            leave=True,
            # smoothing=0.5,
            postfix=f"{MAX_THREADS} threads",
        )
        for future in concurrent.futures.as_completed(futures):
            url, title = futures[future]
            try:
                result = future.result()
                storyProcessBar.set_description(
                    f"Processed {result.get('title', 'UNKNOWN'):<30}"
                )
                storyProcessBar.update()
            except Exception as e:
                ic(f"Processing of story {title} at {url} raised an exception: {e}")


if __name__ == "__main__":
    main()
