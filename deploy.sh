#!/bin/bash

# Navigate to frontend directory
cd frontend

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building project..."
npm run build

# Commit changes to git
cd ..
git add .
git commit -m "Prepare for deployment"
git push

echo "Project prepared for deployment. Now you can deploy to Vercel."
echo "Visit https://vercel.com/import/git to import your repository."
