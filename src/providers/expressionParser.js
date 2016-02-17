import {Ast} from "../util/ast";

/**
* The expression parser
*/
export class ExpressionParser {

  /**
  * Parse the expression to return a function
  */
  parse({ expression }) {

    // construct the ast
    const ast = this.visit({ node: expression });
    console.log( ast );
  }

  /**
  * Root visit method
  */
  visit({ node }) {

    // look for the method
    const method = this[`visit_${node.type}`];
    if (!method) {
      throw new Error( `Encountered unrecognized node type ${node.type}`);
    }

    // call it
    return method.call( this, { node });
  }

  /**
  * Equality node, translate to ast
  */
  visit_eq({ node }) {
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
  visit_property({node}) {
    return Ast.identifier({ name: node.name });
  }
  /**
  * Literal node
  */
  visit_literal({node}) {
    return Ast.literal({ value: node.value });
  }

}
