#!/bin/bash
docker run --rm --name=jekyll --label=jekyll --volume=$(pwd):/srv/jekyll -d -p 4000:4000 jekyll/jekyll:pages jekyll serve