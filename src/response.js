/**
* The base response object
*/
export class Response {

  /**
  * The HTTP status code
  */
  get statusCode() {
      throw new Error("Not implemented");
  }
  set statusCode( value ) {
    throw new Error("Not implemented");
  }

  /**
  * The HTTP status (string)
  */
  get status() {
      throw new Error("Not implemented");
  }
  set status( value ) {
    throw new Error("Not implemented");
  }

  /**
  * Sets a response header
  */
  setHeader( name, value ) {
    throw new Error("Not implemented");
  }

  /**
  * Access the response body
  */
  get body() {
    throw new Error("Not implemented");
  }
  set body( value ) {
    throw new Error("Not implemented");
  }

  /**
  * Construction
  */
  constructor() {
    this.statusCode = 404;
  }

}
