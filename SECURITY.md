# Security Audit — Trestle Protocol

## Scope

**In-scope:**
- Smart contracts (Solidity **0.8.36**, EVM cancun, viaIR) — FreelancerEscrow, DigitalGoods, DigitalRWA, FeeDistributor, UserProfile, MockGovernanceToken, MockERC20 (MockUSDC / MockUSDT / MockXNOBT / MockXBRT), MockV3Aggregator
- Frontend (Next.js + wagmi) — useContracts, web3 config, Marketplace/Freelance/RWA views
- Deploy scripts (Hardhat)

**Out-of-scope:**
- UI/UX, missing features, third-party integrations, social engineering, private/internal code

## Contract Addresses (Base Sepolia Testnet — all verified)

| Contract | Address |
|----------|---------|
| DigitalGoods | `0x272475feaD659100E6DD8EBd8dB88E6f064DC112` |
| FreelancerEscrow | `0x6A08C1eE8102B41935a758b5E3093b075113E615` |
| DigitalRWA | `0xA410fE4c70A624B9F8c1f65309f4FeFc1c6904E0` |
| FeeDistributor | `0x754C549355215022453bDd9Cd19Cbc7b52B1E490` |
| GovernanceToken (tGOV) | `0x50915a301fF73278B3eaC09B42301abbC866F1Dc` |
| UserProfile | `0xdd89E04e5bB9B79775A87Fa9666C5Fe03a01e169` |
| Mock USDC | `0xfe50dA41BfC13e99E9276149D0b534609C39633E` |
| Mock USDT | `0x635Ab939A2997eFDB42AD38F6A4919d8ae45b912` |
| Mock xNOBT | `0x4cEaa30839E3E463484c2D66900fdD6484022054` |
| Mock xBRT | `0xbA3B12F5633da2794c97CF330B19E510aE2BbB05` |

## Contract Addresses (Arbitrum Sepolia Testnet — all verified)

| Contract | Address |
|----------|---------|
| DigitalGoods | `0xC878166Bc446cb6Db91Dc55e9CcD1405834bc06B` |
| FreelancerEscrow | `0x612B5dda1BCBe17Dff554bb446A8018a574DBe37` |
| DigitalRWA | `0xa1889d658601c7fA649a70516341fF4aac761ca8` |
| FeeDistributor | `0x556f8E6DC3cb93b2BF74587B6750DFf61918EAAb` |
| GovernanceToken (tGOV) | `0xA410fE4c70A624B9F8c1f65309f4FeFc1c6904E0` |
| UserProfile | `0xBF4588E207c2191Ee9D3f114370a6dbf4BACFFf3` |
| Mock USDC | `0xe5665d1D2F180D27d328acCBB83f5fBE32A6666A` |
| Mock USDT | `0x1a112d7D350976A7b5015868F4DF3bdC8A46570d` |
| Mock xNOBT | `0xb0a742a2302B043718b60053b135dC432C892852` |
| Mock xBRT | `0x432aCe196DFD335396257e0CDF33B3f815b6fF0B` |

## Contract Addresses (Polygon Amoy Testnet — all verified)

| Contract | Address |
|----------|---------|
| DigitalGoods | `0x0790bB1Ee4ee086C2610346E2290B38BC75Ac347` |
| FreelancerEscrow | `0x2Ad9fFCBC6453B2b7A458bD80747c202F188606D` |
| DigitalRWA | `0x9f13c49B07df04b21827Ebf00cE4b3c61d874bd2` |
| FeeDistributor | `0x090AAe945842f7bf73533776B226B2979293f709` |
| GovernanceToken (tGOV) | `0x81C11612df53Bf2564CFDEc7C7E11407db6E10Ce` |
| UserProfile | `0xC36C239D0b3144015178727f939e0766Bf71D816` |
| Mock USDC | `0x6D6C679279f5C680e5a6ef33306F2e9A78577DCa` |
| Mock USDT | `0x58E3B6f2eFD7F3ee4afe98A754e155DBE9052513` |
| Mock xNOBT | `0x4eC3777B16FC7Da556B451679A10A8fDFC5Fd48D` |
| Mock xBRT | `0xA8fb99180AdfFD8d0986A32f472faD2A17B57D7D` |

Note: some addresses coincide across chains (same deployer + nonce ⇒ same EVM address); each exists independently per chain.

Always verify addresses on [Basescan Sepolia](https://sepolia.basescan.org), [Arbiscan Sepolia](https://sepolia.arbiscan.io), or [Polygonscan Amoy](https://amoy.polygonscan.com) before interacting.
