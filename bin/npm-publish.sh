#!/bin/sh

if [ $1 != "patch" ] && [ $1 != "minor" ] && [ $1 != "major" ]; then
  echo "paramter is invalid."
  return
fi

branch=`git rev-parse --abbrev-ref HEAD`
if [ $branch != "main" ]; then
  echo "current branch is not main."
  return
fi

git pull

npm version $1

git push

git push --tags

npm publish