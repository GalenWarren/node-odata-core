"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertySchema = undefined;
exports.property = property;
exports.getProperties = getProperties;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// some keys
var propertiesKey = Symbol();

/**
* Class for property schema
*/

var PropertySchema = exports.PropertySchema = function PropertySchema(_ref) {
  var name = _ref.name;
  var type = _ref.type;

  _classCallCheck(this, PropertySchema);

  this.name = name;
  this.type = type;
};

/**
* Property decorator, adds metadata to the parent class
* about this property
*/


function property(_ref2) {
  var name = _ref2.name;
  var type = _ref2.type;


  return function (target, propertyName) {

    // access the properties
    var actualTarget = (0, _util.getPrototype)(target);
    var properties = actualTarget[propertiesKey];
    if (!properties) {
      properties = actualTarget[propertiesKey] = {};
    }

    // assign the property
    var actualName = name || propertyName;
    properties[propertyName] = new PropertySchema({
      name: actualName,
      type: type
    });
  };
}

/**
* Gets all properties
*/
function getProperties(target) {
  return (0, _util.getPrototype)(target)[propertiesKey] || {};
}
//# sourceMappingURL=property.js.map
