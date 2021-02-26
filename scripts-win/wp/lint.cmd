@ECHO OFF
echo "Linting all packages..."
yarn lerna run lint --stream --concurrency 1