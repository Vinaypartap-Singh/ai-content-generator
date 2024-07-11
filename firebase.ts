import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyALvJVg2N5uDuj9UdVaWw-UoUUfdx2yBbU",
    authDomain: "ai-content-generator-8ed32.firebaseapp.com",
    projectId: "ai-content-generator-8ed32",
    storageBucket: "ai-content-generator-8ed32.appspot.com",
    messagingSenderId: "368391302197",
    appId: "1:368391302197:web:c974dee937124e7081957c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)