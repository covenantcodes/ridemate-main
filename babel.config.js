// babel.config.js
module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@screens": "./src/screens",
          screens: "./src/screens",
          "@components": "./src/components",
          components: "./src/components",
          "@utils": "./src/utils",
          utils: "./src/utils",
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
  ],
};
