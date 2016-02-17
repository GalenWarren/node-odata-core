"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntitySchema = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.entity = entity;

var _schema = require("./schema");

var _util = require("./util");

var _property = require("./property");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Class for entity shcema
*/

var EntitySchema = exports.EntitySchema = function () {

  /**
  * Constructor
  */

  function EntitySchema(_ref) {
    var collection = _ref.collection;
    var key = _ref.key;
    var target = _ref.target;

    _classCallCheck(this, EntitySchema);

    this.collection = collection;
    this.key = key;
    this.target = target;
  }

  /**
  * Get the properties
  */


  _createClass(EntitySchema, [{
    key: "properties",
    get: function get() {
      return (0, _property.getProperties)(this.target);
    }
  }]);

  return EntitySchema;
}();

/**
* Property decorator, adds metadata about this property
*/


function entity(_ref2) {
  var collection = _ref2.collection;
  var key = _ref2.key;
  var _ref2$schema = _ref2.schema;
  var schema = _ref2$schema === undefined ? "default" : _ref2$schema;


  return function (target) {

    _schema.Schema.get(schema).setEntitySchema(new EntitySchema({
      collection: collection,
      key: key,
      target: (0, _util.getPrototype)(target)
    }));
  };
}
//# sourceMappingURL=entity.js.map
