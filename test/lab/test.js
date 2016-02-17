import _ from "lodash";

import {Schema,Service,MemoryProvider,Request,Response,Context,entity,property} from "../../src/index";

// the entity type
@entity({
   collection: "companies",
   key: "ticker"
})
class Company {

  @property({ type: "string" })
  ticker

  @property({ type: "string" })
  name

  constructor( properties ) {
    _.extend( this, properties );
  }

};

const schema = Schema.get();
//console.log(schema);

const service = new Service({
  provider: new MemoryProvider( schema, {
    entitySets: {
      companies: [
        new Company({ ticker: "BAC", name: "Bank of America"}),
        new Company({ ticker: "STI", name: "SunTrust Bank"}),
        new Company({ ticker: "VNBK", name: "Virginia National Bank"})
      ]
    }
  })
});

const context = new Context({
  request: new Request({
    url: "/companies?$filter=ticker eq 'BAC'"
  }),
  response: new Response()
});

debugger;

service.handle(context).then( () => {

  console.log(context);
  console.log(JSON.stringify(context.state.parsedQuery, null, " "));
//  console.log(JSON.stringify(context.state.code, null, " "));

}, err => {

  console.error( err );
  console.error( err.stack );

});
