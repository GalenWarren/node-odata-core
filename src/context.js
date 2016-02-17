/**
* The request/response context object
*/
export class Context {

  /**
  * Construction
  */
  constructor({ request, response }) {
    this.request = request;
    this.response = response;
  }

}
