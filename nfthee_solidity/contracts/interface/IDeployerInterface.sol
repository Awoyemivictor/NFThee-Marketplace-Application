// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

interface IERC721Deployer {
    function deployToken(
        string memory _name,
        string memory _symbol,
        address _minter
    ) external returns (address);
}

interface IERC1155Deployer {
    function deployToken(
        string memory _name,
        address _marketplaceAddress
    ) external returns (address);
}
