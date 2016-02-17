"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _anyPromise = require("any-promise");

var _anyPromise2 = _interopRequireDefault(_anyPromise);

var _url = require("url");

var _url2 = _interopRequireDefault(_url);

var _queryParser = require("./queryParser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _anyPromise2.default(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return _anyPromise2.default.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// the default query parser
var defaultQueryParser = new _queryParser.QueryParser();

/**
* The provider base class, all methods may return promises
*/

var Provider = exports.Provider = function () {

  /**
  * Construction
  */

  function Provider(_ref) {
    var queryParser = _ref.queryParser;

    _classCallCheck(this, Provider);

    this.queryParser = queryParser || defaultQueryParser;
  }

  /**
  * Populates a response given a request
  */


  _createClass(Provider, [{
    key: "populateResponse",
    value: function () {
      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(request, response) {
        var handler;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _anyPromise2.default.resolve(this.getHandler(request));

              case 2:
                handler = _context.sent;
                _context.next = 5;
                return handler(request, response);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function populateResponse(_x, _x2) {
        return ref.apply(this, arguments);
      };
    }()

    /**
    * Parses an incoming request
    */

  }, {
    key: "parseRequest",
    value: function parseRequest(request) {

      // parse the url
      request.parsedUrl = _url2.default.parse(request.url);
    }

    /**
    * Gets a handler for a request, which is an action applied
    * to the request state and response (to populate the response)
    */

  }, {
    key: "getHandler",
    value: function getHandler(request) {

      // first, parse the request
      this.parseRequest(request);

      // normalize and check the cache?

      // now, get the components of the handler

      var _createHandlerMethods = this.createHandlerMethods(request);

      var getResult = _createHandlerMethods.getResult;
      var transformResult = _createHandlerMethods.transformResult;

      // return the handler function

      return function (requestState, response) {

        // call to get the result based on the request state, store
        // results in response

        var _getResult = getResult(requestState);

        var result = _getResult.result;
        var statusCode = _getResult.statusCode;

        response.body = transformResult(result);
        response.statusCode = statusCode;
      };
    }

    /**
    * Get the handler components, to get the result and status contextIdentifier
    * and then further transform the results
    */

  }, {
    key: "createHandlerMethods",
    value: function createHandlerMethods(request) {
      return this.queryParser.parse({ url: request.parsedUrl });
    }

    /**
    * Returns a set of entities by name
    */

  }, {
    key: "getEntities",
    value: function getEntities(_ref2) {
      var name = _ref2.name;

      throw new Error("Not implemented");
    }

    /**
    * Evaluates the context to get a result
    */

  }, {
    key: "populateResult",
    value: function populateResult(_ref3) {
      var context = _ref3.context;

      throw new Error("Not implemented");
    }
  }]);

  return Provider;
}();
//# sourceMappingURL=provider.js.map
