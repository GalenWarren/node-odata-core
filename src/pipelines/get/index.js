import {ParseUrlComponent} from "./parseUrl";
import {ParseQueryComponent} * from "./parseQuery";

/**
* The default get pipeline components
*/
export default const defaultGetPipelineComponentTypes = [
  ParseUrlComponent,
  ParseQueryComponent
];
