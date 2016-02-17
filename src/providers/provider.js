import _ from "lodash";
import Promise from "any-promise";
import URL from "url";

import {QueryParser} from "./queryParser";

// the default query parser
const defaultQueryParser = new QueryParser();

/**
* The provider base class, all methods may return promises
*/
export class Provider {

  /**
  * Construction
  */
  constructor({ queryParser } = {}) {
    this.queryParser = queryParser || defaultQueryParser;
  }

  /**
  * Populates a response given a request
  */
  async populateResponse( request, response ) {

    // get the handler
    const handler = await Promise.resolve( this.getHandler( request ));

    // apply the handler to populate the response
    await handler( request, response );

  }

  /**
  * Parses an incoming request
  */
  parseRequest( request ) {

    // parse the url
    request.parsedUrl = URL.parse( request.url );

  }

  /**
  * Gets a handler for a request, which is an action applied
  * to the request state and response (to populate the response)
  */
  getHandler( request ) {

    // first, parse the request
    this.parseRequest( request );

    // normalize and check the cache?

    // now, get the components of the handler
    const { getResult, transformResult } = this.createHandlerMethods( request );

    // return the handler function
    return function( requestState, response ) {

      // call to get the result based on the request state, store
      // results in response
      const { result, statusCode } = getResult(requestState);
      response.body = transformResult( result );
      response.statusCode = statusCode;

    };

  }

  /**
  * Get the handler components, to get the result and status contextIdentifier
  * and then further transform the results
  */
  createHandlerMethods( request ) {
    return this.queryParser.parse({ url: request.parsedUrl })
  }

  /**
  * Returns a set of entities by name
  */
  getEntities({ name }) {
    throw new Error("Not implemented");
  }

  /**
  * Evaluates the context to get a result
  */
  populateResult({ context }) {
    throw new Error("Not implemented");
  }

}
