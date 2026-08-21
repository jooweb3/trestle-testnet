# Trestle DeFi — Smart Contracts

Hardhat project with Solidity smart contracts for the Trestle DeFi Marketplace.

## Contracts

| Contract | Description | Security |
|----------|-------------|----------|
| `DigitalRWA.sol` | RWA tokenization — Chainlink price feed, USDC-gated whitelist, mint/subscribe | nonReentrant, custom errors, zero-address guards |
| `DigitalGoods.sol` | Marketplace — fixed-price + Dutch auction, delivery flow, dispute resolution | Custom errors, zero-address validation |
| `FreelancerEscrow.sol` | Freelance escrow — fixed/Dutch budget, milestones, gig marketplace, auto-approve | nonReentrant on all state-changing functions, custom errors |
| `FeeDistributor.sol` | 40/40/20 fee split (treasury/yield/buyback-burn), ETH + ERC20 | Custom errors |
| `UserProfile.sol` | On-chain profiles + token-gated reviews with cooldown | Custom errors, zero-address guard |
| `MockGovernanceToken.sol` | ERC-20 governance token (tGOV) for whitelisting | Used by DigitalRWA |
| `MockERC20.sol` | Generic mock ERC-20 for testing (USDC, USDT, xNOBT, xBRT) | — |

## Deployed — Base Sepolia (84532)

