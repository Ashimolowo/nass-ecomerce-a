import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCCoNOn7bsfdXpKwEPLqE7fLE0K1yQ_uU4",
  authDomain: "ecommerce-project-3.firebaseapp.com",
  projectId: "ecommerce-project-3",
  storageBucket: "ecommerce-project-3.firebasestorage.app",
  messagingSenderId: "600360904858",
  appId: "1:600360904858:web:2661d6507a5786b546d723"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

 const fireDB = getFirestore(app);
 const auth = getAuth(app);

export {auth, fireDB};



