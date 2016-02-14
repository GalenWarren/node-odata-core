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
  var headers = _ref.headers;
  var body = _ref.body;

  _classCallCheck(this, Request);

  this.url = url;
  this.headers = headers;
  this.body = body;
};
//# sourceMappingURL=request.js.map
