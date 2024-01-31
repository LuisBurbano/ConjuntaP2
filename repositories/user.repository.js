import { client } from "../database/connection.database.js";

export const obtainAllUsers = async () => {
  try {
    let userList = [];
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const myDB = client.db("pizzeria");
    const myColl = myDB.collection("users");
    const result = await myColl.find({});
    await result.forEach((document) => {
      userList.push(document);
    });

    return userList;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};

export const obtainUserByEmail = async (email) => {
  try {
    await client.connect();
    const myDB = client.db("pizzeria");
    const myColl = myDB.collection("users");
    const user = await myColl.findOne({ email: email});
    return user;
  } finally {
    await client.close();
  }
};

export const insertUser = async (user) => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const myDB = client.db("pizzeria");
    const myColl = myDB.collection("users");
    const result = await myColl.insertOne(user);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    return result;
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
};
