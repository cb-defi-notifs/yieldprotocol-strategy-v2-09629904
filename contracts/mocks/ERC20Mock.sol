// SPDX-License-Identifier: BUSL-1.1
pragma solidity 0.8.1;
import "@yield-protocol/utils-v2/contracts/token/ERC20Permit.sol";


contract ERC20Mock is ERC20Permit  {

    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals
    ) ERC20Permit(name, symbol, decimals) { }

    /// @dev Give tokens to whoever asks for them.
    function mint(address to, uint256 amount) public virtual {
        _mint(to, amount);
    }
}
