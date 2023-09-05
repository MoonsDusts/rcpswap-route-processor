import { ethers } from "hardhat";

async function main() {
  const routeProcessor = await ethers.deployContract("RouteProcessor", [
    "0xd52c556ecbd260cf3bf5b78f3f94d6878939adf7",
    [
      "0xd52c556ecbd260cf3bf5b78f3f94d6878939adf7",
      "0x367db1215Bf0eFfdBc9a10d9Fd4dD9dD896f670e",
    ],
  ]);

  await routeProcessor.waitForDeployment();

  console.log("Route Processor Address: ", routeProcessor.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
