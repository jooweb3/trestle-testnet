# testnet.trestle.website

---

**Legal Disclaimer:** Trestle DeFi (trestle.website) is an independent Web3 ecosystem operating exclusively on the Polygon network. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with the Celestia-based "Trestle Protocol" bridge project or any of its subsidiaries.

Testnet platform for Trestle DeFi. Smart contracts deployed on **Polygon Amoy**, **Base Sepolia**, and **Arbitrum Sepolia**, with a Next.js frontend.

## Smart Contracts

| Contract | Purpose |
|----------|---------|
| **DigitalGoods** | Marketplace listings — fixed-price & Dutch auction with description, tags, and NFT flag |
| **FreelancerEscrow** | Milestone-based gigs & projects (GitHub, portfolio, category, min-budget, duration) |
| **DigitalRWA** | Tokenized real-world assets, whitelist-gated (token type, jurisdiction, issuer, risk level) |
| **FeeDistributor** | Fee splitting (yield vault / treasury / buyback), reentrancy-guarded |
| **GovernanceToken** | Mock governance token (tGOV) |
| **MockUSDC / MockUSDT** | Test stablecoins (6 decimals) |
| **MockXNOBT / MockXBRT** | Test tokens (18 decimals) |
| **UserProfile** | On-chain profiles (all fields optional, incl. socials) & reviews |

Deployed addresses are maintained in `frontend/src/config/contracts.ts` (`CONTRACT_ADDRESSES`).

### Base Sepolia Deployments (latest — all verified)

| Contract | Address |
|----------|---------|
| **DigitalGoods** | `0x272475feaD659100E6DD8EBd8dB88E6f064DC112` |
| **FreelancerEscrow** | `0x6A08C1eE8102B41935a758b5E3093b075113E615` |
| **DigitalRWA** | `0xA410fE4c70A624B9F8c1f65309f4FeFc1c6904E0` |
| **FeeDistributor** | `0x754C549355215022453bDd9Cd19Cbc7b52B1E490` |
| **GovernanceToken (tGOV)** | `0x50915a301fF73278B3eaC09B42301abbC866F1Dc` |
| **UserProfile** | `0xdd89E04e5bB9B79775A87Fa9666C5Fe03a01e169` |
| **MockUSDC** | `0xfe50dA41BfC13e99E9276149D0b534609C39633E` |
| **MockUSDT** | `0x635Ab939A2997eFDB42AD38F6A4919d8ae45b912` |
| **MockXNOBT** | `0x4cEaa30839E3E463484c2D66900fdD6484022054` |
| **MockXBRT** | `0xbA3B12F5633da2794c97CF330B19E510aE2BbB05` |

