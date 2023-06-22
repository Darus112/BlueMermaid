// Firestore este importat de la firebase/firestore și firebase.config
import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../config/firebase.config";

/**
 * Această funcție asincronă salvează un nou element (item) în colecția "foodItems" a bazei de date Firestore.
 * Funcția setDoc este utilizată pentru a crea sau a actualiza documentul în Firestore.
 * În cazul în care documentul nu există, acesta va fi creat.
 */
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

/**
 * Această funcție asincronă recuperează toate elementele (items) din colecția "foodItems" a bazei de date Firestore.
 * Funcția getDocs este utilizată pentru a obține o înregistrare a tuturor documentelor din colecția specificată.
 * Înregistrările sunt returnate ca un array de documente.
 */
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
