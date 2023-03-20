// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "./interface/IDeployerInterface.sol";
import "./TheeERC721.sol";
import "hardhat/console.sol";

contract TheeERC721Deployer is AccessControl, IERC721Deployer {
    address public creator;
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 internal constant CREATOR_ROLE = keccak256("CREATOR_ROLE");

    /*
     * Params
     * address _NFTcreator - address of proxy - NFT-Creator, that will send request for contracts deployment
     */

    constructor(address _NFTcreator) {
        creator = _NFTcreator;
        _setupRole(CREATOR_ROLE, _NFTcreator);
        _setupRole(OWNER_ROLE, msg.sender);
    }

    function deployToken(
        string memory _name,
        string memory _symbol,
        address _minter
    ) external override returns (address) {
        return address(new TheeERC721(_name, _symbol, _minter));
    }

    /* Params
     * address _creator - Address of the contract that will be able to deploy NFT contracts
     * Function sets role for sNFT-creator that allows to deploy contracts
     */
    function setCreator(address _creator) external {
        require(msg.sender == creator, "Only Creator can set other creator");
        require(_creator != address(0), "Cant accept 0 address");
        creator = _creator;
        grantRole(CREATOR_ROLE, _creator);
    }
}
