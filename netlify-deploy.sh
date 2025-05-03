#!/bin/bash

# Navigate to frontend directory
cd frontend

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building project..."
CI=false npm run build

# Create a netlify.toml file in the dist directory
echo "Creating netlify.toml in dist directory..."
cat > dist/netlify.toml << EOL
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
EOL

echo "Build completed. The dist folder is ready for deployment to Netlify."
echo "You can deploy manually by dragging and dropping the 'frontend/dist' folder to Netlify."
