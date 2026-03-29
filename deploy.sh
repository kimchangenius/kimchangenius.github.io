#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Step 1/4: Stopping and removing containers..."
docker compose down

echo "Step 2/4: Pulling the latest code from GitHub..."
git pull origin main

echo "Step 3/4: Cleaning up build artifacts (_site, cache)..."
sudo rm -rf _site/ .jekyll-cache/ .jekyll-metadata

echo "Step 4/4: Building images and starting containers..."
docker compose up -d --build

echo "Deployment completed successfully."
