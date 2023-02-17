// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract TheeERC721 is ERC721URIStorage, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    address private marketplace;

    constructor(
        string memory _name,
        string memory _symbol,
        address minter
    ) ERC721(_name, _symbol) {
        _setupRole(MINTER_ROLE, minter);
    }

    function mint(uint256 _tokenId, string memory _tokenURI) external {
        _mint(msg.sender, _tokenId);
        _setTokenURI(_tokenId, _tokenURI);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override(AccessControl, ERC721) returns (bool) {
        return
            ERC721.supportsInterface(interfaceId) ||
            AccessControl.supportsInterface(interfaceId);
    }
}
