"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrototype = getPrototype;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* This finds the prototype if a function is passed in; otherwise,
* returns the target ...
*/
function getPrototype(target) {
  return _lodash2.default.isFunction(target) ? target.prototype : target;
}
//# sourceMappingURL=util.js.map
