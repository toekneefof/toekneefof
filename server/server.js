// Generated by CoffeeScript 1.10.0
(function() {
  var app, async, boot, chatManager, http, io, loopback, path, server;

  path = require("path");

  loopback = require('loopback');

  boot = require('loopback-boot');

  app = module.exports = loopback();

  http = require("http");

  server = require('http').createServer(app);

  async = require("async");

  io = require('socket.io')(server);

  global.ins = require("util").inspect;

  chatManager = new (require(path.join(__dirname, "../lib/chat-manager.js")))(io);

  boot(app, __dirname);

  app.start = function() {
    var baseUrl, explorerPath;
    server.listen(app.get("port"));
    baseUrl = app.get('url').replace(/\/$/, '');
    app.emit('started');
    console.log("Web server listening at: " + baseUrl + " on port " + (app.get('port')));
    if (app.get('loopback-component-explorer')) {
      explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
    return server;
  };

  if (require.main === module) {
    app.start();
  }

}).call(this);
