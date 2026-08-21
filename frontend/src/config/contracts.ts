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
    digitalGoods: "0xcc5f9C02cD093002cE3921180e32f76cE03F01C0",
    freelancerEscrow: "0x6baEA890Ef24F1e2dc9A5f46E7e0aeD2516BC518",
    digitalRWA: "0x88fB6Ae65B2c6011F4dE243BbDa100dC57Cd5FE5",
    govToken: "0x5582496273a71E60e457D19773050CC848A2F52C",
    feeDistributor: "0xa1889d658601c7fA649a70516341fF4aac761ca8",
    userProfile: "0x4012A59428C8A4b7f5D2ad8C0572e1da6060440c",
    mockUSDC: "0x3944f16c03892de837f9C18Dab752Cd09dF113eF",
    mockUSDT: "0x0061E989c93c38aAd363a86e1AD66875A93226d7",
    mockXNOBT: "0x301C0CD35e76Ae3956f6410b46D2aD0E3f60Bd5B",
    mockXBRT: "0xAe743AC8eBE1fe05114bB82F68b51A9a2BabD9Df",
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
