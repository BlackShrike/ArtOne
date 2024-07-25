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
      onProxyReq: (proxyReq) => {
        proxyReq.setHeader(
          "Access-Control-Allow-Headers",
          "access-token, Content-Type"
        );
      },
      onProxyRes: (proxyRes) => {
        proxyRes.headers["Access-Control-Allow-Headers"] =
          "access-token, Content-Type";
      },
    })
  );
};
