#!/bin/bash

branch=`git rev-parse --abbrev-ref HEAD`
if [ ${branch} != "master" ]; then
  echo "current branch is not master."
  return
fi

git pull

npm version $1

git push

git push --tags

npm publish