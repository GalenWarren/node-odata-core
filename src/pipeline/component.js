/**
* Base class for a pipeline processing component
*/
export class Component {



  async execute( context, next ) {

    var x = 0;

    await next();



  }






}
