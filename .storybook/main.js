const webpack = require("webpack");

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
  webpackFinal: async (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      buffer: require.resolve("buffer/"),
      fs: false,
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      stream: require.resolve("stream-browserify"),
    };

    config.plugins = [
      ...config.plugins,
      // Work around for Buffer is undefined:
      // https://github.com/webpack/changelog-v5/issues/10
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ];

    console.log(config.plugins);
    return config;
  },
};
