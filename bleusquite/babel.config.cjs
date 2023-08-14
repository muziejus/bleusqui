"use strict";

module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
          esmodules: false,
        },
        useBuiltIns: "entry",
        corejs: "3.32.0",
        modules: "commonjs",
      },
    ],
  ],
};
