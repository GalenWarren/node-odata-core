"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.property = property;
exports.getPropertiesMetadata = getPropertiesMetadata;
// some keys
var propertiesKey = Symbol();

/**
* Property decorator, adds metadata to the parent class
* about this property
*/
function property(_ref) {
  var name = _ref.name;
  var type = _ref.type;


  debugger;

  return function (target, key, descriptor) {

    debugger;

    // access the properties
    var properties = descriptor.parent[propertiesKey];
    if (!properties) {
      properties = descriptor.parent[propertiesKey] = {};
    }

    // assign the property
    var actualName = name || descriptor.name;
    properties[descriptor.name] = {
      name: actualName,
      type: type
    };
  };
}

/**
* Returns properties metadata for an object
*/
function getPropertiesMetadata(target) {
  return target[propertiesKey] || {};
}
//# sourceMappingURL=property.js.map
