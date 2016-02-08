// Generated by CoffeeScript 1.9.2
(function() {
  module.exports = function() {
    return function(req, res, next) {
      var start;
      console.log('Request tracking middleware triggered on %s', req.url);
      start = process.hrtime();
      res.once('finish', function() {
        var diff, ms;
        diff = process.hrtime(start);
        ms = diff[0] * 1e3 + diff[1] * 1e-6;
        console.log('The request processing time is %d ms.', ms);
      });
      next();
    };
  };

}).call(this);
