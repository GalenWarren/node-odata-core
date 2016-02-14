import _ from "lodash";

import {getPrototype} from "./util";

// some keys
const propertiesKey = Symbol();

/**
* Class for property schema
*/
export class PropertySchema {

  constructor({ name, type }) {
    this.name = name;
    this.type = type;
  }

}

/**
* Property decorator, adds metadata to the parent class
* about this property
*/
export function property({ name, type }) {

  return function( target, propertyName ) {

    // access the properties
    const actualTarget = getPrototype(target);
    let properties = actualTarget[ propertiesKey ];
    if (!properties) {
      properties = actualTarget[ propertiesKey ] = {};
    }

    // assign the property
    const actualName = name || propertyName;
    properties[ propertyName ] = new PropertySchema({
      name: actualName,
      type: type
    });

  }

}

/**
* Gets all properties
*/
export function getProperties( target ) {
  return getPrototype( target )[ propertiesKey ] || {};
}
