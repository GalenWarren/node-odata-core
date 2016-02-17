"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Schema = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// the named schemas
var namedSchemas = {};

/**
* The schema class
*/

var Schema = exports.Schema = function () {

  /**
  * Constructor
  */

  function Schema() {
    _classCallCheck(this, Schema);

    this.entities = new Map();
  }

  /**
  * Adds an entity schema object
  */


  _createClass(Schema, [{
    key: "setEntitySchema",
    value: function setEntitySchema(entitySchema) {
      this.entities.set(entitySchema.target, entitySchema);
    }

    /**
    * Returns a schema by name
    */

  }], [{
    key: "get",
    value: function get() {
      var name = arguments.length <= 0 || arguments[0] === undefined ? "default" : arguments[0];

      var schema = namedSchemas[name];
      if (!schema) {
        schema = namedSchemas[name] = new Schema();
      }
      return schema;
    }
  }]);

  return Schema;
}();
//# sourceMappingURL=schema.js.map
