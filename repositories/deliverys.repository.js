import { collection, addDoc, query, where, getDocs, getDoc } from "firebase/firestore";
import { db } from "../database/connection.database.js";

export const obtainAllDeliverys = async () => {
  try {
    const userList = [];
    const deliverysCollection = collection(db, "deliverys");
    const querySnapshot = await getDocs(deliverysCollection);
    querySnapshot.forEach((doc) => {
      userList.push(doc.data());
    });
    return userList;
  } catch (error) {
    console.error("Error obtaining deliverys: ", error);
    throw error;
  }
};

export const obtainUserByCedula = async (cedula) => {
  try {
    const deliverysCollection = collection(db, "deliverys");
    const q = query(deliverysCollection, where("cedula", "==", cedula));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error obtaining user by cedula: ", error);
    throw error;
  }
};

export const insertUser = async (user) => {
  try {
    const deliverysCollection = collection(db, "deliverys");
    const docRef = await addDoc(deliverysCollection, user);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error inserting user: ", error);
    throw error;
  }
};
