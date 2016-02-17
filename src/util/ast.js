import _ from "lodash";

/**
* Supports ast generation ...
*/
export class Ast {

  /**
  * Constructs an ast identifier expression
  */
  static identifier({ name }) {
    return {
      type: "Identifier",
      name: name
    };
  }

  /**
  * Constructs a literal expression
  */
  static literal({ value }) {
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
  static memberExpression({ target, memberName }) {

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
  static memberPathExpression({ path }) {

    const parts = path.split(".");
    return _(parts).slice(1).reduce( ( part, target  ) => {
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
  static callExpression({ callee, args }) {
    return {
      type: "CallExpression",
      callee: callee,
      "arguments": args
    };
  }

  /**
  * Creates a return statement
  */
  static returnStatement({ argument }) {
    return {
      type: "ReturnStatement",
      argument: argument
    };
  }

  /**
  * Creates a block statement for provided body array
  */
  static blockStatement({ body }) {
    return {
      type: "BlockStatement",
      body: body
    };
  }

  /**
  * Creates a function declaration
  */
  static functionDeclaration({ functionName, body, paramNames = [], defaults = [] }) {
    return {
      type: "FunctionDeclaration",
      id: Ast.identifier({
        name: functionName
      }),
      params: paramNames.map( name => Ast.identifier({
        name: name
      })),
      defaults: defaults,
      body: body,
      generator: false,
      expression: false
    };
  }

  /**
  * Creates a program node
  */
  static program({ body }) {
    return {
      type: "Program",
      body: body
    };
  }

}
