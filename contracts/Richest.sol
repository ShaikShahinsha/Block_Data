// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Richest {
    // Write your code here
    address richest = address(0);
    uint256 mostSent;
    mapping(address => uint256) oldRichestUsersWithdrawl;
    
    function becomeRichest() external payable returns (bool) {
        if(msg.value <= mostSent){
            return false;
        }
        oldRichestUsersWithdrawl[richest] += mostSent;
        richest = msg.sender;
        mostSent = msg.value;
        return true;
    }

    function withdraw() external {
        uint256 amount = oldRichestUsersWithdrawl[msg.sender];
        oldRichestUsersWithdrawl[msg.sender] = 0;
        (bool sent, ) = payable(msg.sender).call{value: amount}("");
        require(sent);
    }

    function getRichest() public view returns (address) {
        return richest;
    }
}