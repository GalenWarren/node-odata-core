import _ from "lodash";
import toposort from "toposort";
import Promise from "any-promise";

// a resolved promise used in the terminator
const resolved = Promise.resolve();

/**
* The default execute function, does nothing
*/
function defaultExecute( context ) {
  return resolved;
}

/**
* A processing pipeline
*/
export class Pipeline {

  /**
  * Construction, takes a set of components and assembles the pipeline
  */
  constructor({ components }) {

    // build the execute function by combining together all the components
    this.execute = _(components).reduce( ( execute, component  ) => {

      return _.wrap( execute, function( func, context ) {

        const next = function() {
          return Promise.resolve( component.execute(  ));
        };


      });


    }, defaultExecute );



    this.component = components;
  }


  /**
  * Creates a pipeline from a set of component types using the provided container
  */
  static fromComponentTypes({ componentTypes, container }) {

    const dependencies = _.flatMap(componentTypes, getDependencies );
    const sortedComponentTypes = toposort.array( componentTypes, dependencies ).reverse();
    const components = _.map( sortedComponentTypes, componentType => container.get( componentType ));
    return new Pipeline({ components });

  }

}
