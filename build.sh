#!/usr/bin/env sh

set -e

if [ -x "docker" ]; then
  echo "Build requires Docker"
  exit 1
fi

mkdir -p dist

docker run --rm --volume $(pwd):/src emscripten/emsdk emcc src/haversine.c -Os -o dist/haversine.js -s EXPORTED_FUNCTIONS=_haversine -s EXPORTED_RUNTIME_METHODS=cwrap -s MODULARIZE=1 -s EXPORT_ES6=1

cp src/index.js dist
