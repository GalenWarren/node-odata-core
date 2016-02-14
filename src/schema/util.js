import _ from "lodash";

/**
* This finds the prototype if a function is passed in; otherwise,
* returns the target ...
*/
export function getPrototype( target ) {
  return _.isFunction( target ) ? target.prototype : target;
}
