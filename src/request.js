/**
* An OData request
*/
export class Request {

  /**
  * Construction
  */
  constructor({ url, headers, body}) {
    this.url = url;
    this.headers = headers;
    this.body = body;
  }

}
