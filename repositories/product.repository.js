import { collection, addDoc, doc, deleteDoc, getDocs, getDoc, updateDoc, query, where } from "firebase/firestore";
import { db } from "../database/connection.database.js";

export const obtainAllProducts = async () => {
  try {
    const productList = [];
    const productsCollection = collection(db, "products");
    const snapshot = await getDocs(productsCollection);
    snapshot.forEach((doc) => {
      productList.push({ id: doc.id, ...doc.data() });
    });
    return productList;
  } catch (error) {
    console.error("Error obtaining products: ", error);
    throw error;
  }
};


export const obtainProductById = async (productId) => {
  try {
    const productsCollection = collection(db, "products");
    const q = query(productsCollection, where("title", "==", productId));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error obtaining prioduct by id: ", error);
    throw error;
  }
};



export const insertProduct = async (product) => {
  try {
    const productsCollection = collection(db, "products");
    const docRef = await addDoc(productsCollection, product);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error inserting product: ", error);
    throw error;
  }
};

export const deleteProductById = async (id) => {
  try {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    console.log("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

export const updateProductById = async (id, newData) => {
  try {
    const productDoc = doc(db, "products", id);
    await updateDoc(productDoc, newData);
    console.log("Product updated successfully");
    return { id, ...newData };
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};
