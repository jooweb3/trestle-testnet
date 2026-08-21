export const CHAIN_CONFIG = {
  amoy: {
    id: 80002,
    name: "Polygon Amoy",
    shortName: "Amoy",
    rpc: "https://rpc-amoy.polygon.technology/",
    explorer: "https://amoy.polygonscan.com",
    currency: { name: "POL", symbol: "POL", decimals: 18 },
  },
  baseSepolia: {
    id: 84532,
    name: "Base Sepolia",
    shortName: "Base",
    rpc: "https://sepolia.base.org",
    explorer: "https://sepolia.basescan.org",
    currency: { name: "ETH", symbol: "ETH", decimals: 18 },
    blockscout: "https://base-sepolia.blockscout.com",
  },
  arbitrumSepolia: {
    id: 421614,
    name: "Arbitrum Sepolia",
    shortName: "Arbitrum",
    rpc: "https://sepolia-rollup.arbitrum.io/rpc",
    explorer: "https://sepolia.arbiscan.io",
    currency: { name: "ETH", symbol: "ETH", decimals: 18 },
    blockscout: "https://arbitrum-sepolia.blockscout.com",
  },
} as const;

export type ChainKey = keyof typeof CHAIN_CONFIG;
export const SUPPORTED_CHAIN_IDS = Object.values(CHAIN_CONFIG).map(c => c.id) as readonly number[];

export const CONTRACT_ADDRESSES: Record<number, {
  digitalGoods: `0x${string}`;
  freelancerEscrow: `0x${string}`;
  digitalRWA: `0x${string}`;
  govToken: `0x${string}`;
  feeDistributor: `0x${string}`;
  userProfile: `0x${string}`;
  mockUSDC: `0x${string}`;
  mockUSDT: `0x${string}`;
  mockXNOBT: `0x${string}`;
  mockXBRT: `0x${string}`;
}> = {
  // Polygon Amoy
  [CHAIN_CONFIG.amoy.id]: {
    digitalGoods: "0x0790bB1Ee4ee086C2610346E2290B38BC75Ac347",
    freelancerEscrow: "0x2Ad9fFCBC6453B2b7A458bD80747c202F188606D",
    digitalRWA: "0xD63A90d82Fc8c74FbBbE3d9b0516d79985Fe0d71",
    govToken: "0x81C11612df53Bf2564CFDEc7C7E11407db6E10Ce",
    feeDistributor: "0x090AAe945842f7bf73533776B226B2979293f709",
    userProfile: "0xC36C239D0b3144015178727f939e0766Bf71D816",
    mockUSDC: "0x6D6C679279f5C680e5a6ef33306F2e9A78577DCa",
    mockUSDT: "0x58E3B6f2eFD7F3ee4afe98A754e155DBE9052513",
    mockXNOBT: "0x4eC3777B16FC7Da556B451679A10A8fDFC5Fd48D",
    mockXBRT: "0xA8fb99180AdfFD8d0986A32f472faD2A17B57D7D",
  },
  // Base Sepolia
  [CHAIN_CONFIG.baseSepolia.id]: {
    digitalGoods: "0x272475feaD659100E6DD8EBd8dB88E6f064DC112",
    freelancerEscrow: "0x6A08C1eE8102B41935a758b5E3093b075113E615",
    digitalRWA: "0x18dF08d96F303c6149a7f8CC4800BCa7fcAEB0Fd",
    govToken: "0x50915a301fF73278B3eaC09B42301abbC866F1Dc",
    feeDistributor: "0x754C549355215022453bDd9Cd19Cbc7b52B1E490",
    userProfile: "0xdd89E04e5bB9B79775A87Fa9666C5Fe03a01e169",
    mockUSDC: "0xfe50dA41BfC13e99E9276149D0b534609C39633E",
    mockUSDT: "0x635Ab939A2997eFDB42AD38F6A4919d8ae45b912",
    mockXNOBT: "0x4cEaa30839E3E463484c2D66900fdD6484022054",
    mockXBRT: "0xbA3B12F5633da2794c97CF330B19E510aE2BbB05",
  },
  // Arbitrum Sepolia
  [CHAIN_CONFIG.arbitrumSepolia.id]: {
    digitalGoods: "0xC878166Bc446cb6Db91Dc55e9CcD1405834bc06B",
    freelancerEscrow: "0x612B5dda1BCBe17Dff554bb446A8018a574DBe37",
    digitalRWA: "0x4710d00AC3C2B6d0375F762076BDCE5ef835E64f",
    govToken: "0xA410fE4c70A624B9F8c1f65309f4FeFc1c6904E0",
    feeDistributor: "0x556f8E6DC3cb93b2BF74587B6750DFf61918EAAb",
    userProfile: "0xBF4588E207c2191Ee9D3f114370a6dbf4BACFFf3",
    mockUSDC: "0xe5665d1D2F180D27d328acCBB83f5fBE32A6666A",
    mockUSDT: "0x1a112d7D350976A7b5015868F4DF3bdC8A46570d",
    mockXNOBT: "0xb0a742a2302B043718b60053b135dC432C892852",
    mockXBRT: "0x432aCe196DFD335396257e0CDF33B3f815b6fF0B",
  },
} as const;

export const DEFAULT_CHAIN = CHAIN_CONFIG.amoy.id;
