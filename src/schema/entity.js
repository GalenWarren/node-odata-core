import {Schema} from "./schema";
import {getPrototype} from "./util";
import {getProperties} from "./property";

/**
* Class for entity shcema
*/
export class EntitySchema {

  /**
  * Constructor
  */
  constructor({ collection, key, target }) {
    this.collection = collection;
    this.key = key;
    this.target = target;
  }

  /**
  * Get the properties
  */
  get properties() {
    return getProperties( this.target );
  }

}

/**
* Property decorator, adds metadata about this property
*/
export function entity({ collection, key, schema="default" }) {

  return function( target ) {

    Schema.get(schema).setEntitySchema( new EntitySchema({
      collection: collection,
      key: key,
      target: getPrototype( target )
    }));

  };

}
