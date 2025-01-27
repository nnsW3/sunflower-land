export {};

jest.doMock("assets/sunnyside", () => ({
  SUNNYSIDE: {
    soil: {},
    animals: {},
    vfx: {},
    icons: {},
    npcs: {},
    resource: {},
    tools: {},
    ui: {},
    decorations: {},
  },
}));

const NETWORK = process.env.VITE_NETWORK as "mainnet" | "amoy";
const DONATION_ADDRESS = process.env.VITE_DONATION_ADDRESS;

const POLYGON_CHAIN_ID = NETWORK === "mainnet" ? 137 : 80002;

const WISHING_WELL_CONTRACT = process.env.VITE_WISHING_WELL_CONTRACT;
const ACCOUNT_MINTER_CONTRACT = process.env.ACCOUNT_MINTER_CONTRACT;
const FARM_CONTRACT = process.env.VITE_FARM_CONTRACT;
const INVENTORY_CONTRACT = process.env.VITE_INVENTORY_CONTRACT;
const PAIR_CONTRACT = process.env.VITE_PAIR_CONTRACT;
const SESSION_CONTRACT = process.env.VITE_SESSION_CONTRACT;
const TOKEN_CONTRACT = process.env.VITE_TOKEN_CONTRACT;

export const configMock = jest.fn(() => ({
  CONFIG: {
    NETWORK,
    POLYGON_CHAIN_ID,
    DONATION_ADDRESS,
    WISHING_WELL_CONTRACT,
    ACCOUNT_MINTER_CONTRACT,
    FARM_CONTRACT,
    INVENTORY_CONTRACT,
    PAIR_CONTRACT,
    SESSION_CONTRACT,
    TOKEN_CONTRACT,
  },
}));

jest.mock("lib/config", () => ({
  get CONFIG() {
    return {
      NETWORK,
      POLYGON_CHAIN_ID,
      DONATION_ADDRESS,
      WISHING_WELL_CONTRACT,
      ACCOUNT_MINTER_CONTRACT,
      FARM_CONTRACT,
      INVENTORY_CONTRACT,
      PAIR_CONTRACT,
      SESSION_CONTRACT,
      TOKEN_CONTRACT,
    }; // set some default value
  },
}));
