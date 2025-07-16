#!/bin/sh
set -e
./install.sh
echo "[run.sh] Starting the test container..."
docker run --rm ts-union-exhaustive-assessment
echo "[run.sh] Container run completed."
