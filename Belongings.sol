// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract MyScooby is ERC20("ScoobyCoin", "SCOOBY") {
    constructor() ERC20 {
    _mint(msg.sender, 100 * 10 ** ERC20.decimals());
  } 
}