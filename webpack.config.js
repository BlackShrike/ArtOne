const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pages = [
  "Home",
  "Original",
  "FAQ",
  "Login",
  "SearchResults",
  "Search",
  "FindAccount",
  "FindAccountResult",
  "Signup",
  "Mypage",
  "Checkout",
  "Ordercheckout",
  "Paymentresult",
  "Signature",
  "Artist",
  "ArtistDetail",
  "Business",
  "Review",
  "Promotion",
  "PromotionDetail",
  "Termsofservice",
];

module.exports = {
  entry: pages.reduce((config, page) => {
    config[page.toLowerCase()] = `./src/pages/${page}.js`;
    return config;
  }, {}),
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...pages.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: "./public/index.html",
          filename: `${page.toLowerCase()}.html`,
          chunks: [page.toLowerCase()],
        })
    ),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
    historyApiFallback: true,
  },
};
