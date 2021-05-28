module.exports = {
  core: {
    builder: 'webpack5'
  },
  babel: async (options) => ({
    ...options,
    plugins: [
      ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      ["@babel/plugin-proposal-private-methods", { "loose": true }]
    ]
  }),
  "stories": [
    "./stories/**/*.stories.mdx",
    "./stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-postcss",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}
