// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "./interface/IDeployerInterface.sol";
import "hardhat/console.sol";

contract Creator {
    IERC721Deployer erc721Deployer;
    IERC1155Deployer erc155Deployer;

    mapping(address => bool) public deployedTokenContract;

    event ERC721Deployed(
        address owner,
        string name,
        string symbol,
        string uri,
        uint256 royalty,
        address tokenAddress
    );

    event ERC1155Deployed(
        address owner,
        string uri,
        uint256 royalty,
        address tokenAddress
    );

    /*
     * Params
     * string memory _name - NFT name
     * string memory _symbol - NFT symbol

     * Deploys simple ERC721 contract, that supports base functions and flexible royalty management
     */

    function deployERC721(
        string memory _name,
        string memory _symbol,
        address _minter
    ) external returns (address) {
        address tokenAddress = erc721Deployer.deployToken(
            _name,
            _symbol,
            _minter
        );
        deployedTokenContract[tokenAddress] = true;

        return tokenAddress;
    }

    /*
     * Params
     * string memory uri_ - URI of NFT metadata. Any {id} string will be replaced with token ID on the client side
     *
     * Deploys simple ERC1155 contract, that supports base functions and flexible royalty management
     */

    function deployERC1155(
        string memory _name,
        address _marketplace
    ) external returns (address) {
        address tokenAddress = erc155Deployer.deployToken(_name, _marketplace);
        deployedTokenContract[tokenAddress] = true;
        return tokenAddress;
    }

    function setDeployerAddress(
        IERC721Deployer _erc721Deployer,
        IERC1155Deployer _erc155Deployer
    ) external {
        erc721Deployer = _erc721Deployer;
        erc155Deployer = _erc155Deployer;
    }
}
