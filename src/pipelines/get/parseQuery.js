import {PipelineComponent} from "../component";
import {ParseUrlComponent} from "./parseUrl";

/**
* A pipeline component that parses a url
*/
export class ParseQueryComponent extends PipelineComponent {

  /**
  * Dependencies
  */
  static follows() = [ ParseUrlComponent ];




}
