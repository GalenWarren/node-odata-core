"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The main service class
*/

var Service = exports.Service = function () {

  /**
  * Construction
  */

  function Service(_ref) {
    var provider = _ref.provider;
    var options = _ref.options;

    _classCallCheck(this, Service);

    this.provider = provider;
    this.options = options;
  }

  /**
  * Handles a request in the supplied context
  */


  _createClass(Service, [{
    key: "handle",
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(context) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.provider.populateResponse(context.request, context.response);

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 5]]);
      }));

      return function handle(_x) {
        return ref.apply(this, arguments);
      };
    }()
  }]);

  return Service;
}();
//# sourceMappingURL=service.js.map
