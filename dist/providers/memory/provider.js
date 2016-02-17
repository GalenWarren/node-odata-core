"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MemoryProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aureliaDependencyInjection = require("aurelia-dependency-injection");

var _provider = require("../provider");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* The default provider, that just operates on in-memory objects
*/

var MemoryProvider = exports.MemoryProvider = function (_Provider) {
  _inherits(MemoryProvider, _Provider);

  /**
  * The entities map is a map of entity names to arrays of objects
  */

  function MemoryProvider(_ref) {
    var schema = _ref.schema;
    var entitySets = _ref.entitySets;

    _classCallCheck(this, MemoryProvider);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MemoryProvider).call(this));

    _this.schema = schema;
    _this.entitySets = entitySets;
    return _this;
  }

  /**
  * Gets a set of entities
  */


  _createClass(MemoryProvider, [{
    key: "getEntities",
    value: function getEntities(name) {
      var set = this.entitySets[name];
      if (!set) {
        throw new Error("Entity collection " + name + " not found");
      }
      return _lodash2.default.chain(set);
    }

    /**
    * The filter implementation
    */

  }, {
    key: "filter",
    value: function filter(set, predicate) {
      return set.filter(predicate);
    }

    /**
    * The top implementation
    */

  }, {
    key: "top",
    value: function top(set, count) {
      return set.take(count);
    }
  }]);

  return MemoryProvider;
}(_provider.Provider);
//# sourceMappingURL=provider.js.map
