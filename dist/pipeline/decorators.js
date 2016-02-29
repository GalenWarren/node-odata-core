"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.precedesTypes = exports.followsTypes = undefined;
exports.follows = follows;
exports.precedes = precedes;

var _aureliaMetadata = require("aurelia-metadata");

// symbols for tracking metadata
var followsTypes = exports.followsTypes = Symbol();
var precedesTypes = exports.precedesTypes = Symbol();

/**
* A decorator that indicates that a type follows another type
*/
function follows() {
  for (var _len = arguments.length, types = Array(_len), _key = 0; _key < _len; _key++) {
    types[_key] = arguments[_key];
  }

  return function (target) {
    _aureliaMetadata.metadata.define(followsTypes, types, target);
  };
}

/**
* A decorator that indicates that a type follows another type
*/
function precedes() {
  for (var _len2 = arguments.length, types = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    types[_key2] = arguments[_key2];
  }

  return function (target) {
    _aureliaMetadata.metadata.define(precedesTypes, types, target);
  };
}
//# sourceMappingURL=decorators.js.map
