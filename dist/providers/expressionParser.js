"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* The expression parser
*/

var ExpressionParser = exports.ExpressionParser = function () {
  function ExpressionParser() {
    _classCallCheck(this, ExpressionParser);
  }

  _createClass(ExpressionParser, [{
    key: "parse",


    /**
    * Parse the expression to return a function
    */
    value: function parse(parsedExpression) {

      console.log(parsedExpression);
    }
  }]);

  return ExpressionParser;
}();
//# sourceMappingURL=expressionParser.js.map
