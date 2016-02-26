"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryParser = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _odataParser = require("odata-parser");

var _odataParser2 = _interopRequireDefault(_odataParser);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _ast = require("../util/ast");

var _expressionParser = require("./expressionParser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// some identifiers
var contextIdentifier = _ast.Ast.identifier("context");
var resultIdentifier = _ast.Ast.identifier("result");

/**
* A map of operations to the order in which they must be performed
*/
var operations = new Map(_lodash2.default.map(["$filter", "$top"], function (operation, index) {
  return [operation, index];
}));

// the default expression parser
var defaultExpressionParser = new _expressionParser.ExpressionParser();

/**
* A query parser that uses a visitor pattern
*/

var QueryParser = exports.QueryParser = function () {

  /**
  * Construction
  */

  function QueryParser() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$expressionParser = _ref.expressionParser;
    var expressionParser = _ref$expressionParser === undefined ? null : _ref$expressionParser;

    _classCallCheck(this, QueryParser);

    this.expressionParser = expressionParser || defaultExpressionParser;
  }

  /**
  * Parse the query
  */


  _createClass(QueryParser, [{
    key: "parse",
    value: function parse(_ref2) {
      var _this = this;

      var url = _ref2.url;


      // parse the query portion if there is one
      var decodedQuery = decodeURIComponent(url.query);

      // generate and return the getResult and transformResult methods
      return (0, _lodash2.default)(_odataParser2.default.parse(decodedQuery)).toPairs()

      // sort the operations in execution order according to the operations
      // map defined above ...
      .sortBy(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2);

        var operation = _ref4[0];
        var value = _ref4[1];

        var index = operations.get(operation);
        if (_lodash2.default.isUndefined(index)) {
          throw new Error("Encountered unsupported operation " + operation);
        }
        return index;
      })

      // now, construct
      .reduce(function (_ref5, _ref6) {
        var getResult = _ref5.getResult;
        var transformResult = _ref5.transformResult;

        var _ref7 = _slicedToArray(_ref6, 2);

        var operation = _ref7[0];
        var value = _ref7[1];


        return _this["visit_" + operation]({ getResult: getResult, transformResult: transformResult, value: value });
      }, {

        // initial value to get the initial result
        getResult: function getResult(context) {
          return "Hello";
        },

        // the initial value for the transform (identity)
        transformResult: function transformResult(result) {
          return result;
        }

      });
    }

    /**
    * Handle the $filter operation
    */

  }, {
    key: "visit_$filter",
    value: function visit_$filter(_ref8) {
      var getResult = _ref8.getResult;
      var transformResult = _ref8.transformResult;
      var value = _ref8.value;


      // get the predicate
      var predicate = this.expressionParser.parse({ expression: value });

      // change transformResult to include a filter operation
      return {
        getResult: getResult,
        transformResult: _lodash2.default.wrap(transformResult, function (func, result) {
          return func();
        })
      };
    }
  }]);

  return QueryParser;
}();
//# sourceMappingURL=queryParser.js.map
