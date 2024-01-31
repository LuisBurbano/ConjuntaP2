import { client } from "../database/connection.database.js";

export const obtainAllProducts = async () => {
  try {
    let productList = [];
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const myDB = client.db("pizzeria");
    const myColl = myDB.collection("products");
    const result = await myColl.find({});
    await result.forEach((document) => {
      productList.push(document);
    });

    return productList;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

export const obtainProductById = (id) => {
  return DATA_PRODUCT.find((product) => product.id === id);
};

export const insertProduct = async (product) => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const myDB = client.db("pizzeria");
    const myColl = myDB.collection("products");
    const result = await myColl.insertOne(product);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    return result;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};
