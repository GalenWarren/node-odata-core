"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The base response object
*/

var Response = exports.Response = function () {
  function Response() {
    _classCallCheck(this, Response);
  }

  _createClass(Response, [{
    key: "setHeader",


    /**
    * Sets a response header
    */
    value: function setHeader(name, value) {
      throw new Error("Not implemented: setHeader");
    }

    /**
    * Access the response body
    */

  }, {
    key: "statusCode",


    /**
    * The HTTP status code
    */
    get: function get() {
      throw new Error("Not implemented: statusCode");
    },
    set: function set(value) {
      throw new Error("Not implemented: statusCode");
    }

    /**
    * The HTTP status (string)
    */

  }, {
    key: "status",
    get: function get() {
      throw new Error("Not implemented: status");
    },
    set: function set(value) {
      throw new Error("Not implemented: status");
    }
  }, {
    key: "body",
    get: function get() {
      throw new Error("Not implemented: body");
    },
    set: function set(value) {
      throw new Error("Not implemented: body");
    }
  }]);

  return Response;
}();
//# sourceMappingURL=response.js.map
