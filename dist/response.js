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
  _createClass(Response, [{
    key: "setHeader",


    /**
    * Sets a response header
    */
    value: function setHeader(name, value) {
      throw new Error("Not implemented");
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
      throw new Error("Not implemented");
    },
    set: function set(value) {
      throw new Error("Not implemented");
    }

    /**
    * The HTTP status (string)
    */

  }, {
    key: "status",
    get: function get() {
      throw new Error("Not implemented");
    },
    set: function set(value) {
      throw new Error("Not implemented");
    }
  }, {
    key: "body",
    get: function get() {
      throw new Error("Not implemented");
    },
    set: function set(value) {
      throw new Error("Not implemented");
    }

    /**
    * Construction
    */

  }]);

  function Response() {
    _classCallCheck(this, Response);

    this.statusCode = 404;
  }

  return Response;
}();
//# sourceMappingURL=response.js.map
