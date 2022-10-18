module.exports = {
  preset: "ts-jest",
  verbose: false,
  testEnvironment: "jsdom",
  collectCoverageFrom: ["<rootDir>/tests/**/*.{ts,tsx,js,jsx}"],
  modulePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/build/"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["js", "ts", "tsx"],
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(j|t)sx?$": ["ts-jest"],
  },
};
