"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpressionParser = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ast = require("../util/ast");

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
    value: function parse(_ref) {
      var expression = _ref.expression;


      // construct the ast
      var ast = this.visit({ node: expression });
      console.log(ast);
    }

    /**
    * Root visit method
    */

  }, {
    key: "visit",
    value: function visit(_ref2) {
      var node = _ref2.node;


      // look for the method
      var method = this["visit_" + node.type];
      if (!method) {
        throw new Error("Encountered unrecognized node type " + node.type);
      }

      // call it
      return method.call(this, { node: node });
    }

    /**
    * Equality node, translate to ast
    */

  }, {
    key: "visit_eq",
    value: function visit_eq(_ref3) {
      var node = _ref3.node;

      return {
        type: "ExpressionStatement",
        expression: {
          type: "BinaryExpression",
          operator: "===",
          left: this.visit({ node: node.left }),
          right: this.visit({ node: node.right })
        }
      };
    }

    /**
    * Property node
    */

  }, {
    key: "visit_property",
    value: function visit_property(_ref4) {
      var node = _ref4.node;

      return _ast.Ast.identifier({ name: node.name });
    }
    /**
    * Literal node
    */

  }, {
    key: "visit_literal",
    value: function visit_literal(_ref5) {
      var node = _ref5.node;

      return _ast.Ast.literal({ value: node.value });
    }
  }]);

  return ExpressionParser;
}();
//# sourceMappingURL=expressionParser.js.map
