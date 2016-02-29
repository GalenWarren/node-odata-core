import {PipelineComponent} from "../component";

/**
* A pipeline component that parses a url
*/
export class ParseUrlComponent extends PipelineComponent {

  /**
  * The main execute method
  */
  async handle( context, next ) {

    console.log("Start parse url");

    await next();

    console.log("End parse url");

  }

}