| Contract | Address | Explorer |
|----------|---------|----------|
| MockGovernanceToken | `0xe7bFE19CeEd30871d50394E0c7C0b3b647aa85A0` | [View](https://sepolia.basescan.org/address/0xe7bFE19CeEd30871d50394E0c7C0b3b647aa85A0#code) |
| FeeDistributor | `0x6AE0E1bBE014D222417eF3A350088A0204Ed9bF4` | [View](https://sepolia.basescan.org/address/0x6AE0E1bBE014D222417eF3A350088A0204Ed9bF4#code) |
| DigitalGoods | `0xf22e65B24B3236B6B4983e81792541139Df6e3Dc` | [View](https://sepolia.basescan.org/address/0xf22e65B24B3236B6B4983e81792541139Df6e3Dc#code) |
| FreelancerEscrow | `0x7928BE357160d31B6ab378D0566Ce360BE0228B0` | [View](https://sepolia.basescan.org/address/0x7928BE357160d31B6ab378D0566Ce360BE0228B0#code) |
| DigitalRWA | `0x13A40Cea2156984B54fd337c51B6a5B47d569C2C` | [View](https://sepolia.basescan.org/address/0x13A40Cea2156984B54fd337c51B6a5B47d569C2C#code) |
| UserProfile | `0x727B3915A7048a43814e4BD8Ac6c48269796c551` | [View](https://sepolia.basescan.org/address/0x727B3915A7048a43814e4BD8Ac6c48269796c551#code) |
| Mock USDC | `0x9F52847AFaaB2504c560bC6c098b3D81772fa8C6` | [View](https://sepolia.basescan.org/address/0x9F52847AFaaB2504c560bC6c098b3D81772fa8C6#code) |
| Mock USDT | `0x5c6F85EdcCC12E4B0c096bd002fD27699B7Ae740` | [View](https://sepolia.basescan.org/address/0x5c6F85EdcCC12E4B0c096bd002fD27699B7Ae740#code) |
| Mock xNOBT | `0xD5De2C3f68ab67ccD2556ED976AE3d591c757a6d` | [View](https://sepolia.basescan.org/address/0xD5De2C3f68ab67ccD2556ED976AE3d591c757a6d#code) |
| Mock xBRT | `0xCF1295f1f4F72eD6A2289EACc13673C53a5Ef865` | [View](https://sepolia.basescan.org/address/0xCF1295f1f4F72eD6A2289EACc13673C53a5Ef865#code) |

**Chainlink ETH/USD (Base Sepolia):** `0x4aDC67696bA383F43DD60A9e78F2C97Fbbfc7cb1`

## Deployed — Arbitrum Sepolia (421614) — All verified (post-fix)

| Contract | Address | Explorer |
|----------|---------|----------|
| MockGovernanceToken | `0xA410fE4c70A624B9F8c1f65309f4FeFc1c6904E0` | [View](https://sepolia.arbiscan.io/address/0xA410fE4c70A624B9F8c1f65309f4FeFc1c6904E0#code) |
| FeeDistributor | `0x556f8E6DC3cb93b2BF74587B6750DFf61918EAAb` | [View](https://sepolia.arbiscan.io/address/0x556f8E6DC3cb93b2BF74587B6750DFf61918EAAb#code) |
| DigitalGoods | `0xC878166Bc446cb6Db91Dc55e9CcD1405834bc06B` | [View](https://sepolia.arbiscan.io/address/0xC878166Bc446cb6Db91Dc55e9CcD1405834bc06B#code) |
| FreelancerEscrow | `0x612B5dda1BCBe17Dff554bb446A8018a574DBe37` | [View](https://sepolia.arbiscan.io/address/0x612B5dda1BCBe17Dff554bb446A8018a574DBe37#code) |
| DigitalRWA | `0x4710d00AC3C2B6d0375F762076BDCE5ef835E64f` | [View](https://sepolia.arbiscan.io/address/0x4710d00AC3C2B6d0375F762076BDCE5ef835E64f#code) |
| UserProfile | `0xBF4588E207c2191Ee9D3f114370a6dbf4BACFFf3` | [View](https://sepolia.arbiscan.io/address/0xBF4588E207c2191Ee9D3f114370a6dbf4BACFFf3#code) |
| Mock USDC | `0xe5665d1D2F180D27d328acCBB83f5fBE32A6666A` | [View](https://sepolia.arbiscan.io/address/0xe5665d1D2F180D27d328acCBB83f5fBE32A6666A#code) |
| Mock USDT | `0x1a112d7D350976A7b5015868F4DF3bdC8A46570d` | [View](https://sepolia.arbiscan.io/address/0x1a112d7D350976A7b5015868F4DF3bdC8A46570d#code) |
| Mock xNOBT | `0xb0a742a2302B043718b60053b135dC432C892852` | [View](https://sepolia.arbiscan.io/address/0xb0a742a2302B043718b60053b135dC432C892852#code) |
| Mock xBRT | `0x432aCe196DFD335396257e0CDF33B3f815b6fF0B` | [View](https://sepolia.arbiscan.io/address/0x432aCe196DFD335396257e0CDF33B3f815b6fF0B#code) |

**Chainlink ETH/USD (Arb Sepolia):** `0x26dA680D98e805D54f0934f46b4669149c14d1cA`

## Deployed — Polygon Amoy (80002)

| Contract | Address | Explorer |
|----------|---------|----------|
| MockGovernanceToken | `0x5582496273a71E60e457D19773050CC848A2F52C` | [View](https://amoy.polygonscan.com/address/0x5582496273a71E60e457D19773050CC848A2F52C) |
| FeeDistributor | `0xa1889d658601c7fA649a70516341fF4aac761ca8` | [View](https://amoy.polygonscan.com/address/0xa1889d658601c7fA649a70516341fF4aac761ca8) |
| DigitalGoods | `0xcc5f9C02cD093002cE3921180e32f76cE03F01C0` | [View](https://amoy.polygonscan.com/address/0xcc5f9C02cD093002cE3921180e32f76cE03F01C0) |
| FreelancerEscrow | `0x6baEA890Ef24F1e2dc9A5f46E7e0aeD2516BC518` | [View](https://amoy.polygonscan.com/address/0x6baEA890Ef24F1e2dc9A5f46E7e0aeD2516BC518) |
| DigitalRWA | `0x88fB6Ae65B2c6011F4dE243BbDa100dC57Cd5FE5` | [View](https://amoy.polygonscan.com/address/0x88fB6Ae65B2c6011F4dE243BbDa100dC57Cd5FE5) |
| UserProfile | `0x4012A59428C8A4b7f5D2ad8C0572e1da6060440c` | [View](https://amoy.polygonscan.com/address/0x4012A59428C8A4b7f5D2ad8C0572e1da6060440c) |
| Mock USDC | `0x3944f16c03892de837f9C18Dab752Cd09dF113eF` | [View](https://amoy.polygonscan.com/address/0x3944f16c03892de837f9C18Dab752Cd09dF113eF) |
| Mock USDT | `0x0061E989c93c38aAd363a86e1AD66875A93226d7` | [View](https://amoy.polygonscan.com/address/0x0061E989c93c38aAd363a86e1AD66875A93226d7) |
| Mock xNOBT | `0x301C0CD35e76Ae3956f6410b46D2aD0E3f60Bd5B` | [View](https://amoy.polygonscan.com/address/0x301C0CD35e76Ae3956f6410b46D2aD0E3f60Bd5B) |
| Mock xBRT | `0xAe743AC8eBE1fe05114bB82F68b51A9a2BabD9Df` | [View](https://amoy.polygonscan.com/address/0xAe743AC8eBE1fe05114bB82F68b51A9a2BabD9Df) |

**Chainlink ETH/USD (Polygon Amoy):** `0x001382149eBa3441043c1c66972b4772963f5D43`

## Supported Networks

| Network | Chain ID | Native | RPC | Status |
|---------|----------|--------|-----|--------|
| Polygon Amoy | 80002 | POL | `https://rpc-amoy.polygon.technology/` | Deployed |
| Base Sepolia | 84532 | ETH | `https://sepolia.base.org` | Deployed |
| Arbitrum Sepolia | 421614 | ETH | `https://sepolia-rollup.arbitrum.io/rpc` | Deployed |
| Polygon PoS | 137 | POL | `https://polygon-rpc.com/` | Configured |
| Base Mainnet | 8453 | ETH | `https://mainnet.base.org` | Configured |
| Arbitrum One | 42161 | ETH | `https://arb1.arbitrum.io/rpc` | Configured |

## Setup

```bash
npm install
cp .env.example .env   # add PRIVATE_KEY, RPC URLs, ETHERSCAN_API_KEY
npx hardhat compile
npx hardhat test
```

## Deploy

```bash
# Deploy to Base Sepolia
npx hardhat run scripts/deploy_v2.js --network baseSepolia

# Deploy to Arbitrum Sepolia
npx hardhat run scripts/deploy_v2.js --network arbitrumSepolia

# Deploy to Polygon Amoy
npx hardhat run scripts/deploy_v2.js --network amoy

# Deploy to Base Mainnet
npx hardhat run scripts/deploy_v2.js --network base
```

The deploy script auto-detects chain ID and selects the correct:
- Native token symbol (ETH / POL)
- Chainlink ETH/USD price feed address
- Block explorer for verification

## Security

- `nonReentrant` on all external state-changing functions (FreelancerEscrow, DigitalRWA.syncPrice)
- Custom errors instead of require strings (gas-efficient)
- Zero-address validation in constructors
- Access control via `Ownable` + `AccessControl` roles
- Pausable contracts (DigitalRWA)
- Token-gated whitelist (DigitalRWA — requires USDC balance, swappable via `setWhitelistToken()`)

## Architecture

```
contracts/
├── src/
│   ├── DigitalRWA.sol          # RWA tokenization + Chainlink oracle
│   ├── DigitalGoods.sol        # Marketplace (fixed + Dutch auction)
│   ├── FreelancerEscrow.sol    # Freelance escrow + gig marketplace
│   ├── FeeDistributor.sol      # 40/40/20 fee split
│   ├── UserProfile.sol         # On-chain profiles + reviews
│   └── mocks/
│       ├── MockGovernanceToken.sol
│       ├── MockERC20.sol
│       └── MockV3Aggregator.sol
├── scripts/
│   ├── deploy_v2.js            # Multi-chain deploy (auto-detect chain)
│   ├── deploy_all.js           # Lightweight deploy (5 contracts)
│   └── deploy.js               # Full deploy with mock stablecoins
├── test/
│   ├── Heavy.test.js           # 91 security-focused tests
│   └── TrestleProtocol.test.js # 37 integration tests
└── hardhat.config.js           # Multi-network config
```
