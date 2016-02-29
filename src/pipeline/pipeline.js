import _ from "lodash";
import toposort from "toposort";
import Promise from "any-promise";

import {precedesTypes,followsTypes} from "./decorators";

/**
* The default execute function, does nothing
*/
async function pipelineTerminator( context ) {}

/**
* Returns the dependencies for this component, from metadata
*/
function getDependencies( componentType ) {

  return [];

}

/**
* A processing pipeline
*/
export class Pipeline {

  /**
  * Construction, takes a set of components and assembles the pipeline
  */
  constructor({ components }) {

    // build the handle function by combining together all the components
    this.handle = _(components).reverse().reduce( ( innerExecute, component  ) => {

      return context => component.handle( context, () => innerExecute( context ));

    }, pipelineTerminator );

  }

  /**
  * Creates a pipeline from a set of component types using the provided container
  */
  static createComponents({ componentTypes, factory, container }) {

    // get the factory function
    const componentFactory = factory || ( componentType => container.get(componentType) );

    // get all dependencies (edge nodes)
    const dependencies = _.flatMap(componentTypes, getDependencies );

    // get the components in sorted order
    const sortedComponentTypes = toposort.array( componentTypes, dependencies ).reverse();

    // create all the component objects
    return _.map( sortedComponentTypes, componentFactory );

  }

}
