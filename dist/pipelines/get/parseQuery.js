"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ParseQueryComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _index = require("../../pipeline/index");

var _component = require("../component");

var _parseUrl = require("./parseUrl");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* A pipeline component that parses a url
*/
var ParseQueryComponent = exports.ParseQueryComponent = (_dec = (0, _index.follows)(_parseUrl.ParseUrlComponent), _dec(_class = function (_PipelineComponent) {
  _inherits(ParseQueryComponent, _PipelineComponent);

  function ParseQueryComponent() {
    _classCallCheck(this, ParseQueryComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ParseQueryComponent).apply(this, arguments));
  }

  _createClass(ParseQueryComponent, [{
    key: "handle",


    /**
    * The main execute method
    */
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(context, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:

                console.log("Start parse query");

                _context.next = 3;
                return next();

              case 3:

                console.log("End parse query");

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handle(_x, _x2) {
        return ref.apply(this, arguments);
      };
    }()
  }]);

  return ParseQueryComponent;
}(_component.PipelineComponent)) || _class);
//# sourceMappingURL=parseQuery.js.map
