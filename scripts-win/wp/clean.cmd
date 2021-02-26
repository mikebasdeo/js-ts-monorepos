@ECHO OFF
echo "Cleaning all packages..."
yarn lerna run clean --concurrency 4
