import { client } from "../database/connection.database.js";

export const obtainAllDeliveries = async () => {
  try {
    let deliveryList = [];
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const myDB = client.db("pizzeria");
    const myColl = myDB.collection("deliveries");
    const result = await myColl.find({});
    await result.forEach((document) => {
      deliveryList.push(document);
    });

    return deliveryList;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

export const obtainDeliveryById = (id) => {
  return DATA_DELIVERY.find((delivery) => delivery.id === id);
};

export const insertDelivery = async (delivery) => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const myDB = client.db("pizzeria");
    const myColl = myDB.collection("deliveries");
    const result = await myColl.insertOne(delivery);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    return result;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};
