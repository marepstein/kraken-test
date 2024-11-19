const nextJest = require("next/jest");

const { pathsToModuleNameMapper } = require("ts-jest");

const { compilerOptions } = require("./tsconfig.json");

const moduleNameMapper = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: "<rootDir>/",
});

// const createJestConfig = nextJest({
//   dir: "./",
// });

const ignoreFolders = [
  "/build/",
  "node_modules/(?!(@tanstack)/)",
  "/.next",
  "/.open-next",
];

const customJestConfig = {
  preset: "ts-jest",
  verbose: true,
  setupFilesAfterEnv: ["<rootDir>/config/jest/jest.setup.ts"],
  testPathIgnorePatterns: ignoreFolders,
  transformIgnorePatterns: ignoreFolders,
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.test.json" }],
    "^.+\\.(css|less)$": "<rootDir>/config/jest/stubs/css.js",
    "^.+\\.(jpg|gif|webp|png)$": "<rootDir>/config/jest/stubs/image.js",
  },
  collectCoverageFrom: [
    "src/**/*.{ts,}",
    "!**/*.d.{ts,}",
    "!**/test.{ts,}",
    "!**/spec.{ts,}",
    "!**/*.test.{ts,}",
    "!**/*.spec.{ts,}",
    "!src/**/__test__/**/*",
    "!src/**/__test__/*",
    "!src/**/__tests__/**/*",
    "!src/**/__tests__/*",
    "!src/**/__mock__/**/*",
    "!src/**/__mock__/*",
    "!src/**/__mocks__/*",
    "!src/**/__mocks__/**/*",
  ],
  moduleNameMapper,
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = customJestConfig;
