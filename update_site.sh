#!/bin/bash
echo "Cloning the site"
mkdir -p ~/work/$COMMIT_SHA
cd ~/work/$COMMIT_SHA
git clone https://github.com/intellectivelab/docs.intellectivelab.com.git
cd docs.intellectivelab.com
git reset --hard $COMMIT_SHA

echo "Stopping container"
docker stop jekyll

echo "Launching a new one"
chmod +x ./jekyll.sh && ./jekyll.sh

echo "Cleaning up"
cd ../../
ls -1 -I$COMMIT_SHA | xargs rm -Rf

echo "Done."