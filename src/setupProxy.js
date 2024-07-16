// src/setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://api.imweb.me",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/v2",
      },
    })
  );
};
