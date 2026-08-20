const hre = require("hardhat");

const CONTRACTS = {
  DigitalGoods:       "0x272475feaD659100E6DD8EBd8dB88E6f064DC112",
  FreelancerEscrow:   "0x6A08C1eE8102B41935a758b5E3093b075113E615",
  DigitalRWA:         "0x18dF08d96F303c6149a7f8CC4800BCa7fcAEB0Fd",
  FeeDistributor:     "0x754C549355215022453bDd9Cd19Cbc7b52B1E490",
  GovernanceToken:    "0x50915a301fF73278B3eaC09B42301abbC866F1Dc",
  MockUSDC:           "0xfe50dA41BfC13e99E9276149D0b534609C39633E",
  MockUSDT:           "0x635Ab939A2997eFDB42AD38F6A4919d8ae45b912",
  MockXNOBT:          "0x4cEaa30839E3E463484c2D66900fdD6484022054",
  MockXBRT:           "0xbA3B12F5633da2794c97CF330B19E510aE2BbB05",
  UserProfile:        "0xdd89E04e5bB9B79775A87Fa9666C5Fe03a01e169",
};

const TREASURY = "0x64A7ef92229D2D97d1C4fd3DB15Db2d94d3D66F6";
const CHAINLINK_FEED = "0x26dA680D98e805D54f0934f46b4669149c14d1cA";

let passed = 0;
let failed = 0;

async function check(label, promise) {
  try {
    const result = await promise;
    console.log(`  ✓ ${label}: ${result}`);
    passed++;
  } catch (e) {
    console.log(`  ✗ ${label}: ${e.message?.slice(0, 150)}`);
    failed++;
  }
}

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const net = await hre.ethers.provider.getNetwork();
  console.log(`\n=== Live Contract Verification — chainId ${net.chainId} ===\n`);
  console.log(`Caller: ${signer.address}`);
  console.log(`Balance: ${hre.ethers.formatEther(await hre.ethers.provider.getBalance(signer.address))} ETH\n`);

  // ── GovernanceToken ──
  console.log("[GovernanceToken]");
  const gov = await hre.ethers.getContractAt("MockGovernanceToken", CONTRACTS.GovernanceToken);
  await check("name()", gov.name());
  await check("symbol()", gov.symbol());
  await check("decimals()", gov.decimals());
  await check("totalSupply()", gov.totalSupply().then(v => hre.ethers.formatEther(v)));
  await check("balanceOf(treasury)", gov.balanceOf(TREASURY).then(v => hre.ethers.formatEther(v)));

  // ── FeeDistributor ──
  console.log("\n[FeeDistributor]");
  const fee = await hre.ethers.getContractAt("FeeDistributor", CONTRACTS.FeeDistributor);
  await check("treasury()", fee.treasury());
  await check("buybackBurn()", fee.buybackBurn());
  await check("yieldBps()", fee.yieldBps());
  await check("treasuryBps()", fee.treasuryBps());
  await check("yieldVault()", fee.yieldVault());

  // ── DigitalGoods ──
  console.log("\n[DigitalGoods]");
  const dg = await hre.ethers.getContractAt("DigitalGoods", CONTRACTS.DigitalGoods);
  await check("treasury()", dg.treasury());
  await check("PLATFORM_FEE_BPS()", dg.PLATFORM_FEE_BPS());
  await check("BPS()", dg.BPS());
  await check("listingCount()", dg.listingCount());

  // ── FreelancerEscrow ──
  console.log("\n[FreelancerEscrow]");
  const fe = await hre.ethers.getContractAt("FreelancerEscrow", CONTRACTS.FreelancerEscrow);
  await check("treasury()", fe.treasury());
  await check("PLATFORM_FEE_BPS()", fe.PLATFORM_FEE_BPS());
  await check("DISPUTE_TIMEOUT()", fe.DISPUTE_TIMEOUT());
  await check("MIN_MILESTONES()", fe.MIN_MILESTONES());
  await check("MILESTONE_APPROVAL_TIMEOUT()", fe.MILESTONE_APPROVAL_TIMEOUT());
  await check("projectCount()", fe.projectCount());
  await check("gigCount()", fe.gigCount());
  await check("yieldVault()", fe.yieldVault());
  await check("yieldEnabled()", fe.yieldEnabled());
  await check("feeDistributor()", fe.feeDistributor());

  // ── DigitalRWA ──
  console.log("\n[DigitalRWA]");
  const rwa = await hre.ethers.getContractAt("DigitalRWA", CONTRACTS.DigitalRWA);
  await check("name()", rwa.name());
  await check("symbol()", rwa.symbol());
  await check("totalSupply()", rwa.totalSupply().then(v => hre.ethers.formatEther(v)));
  await check("cap()", rwa.cap().then(v => hre.ethers.formatEther(v)));
  await check("metadataURI()", rwa.metadataURI());
  await check("priceFeed()", rwa.priceFeed());
  await check("currentPrice()", rwa.currentPrice().then(v => hre.ethers.formatEther(v)));
  await check("lastPriceUpdate()", rwa.lastPriceUpdate());
  await check("assetInfoSet()", rwa.assetInfoSet());
  await check("minGovBalance()", rwa.minGovBalance().then(v => hre.ethers.formatEther(v)));

  // ── UserProfile ──
  console.log("\n[UserProfile]");
  const up = await hre.ethers.getContractAt("UserProfile", CONTRACTS.UserProfile);
  await check("REVIEW_COOLDOWN()", up.REVIEW_COOLDOWN());
  await check("MIN_TOKEN_BALANCE()", up.MIN_TOKEN_BALANCE().then(v => hre.ethers.formatEther(v)));
  await check("reviewToken()", up.reviewToken());

  // ── Mock Tokens ──
  console.log("\n[Mock Tokens]");
  for (const [sym, addr] of [
    ["USDC", CONTRACTS.MockUSDC],
    ["USDT", CONTRACTS.MockUSDT],
    ["xNOBT", CONTRACTS.MockXNOBT],
    ["xBRT", CONTRACTS.MockXBRT],
  ]) {
    const tok = await hre.ethers.getContractAt("MockERC20", addr);
    const dec = await tok.decimals();
    await check(`${sym} name()`, tok.name());
    await check(`${sym} symbol()`, tok.symbol());
    await check(`${sym} decimals()`, dec);
    await check(`${sym} totalSupply()`, tok.totalSupply().then(v => hre.ethers.formatUnits(v, dec)));
    await check(`${sym} balanceOf(treasury)`, tok.balanceOf(TREASURY).then(v => hre.ethers.formatUnits(v, dec)));
  }

  // ── Chainlink Feed ──
  console.log("\n[Chainlink ETH/USD]");
  const feed = await hre.ethers.getContractAt("AggregatorV3Interface", CHAINLINK_FEED);
  await check("decimals()", feed.decimals());
  await check("latestRoundData()", feed.latestRoundData().then(([, answer, , updatedAt]) => {
    const price = Number(answer) / 1e8;
    const age = Math.floor(Date.now() / 1000) - Number(updatedAt);
    return `$${price.toFixed(2)} (${age}s ago)`;
  }));

  // ── Summary ──
  console.log(`\n=== Results: ${passed} passed, ${failed} failed ===\n`);
  if (failed > 0) process.exit(1);
}

main().catch((e) => {
  console.error("Fatal:", e);
  process.exit(1);
});
