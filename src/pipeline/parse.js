export class ParseComponent {

  async process( context, next ) {


    // call downstream
    await next();


  }


}
