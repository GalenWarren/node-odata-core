"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Service = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _handler = require("./handler");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The main service class
*/
var Service = exports.Service = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaDependencyInjection.All.of(_handler.Handler)), _dec(_class = function () {

  /**
  * Construction
  */

  function Service(handlers) {
    _classCallCheck(this, Service);

    this.handlers = handlers;
  }

  /**
  * Handles a request in the supplied context
  */


  _createClass(Service, [{
    key: "handle",
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(context) {
        var handler;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                // look for the appropriate handler
                handler = _(this.handlers).find(function (h) {
                  return h.canHandle(context);
                });

                if (handler) {
                  _context.next = 3;
                  break;
                }

                throw new HttpError(400);

              case 3:
                _context.next = 5;
                return handler.handle(context);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handle(_x) {
        return ref.apply(this, arguments);
      };
    }()
  }]);

  return Service;
}()) || _class);
//# sourceMappingURL=service.js.map
