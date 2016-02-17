"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* An OData request
*/

var Request =

/**
* Construction
*/
exports.Request = function Request(_ref) {
  var url = _ref.url;
  var _ref$headers = _ref.headers;
  var headers = _ref$headers === undefined ? {} : _ref$headers;
  var _ref$body = _ref.body;
  var body = _ref$body === undefined ? null : _ref$body;
  var _ref$state = _ref.state;
  var state = _ref$state === undefined ? {} : _ref$state;

  _classCallCheck(this, Request);

  this.url = url;
  this.headers = headers;
  this.body = body;
  this.state = state;
};
//# sourceMappingURL=request.js.map
