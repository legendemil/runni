var liveServer = require("live-server");

var params = {
    file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
    mount: [['/components', './node_modules']], // Mount a directory to a route.
    logLevel: 2 // 0 = errors only, 1 = some, 2 = lots
};
liveServer.start(params);