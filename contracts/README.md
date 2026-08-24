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

## Deployed — Base Sepolia (84532) — All verified (post-fix)

| Contract | Address | Explorer |
|----------|---------|----------|
| MockGovernanceToken | `0x50915a301fF73278B3eaC09B42301abbC866F1Dc` | [View](https://sepolia.basescan.org/address/0x50915a301fF73278B3eaC09B42301abbC866F1Dc#code) |
| FeeDistributor | `0x754C549355215022453bDd9Cd19Cbc7b52B1E490` | [View](https://sepolia.basescan.org/address/0x754C549355215022453bDd9Cd19Cbc7b52B1E490#code) |
| DigitalGoods | `0x272475feaD659100E6DD8EBd8dB88E6f064DC112` | [View](https://sepolia.basescan.org/address/0x272475feaD659100E6DD8EBd8dB88E6f064DC112#code) |
| FreelancerEscrow | `0x6A08C1eE8102B41935a758b5E3093b075113E615` | [View](https://sepolia.basescan.org/address/0x6A08C1eE8102B41935a758b5E3093b075113E615#code) |
| DigitalRWA | `0xA410fE4c70A624B9F8c1f65309f4FeFc1c6904E0` | [View](https://sepolia.basescan.org/address/0xA410fE4c70A624B9F8c1f65309f4FeFc1c6904E0#code) |
| UserProfile | `0xdd89E04e5bB9B79775A87Fa9666C5Fe03a01e169` | [View](https://sepolia.basescan.org/address/0xdd89E04e5bB9B79775A87Fa9666C5Fe03a01e169#code) |
| Mock USDC | `0xfe50dA41BfC13e99E9276149D0b534609C39633E` | [View](https://sepolia.basescan.org/address/0xfe50dA41BfC13e99E9276149D0b534609C39633E#code) |
| Mock USDT | `0x635Ab939A2997eFDB42AD38F6A4919d8ae45b912` | [View](https://sepolia.basescan.org/address/0x635Ab939A2997eFDB42AD38F6A4919d8ae45b912#code) |
| Mock xNOBT | `0x4cEaa30839E3E463484c2D66900fdD6484022054` | [View](https://sepolia.basescan.org/address/0x4cEaa30839E3E463484c2D66900fdD6484022054#code) |
| Mock xBRT | `0xbA3B12F5633da2794c97CF330B19E510aE2BbB05` | [View](https://sepolia.basescan.org/address/0xbA3B12F5633da2794c97CF330B19E510aE2BbB05#code) |

**Chainlink ETH/USD (Base Sepolia):** `0x4Adc67696BA383F43dD60a9e78F2C97F4FcF617B`

## Deployed — Arbitrum Sepolia (421614) — All verified (post-fix)

| Contract | Address | Explorer |
|----------|---------|----------|
| MockGovernanceToken | `0xA410fE4c70A624B9F8c1f65309f4FeFc1c6904E0` | [View](https://sepolia.arbiscan.io/address/0xA410fE4c70A624B9F8c1f65309f4FeFc1c6904E0#code) |
| FeeDistributor | `0x556f8E6DC3cb93b2BF74587B6750DFf61918EAAb` | [View](https://sepolia.arbiscan.io/address/0x556f8E6DC3cb93b2BF74587B6750DFf61918EAAb#code) |
| DigitalGoods | `0xC878166Bc446cb6Db91Dc55e9CcD1405834bc06B` | [View](https://sepolia.arbiscan.io/address/0xC878166Bc446cb6Db91Dc55e9CcD1405834bc06B#code) |
| FreelancerEscrow | `0x612B5dda1BCBe17Dff554bb446A8018a574DBe37` | [View](https://sepolia.arbiscan.io/address/0x612B5dda1BCBe17Dff554bb446A8018a574DBe37#code) |
| DigitalRWA | `0xa1889d658601c7fA649a70516341fF4aac761ca8` | [View](https://sepolia.arbiscan.io/address/0xa1889d658601c7fA649a70516341fF4aac761ca8#code) |
| UserProfile | `0xBF4588E207c2191Ee9D3f114370a6dbf4BACFFf3` | [View](https://sepolia.arbiscan.io/address/0xBF4588E207c2191Ee9D3f114370a6dbf4BACFFf3#code) |
| Mock USDC | `0xe5665d1D2F180D27d328acCBB83f5fBE32A6666A` | [View](https://sepolia.arbiscan.io/address/0xe5665d1D2F180D27d328acCBB83f5fBE32A6666A#code) |
| Mock USDT | `0x1a112d7D350976A7b5015868F4DF3bdC8A46570d` | [View](https://sepolia.arbiscan.io/address/0x1a112d7D350976A7b5015868F4DF3bdC8A46570d#code) |
| Mock xNOBT | `0xb0a742a2302B043718b60053b135dC432C892852` | [View](https://sepolia.arbiscan.io/address/0xb0a742a2302B043718b60053b135dC432C892852#code) |
| Mock xBRT | `0x432aCe196DFD335396257e0CDF33B3f815b6fF0B` | [View](https://sepolia.arbiscan.io/address/0x432aCe196DFD335396257e0CDF33B3f815b6fF0B#code) |

**Chainlink ETH/USD (Arb Sepolia):** `0x26dA680D98e805D54f0934f46b4669149c14d1cA`

## Deployed — Polygon Amoy (80002) — All verified (post-fix)

| Contract | Address | Explorer |
|----------|---------|----------|
| MockGovernanceToken | `0x81C11612df53Bf2564CFDEc7C7E11407db6E10Ce` | [View](https://amoy.polygonscan.com/address/0x81C11612df53Bf2564CFDEc7C7E11407db6E10Ce#code) |
| FeeDistributor | `0x090AAe945842f7bf73533776B226B2979293f709` | [View](https://amoy.polygonscan.com/address/0x090AAe945842f7bf73533776B226B2979293f709#code) |
| DigitalGoods | `0x0790bB1Ee4ee086C2610346E2290B38BC75Ac347` | [View](https://amoy.polygonscan.com/address/0x0790bB1Ee4ee086C2610346E2290B38BC75Ac347#code) |
| FreelancerEscrow | `0x2Ad9fFCBC6453B2b7A458bD80747c202F188606D` | [View](https://amoy.polygonscan.com/address/0x2Ad9fFCBC6453B2b7A458bD80747c202F188606D#code) |
| DigitalRWA | `0x9f13c49B07df04b21827Ebf00cE4b3c61d874bd2` | [View](https://amoy.polygonscan.com/address/0x9f13c49B07df04b21827Ebf00cE4b3c61d874bd2#code) |
| UserProfile | `0xC36C239D0b3144015178727f939e0766Bf71D816` | [View](https://amoy.polygonscan.com/address/0xC36C239D0b3144015178727f939e0766Bf71D816#code) |
| Mock USDC | `0x6D6C679279f5C680e5a6ef33306F2e9A78577DCa` | [View](https://amoy.polygonscan.com/address/0x6D6C679279f5C680e5a6ef33306F2e9A78577DCa#code) |
| Mock USDT | `0x58E3B6f2eFD7F3ee4afe98A754e155DBE9052513` | [View](https://amoy.polygonscan.com/address/0x58E3B6f2eFD7F3ee4afe98A754e155DBE9052513#code) |
| Mock xNOBT | `0x4eC3777B16FC7Da556B451679A10A8fDFC5Fd48D` | [View](https://amoy.polygonscan.com/address/0x4eC3777B16FC7Da556B451679A10A8fDFC5Fd48D#code) |
| Mock xBRT | `0xA8fb99180AdfFD8d0986A32f472faD2A17B57D7D` | [View](https://amoy.polygonscan.com/address/0xA8fb99180AdfFD8d0986A32f472faD2A17B57D7D#code) |

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

Deployment follows a resumable pipeline strategy (dual RPC endpoints, batch checkpointing, deterministic addresses). See `best-deploy-contract.md` for infrastructure notes.

```bash
# Deploy to Base Sepolia
npx hardhat run scripts/deploy.js --network baseSepolia

# Deploy to Arbitrum Sepolia
npx hardhat run scripts/deploy.js --network arbitrumSepolia

# Deploy to Polygon Amoy
npx hardhat run scripts/deploy.js --network amoy

# Deploy to Base Mainnet
npx hardhat run scripts/deploy.js --network base
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
