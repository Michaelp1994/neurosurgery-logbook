const startServer = require("./packages/server/dist/index.js");
const clientFiles = __dirname + "/packages/web/dist";
startServer.default(clientFiles).catch((e) => {
  console.log("Error:", e);
});
// startServer();
