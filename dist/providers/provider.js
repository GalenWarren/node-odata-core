"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The provider base class
*/

var Provider = exports.Provider = function () {
  function Provider() {
    _classCallCheck(this, Provider);
  }

  _createClass(Provider, [{
    key: "getEntities",


    /**
    * Returns a set of entities by name
    *
    * May return promise
    */
    value: function getEntities(name) {
      throw new Error("Not implemented");
    }

    /**
    * Optimized a transform against a set of entities through
    * techniques such as predicate pushdown, etc
    *
    * May return a promise
    */

  }, {
    key: "optimize",
    value: function optimize(_ref) {
      var entities = _ref.entities;
      var transform = _ref.transform;

      return { entities: entities, transform: transform };
    }

    /**
    * Gets a set of entities
    *
    * May return a promise
    */

  }, {
    key: "get",
    value: function get(entities) {
      return entities;
    }
  }]);

  return Provider;
}();
//# sourceMappingURL=provider.js.map
