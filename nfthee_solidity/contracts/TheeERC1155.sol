// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/draft-EIP712.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TheeERC1155 is ERC1155Supply {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint256 private maxRoyaltyCap = 1000;

    address private immutable marketplace;

    address signer;

    mapping(uint256 => RoyaltyInfo) private royalties;
    mapping(uint256 => address) public creator;
    mapping(uint256 => string) public _tokenURIs;
    struct RoyaltyInfo {
        address[] recipient;
        uint256[] amount;
    }

    event Mint(address indexed creator, uint256 tokenId, uint256 amount);
    event RoyaltyUpdated(
        uint256 indexed tokenId,
        uint256[] value,
        address[] recipient
    );

    constructor(string memory _name, address _marketplace) ERC1155(_name) {
        marketplace = _marketplace;
    }

    function mint(
        uint256 id_,
        uint256 amount_,
        address to_,
        string memory tokenURI
    ) public {
        _beforeTokenMint(id_, amount_, to_);
        creator[id_] = to_;
        _setURI(id_, tokenURI);

        emit Mint(to_, id_, amount_);
        _mint(to_, id_, amount_, "");
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC1155) returns (bool) {
        return ERC1155.supportsInterface(interfaceId);
    }

    function _beforeTokenMint(
        uint256 id,
        uint256 amount,
        address to_
    ) internal view {
        require(
            creator[id] == to_,
            "_beforeTokenMint: unauthorized attempt to mint"
        );
        require(amount != 0, "_beforeTokenMint: amount should be positive");
    }

    function _setURI(uint256 id, string memory _uri) internal {
        if (bytes(_tokenURIs[id]).length == bytes("").length) {
            require(bytes(_uri).length != 0, "_setURI: tokenURI should be set");
            _tokenURIs[id] = _uri;
        }
    }
}
