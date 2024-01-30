
import { MongoClient, ServerApiVersion } from  'mongodb';
const uri = import.meta.env.URI_MONGO;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


