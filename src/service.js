import {inject,All} from "aurelia-dependency-injection";

import {Handler} from "./handler";

/**
* The main service class
*/
@inject(All.of(Handler))
export class Service {

  /**
  * Construction
  */
  constructor(handlers) {
    this.handlers = handlers;
  }

  /**
  * Handles a request in the supplied context
  */
  async handle( context ) {

    // look for the appropriate handler
    const handler = _(this.handlers).find( h => h.canHandle( context ));
    if (!handler) {
      throw new HttpError(400);
    }

    // handle it
    await handler.handle( context );

  }

}
