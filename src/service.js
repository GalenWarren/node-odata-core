/**
* The main service class
*/
export class Service {

  /**
  * Construction
  */
  constructor({ provider, options }) {
    this.provider = provider;
    this.options = options;
  }

  /**
  * Handles a request in the supplied context
  */
  async handle( context ) {

    try {

      // use the provider to populate the response
      await this.provider.populateResponse( context.request, context.response );
    }
    catch (err) {

      // handle errors kgw!
      throw err;

    }

    // check for not found -- kgw put back!
    /*
    if (_.isUndefined( context.response.status )) {
      context.response.status = 404;
    }*/

  }

}