All verified on [Basescan Sepolia](https://sepolia.basescan.org). RWA pricing: Chainlink testnet feeds are deprecated (see [Shutdown Policy](https://docs.chain.link/data-feeds/selecting-data-feeds#data-feed-shutdown-policy)); price set via admin `setManualPrice()` ($3000 ETH/USD), `syncPrice()` remains primary if a live feed returns.

### Arbitrum Sepolia Deployments (post-fix, all verified)

| Contract | Address |
|----------|---------|
| **DigitalGoods** | `0xC878166Bc446cb6Db91Dc55e9CcD1405834bc06B` |
| **FreelancerEscrow** | `0x612B5dda1BCBe17Dff554bb446A8018a574DBe37` |
| **DigitalRWA** | `0xa1889d658601c7fA649a70516341fF4aac761ca8` |
| **FeeDistributor** | `0x556f8E6DC3cb93b2BF74587B6750DFf61918EAAb` |
| **GovernanceToken (tGOV)** | `0xA410fE4c70A624B9F8c1f65309f4FeFc1c6904E0` |
| **UserProfile** | `0xBF4588E207c2191Ee9D3f114370a6dbf4BACFFf3` |
| **MockUSDC** | `0xe5665d1D2F180D27d328acCBB83f5fBE32A6666A` |
| **MockUSDT** | `0x1a112d7D350976A7b5015868F4DF3bdC8A46570d` |
| **MockXNOBT** | `0xb0a742a2302B043718b60053b135dC432C892852` |
| **MockXBRT** | `0x432aCe196DFD335396257e0CDF33B3f815b6fF0B` |

All verified on [Arbiscan Sepolia](https://sepolia.arbiscan.io). RWA pricing: manual `setManualPrice()` fallback ($3000 ETH/USD) — no classic Chainlink feeds remain on this testnet.

### Polygon Amoy Deployments (post-fix, all verified)

| Contract | Address |
|----------|---------|
| **DigitalGoods** | `0x0790bB1Ee4ee086C2610346E2290B38BC75Ac347` |
| **FreelancerEscrow** | `0x2Ad9fFCBC6453B2b7A458bD80747c202F188606D` |
| **DigitalRWA** | `0x9f13c49B07df04b21827Ebf00cE4b3c61d874bd2` |
| **FeeDistributor** | `0x090AAe945842f7bf73533776B226B2979293f709` |
| **GovernanceToken (tGOV)** | `0x81C11612df53Bf2564CFDEc7C7E11407db6E10Ce` |
| **UserProfile** | `0xC36C239D0b3144015178727f939e0766Bf71D816` |
| **MockUSDC** | `0x6D6C679279f5C680e5a6ef33306F2e9A78577DCa` |
| **MockUSDT** | `0x58E3B6f2eFD7F3ee4afe98A754e155DBE9052513` |
| **MockXNOBT** | `0x4eC3777B16FC7Da556B451679A10A8fDFC5Fd48D` |
| **MockXBRT** | `0xA8fb99180AdfFD8d0986A32f472faD2A17B57D7D` |

All verified on [Polygonscan Amoy](https://amoy.polygonscan.com). RWA pricing: manual `setManualPrice()` fallback ($0.20 POL/USD) — POL/USD feed sunset; only ETH/USD remains (wrong asset for native deposits).

## Features

- **Marketplace**: fixed & Dutch listings with description, tags, and NFT flag; native (ETH/POL), USDC, and USDT payments via an owner-set token allowlist.
- **Freelance**: gigs and projects with GitHub / portfolio / category / min-budget / duration metadata; milestone escrow with yield.
- **RWA**: tokenized real-world assets with full metadata (token type, jurisdiction, issuer, risk level); holder whitelist via USDC/USDT balance (multi-token whitelist).
- **Profiles**: user profiles with optional social fields (GitHub, website, location, skills, Twitter, Telegram) plus reviews.
- **Faucet**: mint test tokens with configurable per-token amounts.

## Tech Stack

- **Smart Contracts**: Hardhat (Solidity 0.8.36, EVM cancun, viaIR)
- **Frontend**: Next.js + wagmi + Reown AppKit
- **Styling**: Tailwind CSS

## Commands

```bash
# Contracts
cd contracts
npm install
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network baseSepolia
npx hardhat run scripts/deploy.js --network arbitrumSepolia

# Frontend
cd frontend
npm install
npm run dev    # http://localhost:3000
npm run build
```

## Security

Previously identified findings are addressed: ERC-20 payment token allowlists (`setTokenAllowed`), reentrancy guard on fee distribution, participant-only auto-approve / auto-resolve, strictly increasing milestone deadlines, single-set RWA asset info, and string RWA metadata URI. See `SECURITY.md`.

## Environment Variables

**Contracts** (`contracts/.env`, see `contracts/.env.example`):

| Var | Required | Purpose |
|-----|----------|---------|
| `PRIVATE_KEY` | For deploy / verify | Deployer account |
| `ETHERSCAN_API_KEY` | For verification | Etherscan V2 key (works across Polygonscan, Arbiscan, Basescan) |
| `AMOY_RPC` / `POLYGON_RPC` / `ARBITRUM_RPC` / `ARBITRUM_SEPOLIA_RPC` / `BASE_SEPOLIA_RPC` / `BASE_RPC` | No | RPC overrides; public fallbacks built in |
| `REPORT_GAS` | No | Set `true` to enable the gas reporter |

**Frontend** (`frontend/.env`, see `frontend/.env.example`) — all optional:

- `NEXT_PUBLIC_ETHERSCAN_API_KEY`, `NEXT_PUBLIC_BLOCKSCOUT_API_KEY` — explorer history fallbacks
- `NEXT_PUBLIC_AI_API_URL`, `NEXT_PUBLIC_REWARD_API_URL` — Jonah/Astra chat endpoints (production defaults baked in)

The WalletConnect Project ID is a public client identifier, hardcoded in `frontend/src/config/web3.ts` — no variable needed.

## Deploy

Cloudflare Pages — auto-deploys on push to main. Build command: `npm run build`, publish dir: `out/`.

## 📬 Contact

- **Website**: [https://trestle.website](https://trestle.website)
- **Testnet Hub**: [Testnet Hub](https://testnet.trestle.website)
- **Reward Hub**: [Reward Hub](https://reward.trestle.website)
- **GitHub**: [Trestle DeFi](https://github.com/Trestle-DeFi)
- **Documentation**: [https://docs.trestle.website](https://docs.trestle.website)
- **X (Twitter)**: [Trestle DeFi](https://x.com/Trestle_0xArch)
- **BlueSky**: [Trestle DeFi](https://bsky.app/profile/trestle-0xarch.bsky.social)
- **Medium**: [Trestle DeFi](https://medium.com/@trestle_defi)
- **Discord**: [Trestle DeFi](https://discord.gg/4dCCvnJYGT)
- **Telegram**: [trestleDeFi](https://t.me/trestleDeFi)
- **Telegram App**: [trestlehub_bot](https://t.me/trestlehub_bot)
- **Email**: contact@trestle.website