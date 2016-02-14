"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.entity = entity;
exports.getEntityMetadata = getEntityMetadata;

var _aureliaMetadata = require("aurelia-metadata");

// some keys
var metadataKey = Symbol();

/**
* Property decorator, adds metadata about this property
*/
function entity(_ref) {
  var collection = _ref.collection;
  var key = _ref.key;


  return function (target) {
    target[metadataKey] = { collection: collection, key: key };
  };
}

/**
* Returns entity metadata for an object
*/
function getEntityMetadata(target) {
  return target[metadataKey] || {};
}
//# sourceMappingURL=entity.js.map
