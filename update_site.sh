#!/bin/bash
echo "Cloning the site"
mkdir -p ~/work/$1
cd ~/work/$1
git clone https://github.com/intellectivelab/docs.intellectivelab.com.git
cd docs.intellectivelab.com
git reset --hard $1

echo "Stopping a container"
docker stop jekyll

echo "Launching a new one"
chmod +x ./jekyll.sh && ./jekyll.sh

echo "Cleaning up"
cd ../../
ls -1 -I$1 | xargs rm -Rf

echo "Done."