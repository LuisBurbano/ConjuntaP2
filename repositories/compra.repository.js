import { collection, addDoc, query, where, getDocs, getDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../database/connection.database.js";

export const obtainAllPurchaseItems = async () => {
  try {
    const purchaseItemList = [];
    const purchaseCollection = collection(db, "compras");
    const querySnapshot = await getDocs(purchaseCollection);
    querySnapshot.forEach((doc) => {
      purchaseItemList.push({ id: doc.id, ...doc.data() });
    });
    return purchaseItemList;
  } catch (error) {
    console.error("Error obtaining purchase items: ", error);
    throw error;
  }
};

export const obtainPurchaseItemByName = async (name) => {
  try {
    const purchaseCollection = collection(db, "compras");
    const q = query(purchaseCollection, where("nombre", "==", name));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error obtaining purchase item by name: ", error);
    throw error;
  }
};

export const insertPurchaseItem = async (purchaseItem) => {
  try {
    const purchaseCollection = collection(db, "compras");
    const docRef = await addDoc(purchaseCollection, purchaseItem);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error inserting purchase item: ", error);
    throw error;
  }
};

export const deletePurchaseItemById = async (id) => {
  try {
    const productDoc = doc(db, "compras", id);
    await deleteDoc(productDoc);
    console.log("Purchase deleted successfully");
  } catch (error) {
    console.error("Error deleting purchase:", error);
    throw error;
  }
};

export const updatePurchaseItem = async (id, updatedPurchaseItem) => {
  try {
    const purchaseItemRef = doc(db, "compras", id);
    await updateDoc(purchaseItemRef, updatedPurchaseItem);
    console.log("Purchase item updated successfully");
  } catch (error) {
    console.error("Error updating purchase item:", error);
    throw error;
  }
};
