// Generated by CoffeeScript 1.9.3
(function() {
  var func_coin;

  func_coin = __F('coin');

  module.exports = function(req, res, next) {
    return func_coin.getWeekTop(function(error, users) {
      res.locals.weekTopUsers = users;
      return next();
    });
  };

}).call(this);
