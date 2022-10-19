module.exports = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx,js,jsx}"],
  coveragePathIgnorePatterns: ["<rootDir>/src/stories/"],
  coverageThreshold: {
    global: {
      lines: 60,
    },
  },
  modulePathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/build/"],
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["js", "ts", "tsx"],
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(j|t)sx?$": ["ts-jest"],
  },
};
