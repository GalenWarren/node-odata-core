"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultProvider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _provider = require("../provider");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The default provider, that just operates on arrays
*/

var DefaultProvider = exports.DefaultProvider = function () {

  /**
  * The entities map is a map of entity names to arrays of objects
  */

  function DefaultProvider(_ref) {
    var entityCollections = _ref.entityCollections;

    _classCallCheck(this, DefaultProvider);

    this.entityCollections = entityCollections;
  }

  /**
  * Gets a set of entities
  */


  _createClass(DefaultProvider, [{
    key: "getEntities",
    value: function getEntities(name) {
      var entities = this.entityCollections[name];
      if (!entities) {
        throw new Error("Entity collection " + name + " not found");
      }
      return entities;
    }
  }]);

  return DefaultProvider;
}();
//# sourceMappingURL=provider.js.map
