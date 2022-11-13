// SPDX-License-Identifier: BUSL-1.1
pragma solidity ^0.8.13;

import {IERC20} from "yieldspace-tv/interfaces/IPool.sol";
import {IFYToken} from "vault-v2/interfaces/IFYToken.sol";
import {ERC20Permit} from "yield-utils-v2/token/ERC20Permit.sol";
import {IStrategyMigrator} from "./interfaces/IStrategyMigrator.sol";


/// @dev The Migrator contract poses as a Pool to receive all assets from a Strategy
/// during a roll operation.
/// @notice The Pool and fyToken must exist. The fyToken needs to be not mature, and the pool needs to have no fyToken in it.
/// There will be no state changes on pool or fyToken.
/// TODO: For this to work, the implementing class must inherit from ERC20 and make sure that totalSupply is not zero after the `mint` call.
abstract contract StrategyMigrator is IStrategyMigrator {

    /// Mock pool base - Must match that of the calling strategy
    IERC20 public base;

    /// Mock pool fyToken - Must be set to a real fyToken registered to a series in the Cauldron, any will do
    IFYToken public fyToken;

    constructor(IERC20 base_, IFYToken fyToken_) {
        base = base_;
        fyToken = fyToken_;
    }

    /// @dev Mock pool mint. Called within `startPool`. This contract must hold 1 wei of base.
    function mint(address, address, uint256, uint256)
        external
        virtual
        returns (uint256, uint256, uint256)
    {
        return (0, 0, 0);
    }

    /// @dev Mock pool burn and make it revert so that `endPool`never suceeds, and `burnForBase` can never be called.
    function burn(address, address, uint256, uint256)
        external
        returns  (uint256, uint256, uint256)
    {
        revert();
    }

    /// @dev Mock pool maturity
    function maturity() external view returns(uint32) {
        return 0;
    }

    /// @dev Mock pool getBaseBalance
    function getBaseBalance() external view returns(uint128) {
        return 0;
    }

    /// @dev Mock pool getFYTokenBalance
    function getFYTokenBalance() external view returns(uint128) {
        return 0;
    }

    /// @dev Mock pool ts
    function ts() external view returns(int128) {
        return 0;
    }
}