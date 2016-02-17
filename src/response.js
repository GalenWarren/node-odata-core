/**
* The base response object
*/
export class Response {

  /**
  * The HTTP status code
  */
  get statusCode() {
    throw new Error("Not implemented: statusCode");
  }
  set statusCode( value ) {
    throw new Error("Not implemented: statusCode");
  }

  /**
  * The HTTP status (string)
  */
  get status() {
    throw new Error("Not implemented: status");
  }
  set status( value ) {
    throw new Error("Not implemented: status");
  }

  /**
  * Sets a response header
  */
  setHeader( name, value ) {
    throw new Error("Not implemented: setHeader");
  }

  /**
  * Access the response body
  */
  get body() {
    throw new Error("Not implemented: body");
  }
  set body( value ) {
    throw new Error("Not implemented: body");
  }
}
