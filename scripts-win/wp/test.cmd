@ECHO OFF
echo "Testing all packages..."
yarn lerna run test --stream --concurrency 4