import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    arbitrumNova: {
      chainId: 42170,
      accounts: [process.env.PRIVATE_KEY ?? ""],
      timeout: 600000000,
      url: process.env.ARBITRUM_NOVA_RPC_URI,
    },
  },
  etherscan: {
    apiKey: {
      arbitrumNova: process.env.ARBITRUM_NOVA_API_KEY ?? "",
    },
    customChains: [
      {
        network: "arbitrumNova",
        chainId: 42170,
        urls: {
          apiURL: "https://api-nova.arbiscan.io/api",
          browserURL: "https://nova.arbiscan.io",
        },
      },
    ],
  },
};

export default config;
