module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/esm",
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
};
