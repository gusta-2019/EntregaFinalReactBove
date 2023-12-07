import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA9ADuVHKLGBirlN_8q5jInjr3Nz1EoR_E",
    authDomain: "ecommerce-vinos-e618d.firebaseapp.com",
    projectId: "ecommerce-vinos-e618d",
    storageBucket: "ecommerce-vinos-e618d.appspot.com",
    messagingSenderId: "32459193434",
    appId: "1:32459193434:web:76b15eea701c3c3481ac63"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);