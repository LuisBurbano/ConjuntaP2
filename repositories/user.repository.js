import { collection, addDoc, query, where, getDocs, getDoc } from "firebase/firestore";
import { db } from "../database/connection.database.js";

export const obtainAllUsers = async () => {
  try {
    const userList = [];
    const usersCollection = collection(db, "users");
    const querySnapshot = await getDocs(usersCollection);
    querySnapshot.forEach((doc) => {
      userList.push(doc.data());
    });
    return userList;
  } catch (error) {
    console.error("Error obtaining users: ", error);
    throw error;
  }
};

export const obtainUserByEmail = async (email) => {
  try {
    const usersCollection = collection(db, "users");
    const q = query(usersCollection, where("email", "==", email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error obtaining user by email: ", error);
    throw error;
  }
};

export const insertUser = async (user) => {
  try {
    const usersCollection = collection(db, "users");
    const docRef = await addDoc(usersCollection, user);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error inserting user: ", error);
    throw error;
  }
};
