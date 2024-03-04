import { collection, addDoc, query, where, getDocs, getDoc } from "firebase/firestore";
import { db } from "../database/connection.database.js";

export const obtainAllIngredientes = async () => {
  try {
    const IngredientesList = [];
    const IngredientesCollection = collection(db, "ingredientes");
    const snapshot = await getDocs(IngredientesCollection);
    snapshot.forEach((doc) => {
      IngredientesList.push({ id: doc.id, ...doc.data() });
    });
    return IngredientesList;
  } catch (error) {
    console.error("Error obtaining Ingredientes: ", error);
    throw error;
  }
};


export const obtainIngredientesById = async (IngredientesId) => {
  try {
    const IngredientesCollection = collection(db, "ingredientes");
    const q = query(IngredientesCollection, where("nombre", "==", IngredientesId));
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



export const insertIngredientes = async (Ingredientes) => {
  try {
    const IngredientesCollection = collection(db, "ingredientes");
    const docRef = await addDoc(IngredientesCollection, Ingredientes);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error inserting Ingredientes: ", error);
    throw error;
  }
};

export const deleteIngredientesById = async (id) => {
  try {
    const IngredientesDoc = doc(db, "ingredientes", id);
    await deleteDoc(IngredientesDoc);
    console.log("Ingredientes deleted successfully");
  } catch (error) {
    console.error("Error deleting Ingredientes:", error);
    throw error;
  }
};
