import {Provider} from "../provider";
import _ from "lodash";

/**
* The default provider, that just operates on arrays
*/
export class DefaultProvider {

  /**
  * The entities map is a map of entity names to arrays of objects
  */
  constructor({ entityCollections }) {
    this.entityCollections = entityCollections;
  }

  /**
  * Gets a set of entities
  */
  getEntities( name ) {
    const entities = this.entityCollections[ name ];
    if (!entities) {
      throw new Error(`Entity collection ${name} not found`);
    }
    return entities;
  }

}
