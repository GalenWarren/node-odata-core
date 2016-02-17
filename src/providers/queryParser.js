
import parser from "odata-parser";
import _ from "lodash";

import {Ast} from "../util/ast";
import {ExpressionParser} from "./expressionParser";

// some identifiers
const contextIdentifier = Ast.identifier("context");
const resultIdentifier = Ast.identifier("result");

/**
* A map of operations to the order in which they must be performed
*/
const operations = new Map(_.map([
  "$filter",
  "$top"
], (operation, index) => [ operation, index ]));

// the default expression parser
const defaultExpressionParser = new ExpressionParser();

/**
* A query parser that uses a visitor pattern
*/
export class QueryParser {

  /**
  * Construction
  */
  constructor({ expressionParser = null } = {}) {
    this.expressionParser = expressionParser || defaultExpressionParser;
  }

  /**
  * Parse the query
  */
  parse({ url }) {

    // parse the query portion if there is one
    const decodedQuery = decodeURIComponent( url.query );

    // generate and return the getResult and transformResult methods
    return _(parser.parse(decodedQuery)).toPairs()

      // sort the operations in execution order according to the operations
      // map defined above ...
      .sortBy( ([ operation, value ]) => {
        const index = operations.get( operation );
        if (_.isUndefined( index )) {
          throw new Error( `Encountered unsupported operation ${operation}`);
        }
        return index;


      })

      // now, construct
      .reduce(( { getResult, transformResult }, [operation,value]) => {

        return this[`visit_${operation}`]({ getResult, transformResult, value });

      }, {

        // initial value to get the initial result
        getResult: context => "Hello",

        // the initial value for the transform (identity)
        transformResult: result => result

      });

  }

  /**
  * Handle the $filter operation
  */
  visit_$filter({ getResult, transformResult, value }) {

    // get the predicate
    const predicate = this.expressionParser.parse({ expression: value });

    // change transformResult to include a filter operation
    return {
      getResult: getResult,
      transformResult: _.wrap( transformResult, (func, result) => {
        return func();
      })
    };

  }


}
