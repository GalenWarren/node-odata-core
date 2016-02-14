import _ from "lodash";

import {Schema,Pipeline,DefaultProvider,entity,property} from "../../src/index";

debugger;

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

debugger;
const schema = Schema.get();
console.log(schema);
debugger;

const provider = new DefaultProvider({
  entityCollections: {
    companies: [
      new Company({ ticker: "BAC", name: "Bank of America"}),
      new Company({ ticker: "STI", name: "SunTrust Bank"}),
      new Company({ ticker: "VNBK", name: "Virginia National Bank"})
    ]
  }
});

debugger;

const pipeline = Pipeline.create({ schema, provider });

debugger;
