import {inject,Container} from "aurelia-dependency-injection";
import {Promise} from "bluebird";
import _ from "lodash";

import {Schema} from "../schema/index";
import {Provider} from "../providers/index";
import {ParseComponent} from "./parse";

// a resolved promise used to end the pipeline
const resolved = Promise.resolve();

/**
* The processing pipeline
*/
@inject("settings",ParseComponent)
export class Pipeline {

  /**
  * Constructor
  */
  constructor( settings, ...components ) {

    // store the settings
    this.settings = settings;

    /**
    * The process function
    * @param {context}
    */
    this.process = _(components).reverse().reduce( (func, component) => {

      return ( context ) => component.process( context, () => func( context ));

    }, () => resolved ).value

  }

  /**
  * Creates a pipeline against the given provider with the provided settings
  */
  static create({ schema, provider, settings = {}}) {

    const container = new Container();
    container.registerInstance( Schema, schema );
    container.registerInstance( Provider, provider );
    container.registerInstance( "settings", settings );
    return container.get(Pipeline);

  }

}
