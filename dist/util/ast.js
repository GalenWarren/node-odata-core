"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ast = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
* Supports ast generation ...
*/

var Ast = exports.Ast = function () {
  function Ast() {
    _classCallCheck(this, Ast);
  }

  _createClass(Ast, null, [{
    key: "identifier",


    /**
    * Constructs an ast identifier expression
    */
    value: function identifier(_ref) {
      var name = _ref.name;

      return {
        type: "Identifier",
        name: name
      };
    }

    /**
    * Constructs a literal expression
    */

  }, {
    key: "literal",
    value: function literal(_ref2) {
      var value = _ref2.value;

      return {
        type: "Literal",
        value: value,
        rawValue: value.toString()
      };
    }

    /**
    * Creates an esprima-style object representing member access against
    * a target
    */

  }, {
    key: "memberExpression",
    value: function memberExpression(_ref3) {
      var target = _ref3.target;
      var memberName = _ref3.memberName;


      // return the MemberExpression
      return {
        type: "MemberExpression",
        computed: false,
        object: target,
        property: Ast.identifier({
          name: memberName
        })
      };
    }

    /**
    * Creates an expression for a path of property accesses, like a.b.c
    */

  }, {
    key: "memberPathExpression",
    value: function memberPathExpression(_ref4) {
      var path = _ref4.path;


      var parts = path.split(".");
      return (0, _lodash2.default)(parts).slice(1).reduce(function (part, target) {
        return Ast.memberExpression({
          target: target,
          memberName: part
        });
      }, Ast.identifier({
        name: parts[0]
      }));
    }

    /**
    * Creates a call expression
    */

  }, {
    key: "callExpression",
    value: function callExpression(_ref5) {
      var callee = _ref5.callee;
      var args = _ref5.args;

      return {
        type: "CallExpression",
        callee: callee,
        "arguments": args
      };
    }

    /**
    * Creates a return statement
    */

  }, {
    key: "returnStatement",
    value: function returnStatement(_ref6) {
      var argument = _ref6.argument;

      return {
        type: "ReturnStatement",
        argument: argument
      };
    }

    /**
    * Creates a block statement for provided body array
    */

  }, {
    key: "blockStatement",
    value: function blockStatement(_ref7) {
      var body = _ref7.body;

      return {
        type: "BlockStatement",
        body: body
      };
    }

    /**
    * Creates a function declaration
    */

  }, {
    key: "functionDeclaration",
    value: function functionDeclaration(_ref8) {
      var functionName = _ref8.functionName;
      var body = _ref8.body;
      var _ref8$paramNames = _ref8.paramNames;
      var paramNames = _ref8$paramNames === undefined ? [] : _ref8$paramNames;
      var _ref8$defaults = _ref8.defaults;
      var defaults = _ref8$defaults === undefined ? [] : _ref8$defaults;

      return {
        type: "FunctionDeclaration",
        id: Ast.identifier({
          name: functionName
        }),
        params: paramNames.map(function (name) {
          return Ast.identifier({
            name: name
          });
        }),
        defaults: defaults,
        body: body,
        generator: false,
        expression: false
      };
    }

    /**
    * Creates a program node
    */

  }, {
    key: "program",
    value: function program(_ref9) {
      var body = _ref9.body;

      return {
        type: "Program",
        body: body
      };
    }
  }]);

  return Ast;
}();
//# sourceMappingURL=ast.js.map
