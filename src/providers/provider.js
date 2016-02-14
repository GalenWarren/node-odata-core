/**
* The provider base class
*/
export class Provider {

  /**
  * Returns a set of entities by name
  *
  * May return promise
  */
  getEntities( name ) {
    throw new Error("Not implemented");
  }

  /**
  * Optimized a transform against a set of entities through
  * techniques such as predicate pushdown, etc
  *
  * May return a promise
  */
  optimize({ entities, transform}) {
    return { entities, transform };
  }

  /**
  * Gets a set of entities
  *
  * May return a promise
  */
  get( entities ) {
    return entities;
  }

}
