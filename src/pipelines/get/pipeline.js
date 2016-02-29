/**
* The default get pipeline components
*/
const defaultGetPipelineComponentTypes = [
  ParseUrlComponent,
  ParseQueryComponent
];

/**
* Create the get pipelie
*/
export class GetPipeline extends Pipeline {

  /**
  * The default component types
  */
  static get defaultComponentTypes() {
    return defaultGetPipelineComponentTypes;
  }

  /**
  * Construction
  */
  constructor({ componentTypes = defaultGetPipelineComponentTypes, container }) {
    super({
      components: Pipeline.createComponents({ componentTypes, container }),
      container: container
    });
  }

}
