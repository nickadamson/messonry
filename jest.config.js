module.exports = {
  testEnvironment: "jsdom",
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["js", "ts", "tsx"],
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(j|t)sx?$": ["ts-jest"],
  },
}
