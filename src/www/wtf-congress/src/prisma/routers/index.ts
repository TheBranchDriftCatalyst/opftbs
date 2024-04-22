import { t } from "./helpers/createRouter";
import { chaptersRouter } from "./Chapter.router";
import { reviewsRouter } from "./Review.router";
import { storiesRouter } from "./Story.router";
import { tagsRouter } from "./Tag.router";
import { tagsonstoriesRouter } from "./TagsOnStories.router";
import { statsRouter } from "./Stats.router";
import { usersRouter } from "./User.router";

export const appRouter = t.router({
  chapter: chaptersRouter,
  review: reviewsRouter,
  story: storiesRouter,
  tag: tagsRouter,
  tagsonstories: tagsonstoriesRouter,
  stats: statsRouter,
  user: usersRouter
})

