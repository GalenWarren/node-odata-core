import {inject} from "aurelia-dependency-injection";
import {Provider} from "../provider";
import _ from "lodash";

/**
* The default provider, that just operates on in-memory objects
*/
export class MemoryProvider extends Provider {

  /**
  * The entities map is a map of entity names to arrays of objects
  */
  constructor({ schema, entitySets }) {
    super();
    this.schema = schema;
    this.entitySets = entitySets;
  }

  /**
  * Gets a set of entities
  */
  getEntities( name ) {
    const set = this.entitySets[ name ];
    if (!set) {
      throw new Error(`Entity collection ${name} not found`);
    }
    return _.chain(set);
  }

  /**
  * The filter implementation
  */
  filter( set, predicate ) {
    return set.filter(predicate);
  }

  /**
  * The top implementation
  */
  top( set, count ) {
    return set.take(count);
  }

}
