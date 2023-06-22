// Importarea modulelor necesare de la pachetul firebase
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configurația Firebase este stocată în obiectul firebaseConfig.
// Valorile pentru fiecare cheie în obiect sunt stocate în variabile de mediu.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Dacă există deja o aplicație Firebase inițializată, aceasta va fi returnată de `getApp`.
// În caz contrar, o nouă aplicație Firebase va fi inițializată folosind configurația furnizată.
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Crearea instanțelor pentru Firestore și Firebase Storage.
const firestore = getFirestore(app);
const storage = getStorage(app);

// Exportarea instanțelor pentru a fi folosite în alte părți ale aplicației.
export { app, firestore, storage };
