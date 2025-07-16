#!/bin/sh
set -e

echo "[install.sh] Building Docker image..."
docker build -t ts-union-exhaustive-assessment .
echo "[install.sh] Docker image built successfully."
