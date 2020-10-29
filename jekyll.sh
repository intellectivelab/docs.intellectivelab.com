#!/bin/bash
docker run --rm --name=jekyll --label=jekyll --volume=$(pwd):/srv/jekyll -d -p 4001:4000 jekyll/jekyll:pages jekyll serve