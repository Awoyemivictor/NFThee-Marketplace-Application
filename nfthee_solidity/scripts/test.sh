#!/bin/bash


# npx hardhat clean
echo "Compiling contract..."

npx hardhat compile 

nodemon --watch test/marketplace.test.js --exec 'npx hardhat test'