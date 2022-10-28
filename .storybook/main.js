module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "storybook-addon-next",
  ],
  framework: "@storybook/react",
  features: {
    storyStoreV7: true,
    emotionAlias: false,
  },
  core: {
    builder: "webpack5",
  },
};
