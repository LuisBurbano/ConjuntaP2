import { collection, addDoc, query, where, getDocs, getDoc, deleteDoc,doc, updateDoc } from "firebase/firestore";
import { db } from "../database/connection.database.js";

export const obtainAllMenuItems = async () => {
  try {
    const menuItemList = [];
    const menuCollection = collection(db, "menus");
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

export const obtainMenuItemByName = async (name) => {
  try {
    const menuCollection = collection(db, "menus");
    const q = query(menuCollection, where("nombre", "==", name));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error obtaining menu item by name: ", error);
    throw error;
  }
};

export const insertMenuItem = async (menuItem) => {
  try {
    const menuCollection = collection(db, "menus");
    const docRef = await addDoc(menuCollection, menuItem);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error inserting menu item: ", error);
    throw error;
  }
};


export const deleteMenuItemById = async (id) => {
  try {
    const productDoc = doc(db, "menus", id);
    await deleteDoc(productDoc);
    console.log("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export const updateMenuItem = async (id, updatedMenuItem) => {
  try {
    const menuItemRef = doc(db, "menus", id);
    await updateDoc(menuItemRef, updatedMenuItem);
    console.log("Menu item updated successfully");
  } catch (error) {
    console.error("Error updating menu item:", error);
    throw error;
  }
};
