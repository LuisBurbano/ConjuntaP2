
import { MongoClient, ServerApiVersion } from  'mongodb';
const uri = "mongodb+srv://adminPizza:6i82PjLNVh9Xt4M@pizzeria.dwwqof4.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


