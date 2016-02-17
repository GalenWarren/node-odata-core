/**
* An OData request
*/
export class Request {

  /**
  * Construction
  */
  constructor({ url, headers = {}, body = null, state = {}}) {
    this.url = url;
    this.headers = headers;
    this.body = body;
    this.state = state;
  }

}
