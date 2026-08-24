const hre = require("hardhat");

// Redeploys ONLY DigitalRWA (post-oracle-fix version) and wires it up:
// - USDC whitelist via constructor, USDT whitelist post-deploy
// - price: tries Chainlink syncPrice(), falls back to admin setManualPrice()
// Existing addresses below must match frontend/src/config/contracts.ts.
const EXISTING = {
  baseSepolia: {
    govToken: "0x50915a301fF73278B3eaC09B42301abbC866F1Dc",
    mockUSDC: "0xfe50dA41BfC13e99E9276149D0b534609C39633E",
    mockUSDT: "0x635Ab939A2997eFDB42AD38F6A4919d8ae45b912",
  },
  arbitrumSepolia: {
    govToken: "0xA410fE4c70A624B9F8c1f65309f4FeFc1c6904E0",
    mockUSDC: "0xe5665d1D2F180D27d328acCBB83f5fBE32A6666A",
    mockUSDT: "0x1a112d7D350976A7b5015868F4DF3bdC8A46570d",
  },
  amoy: {
    govToken: "0x81C11612df53Bf2564CFDEc7C7E11407db6E10Ce",
    mockUSDC: "0x6D6C679279f5C680e5a6ef33306F2e9A78577DCa",
    mockUSDT: "0x58E3B6f2eFD7F3ee4afe98A754e155DBE9052513",
  },
};

const CHAINLINK_FEEDS = {
  amoy: "0x001382149eBa3441043c1c66972b4772963f5D43", // POL/USD
  arbitrumSepolia: "0x26dA680D98e805D54f0934f46b4669149c14d1cA", // ETH/USD
  baseSepolia: "0x4Adc67696BA383F43dD60a9e78F2C97F4FcF617B", // ETH/USD
};

const MANUAL_PRICES = {
  amoy: 200000000n, // $0.20 POL/USD (8 decimals)
  arbitrumSepolia: 300000000000n, // $3000 ETH/USD (8 decimals)
  baseSepolia: 300000000000n, // $3000 ETH/USD (8 decimals)
};

const RWA_META = "ipfs://QmPlaceholder";

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const networkName = hre.network.name;
  const cfg = EXISTING[networkName];
  if (!cfg) throw new Error(`No config for network ${networkName}`);

  console.log("Network:", networkName);
  console.log("Deploying DigitalRWA from:", deployer.address);

  const GOV_SUPPLY = hre.ethers.parseEther("1000000");
  const MIN_WHITELIST_BALANCE = hre.ethers.parseUnits("1000", 6); // 1000 USDC (6 decimals)

  const DigitalRWA = await hre.ethers.getContractFactory("DigitalRWA");
  const rwa = await DigitalRWA.deploy(
    "Trestle Real Asset 1", "TRA1",
    RWA_META, GOV_SUPPLY, deployer.address,
    cfg.mockUSDC, MIN_WHITELIST_BALANCE,
    CHAINLINK_FEEDS[networkName]
  );
  await rwa.waitForDeployment();
  const addr = await rwa.getAddress();
  console.log("\nDigitalRWA deployed:", addr);
  console.log(">>> UPDATE frontend/src/config/contracts.ts digitalRWA + READMEs + STATUS.md <<<\n");

  // USDT holder-gating whitelist
  await rwa.setWhitelistToken(cfg.mockUSDT, hre.ethers.parseUnits("1000", 18));
  console.log("Whitelist: USDC(1000, constructor) + USDT(1000) set");

  // Price
  try {
    await rwa.syncPrice();
    console.log("Price synced from oracle:", hre.ethers.formatUnits(await rwa.currentPrice(), 8));
  } catch {
    await rwa.setManualPrice(MANUAL_PRICES[networkName] ?? MANUAL_PRICES.amoy);
    console.log("Oracle dead — manual price set:", hre.ethers.formatUnits(await rwa.currentPrice(), 8), "USD");
  }

  // Sanity checks
  const price = await rwa.currentPrice();
  const usdtOk = await rwa.whitelistTokens(cfg.mockUSDT);
  console.log("\nSanity: currentPrice =", price.toString(), "| USDT minBalance =", usdtOk.toString());
  if (price === 0n) throw new Error("currentPrice still zero!");
  const verifyArgs = `npx hardhat verify --network ${networkName} ${addr} "Trestle Real Asset 1" "TRA1" "${RWA_META}" ${GOV_SUPPLY} ${deployer.address} ${cfg.mockUSDC} ${MIN_WHITELIST_BALANCE} ${CHAINLINK_FEEDS[networkName]}`;
  console.log("\nVerify with:\n  " + verifyArgs);
  try {
    await hre.run("verify:verify", {
      network: networkName,
      address: addr,
      constructorArguments: [
        "Trestle Real Asset 1", "TRA1", RWA_META, GOV_SUPPLY,
        deployer.address, cfg.mockUSDC, MIN_WHITELIST_BALANCE, CHAINLINK_FEEDS[networkName],
      ],
    });
    console.log("✅ verified on explorer");
  } catch (e) {
    console.log("verify failed (can retry manually):", e.message?.slice(0, 120));
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
