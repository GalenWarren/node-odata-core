import _ from "lodash";

// the named schemas
const namedSchemas = {};

/**
* The schema class
*/
export class Schema {

  /**
  * Constructor
  */
  constructor() {
    this.entities = new Map();
  }

  /**
  * Adds an entity schema object
  */
  setEntitySchema( entitySchema ) {
    this.entities.set( entitySchema.target, entitySchema );
  }

  /**
  * Returns a schema by name
  */
  static get( name="default" ) {
    let schema = namedSchemas[ name ];
    if (!schema) {
      schema = namedSchemas[name] = new Schema();
    }
    return schema;
  }

}
