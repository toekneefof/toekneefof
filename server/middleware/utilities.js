// Generated by CoffeeScript 1.9.2
(function() {
  var setHeaders;

  setHeaders = function(req, res, next) {
    res.set("X-Powered-By", "toeknee");
    return next();
  };

  module.exports = {
    setHeaders: setHeaders
  };

}).call(this);
