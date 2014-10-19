"use strict";

var Promise = require("bluebird");

class PowerDNS {
  constructor(hostname, port) {
    this.hostname = hostname;
    this.port = port;
  }

  config(name) {
    console.log(arguments);
  }
}

function callbackify(clazz) {
  for (var method in clazz.prototype) {
    if ("function" === typeof clazz.prototype[method]) {
      var fn = clazz.prototype[method];
      clazz.prototype[method] = function() {
        var callback;
        if ("function" === typeof arguments[arguments.length - 1]) {
          callback = arguments[arguments.length - 1];
        }
        var result = fn.apply(this, Array.prototype.slice.apply(arguments, 0, arguments.length - 1));
        if (result.then) {
          result.nodeify(callback);
        }
        return result;
      };
    }
  }
}

module.exports = callbackify(PowerDNS);

new PowerDNS().config();
