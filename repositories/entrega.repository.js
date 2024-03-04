import { collection, addDoc, query, where, getDocs, getDoc, deleteDoc,doc, updateDoc } from "firebase/firestore";
import { db } from "../database/connection.database.js";

export const obtainAllDeliverys = async () => {
    try {
        const menuItemList = [];
        const menuCollection = collection(db, "entregas");
        const querySnapshot = await getDocs(menuCollection);
        querySnapshot.forEach((doc) => {
          menuItemList.push({ id: doc.id, ...doc.data() });
        });
        return menuItemList;
      } catch (error) {
        console.error("Error obtaining menu items: ", error);
        throw error;
      }
};

export const obtainUserByCedula = async (cedula) => {
  try {
    const deliverysCollection = collection(db, "entregas");
    const q = query(deliverysCollection, where("email", "==", cedula));
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
    const deliverysCollection = collection(db, "entregas");
    const docRef = await addDoc(deliverysCollection, user);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error inserting user: ", error);
    throw error;
  }
};

export const updateEntregaItem = async (id, updatedMenuItem) => {
    try {
      const menuItemRef = doc(db, "entregas", id);
      await updateDoc(menuItemRef, updatedMenuItem);
      console.log("Menu item updated successfully");
    } catch (error) {
      console.error("Error updating menu item:", error);
      throw error;
    }
  };
  