#!/bin/bash

# Make sure a commit message was provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <commit message>"
    exit 1
fi

COMMIT_MESSAGE=$1

# For each submodule
git submodule foreach --recursive '
    git add .                           # Add all files
    git commit -m "'"$COMMIT_MESSAGE"'" # Commit with the provided message
    # git push                          # Push changes
'