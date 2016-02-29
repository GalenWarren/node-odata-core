import {follows} from "../../pipeline/index";

import {PipelineComponent} from "../component";
import {ParseUrlComponent} from "./parseUrl";

/**
* A pipeline component that parses a url
*/
@follows(ParseUrlComponent)
export class ParseQueryComponent extends PipelineComponent {

  /**
  * The main execute method
  */
  async handle( context, next ) {

    console.log("Start parse query");

    await next();

    console.log("End parse query");

  }

}
