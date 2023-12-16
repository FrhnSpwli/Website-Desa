import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyA4dRXRm5DjD0GlKTqPJWUYer0G-I9u9FQ",
//   authDomain: "sisfor-admin-desa.firebaseapp.com",
//   projectId: "sisfor-admin-desa",
//   storageBucket: "sisfor-admin-desa.appspot.com",
//   messagingSenderId: "943691478447",
//   appId: "1:943691478447:web:7ec3d7b8efce71f0392b5a",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDF9aboOt2AvnJZkVA3oxXHJT2gXiSkMe8",
  authDomain: "blogproject-f50da.firebaseapp.com",
  projectId: "blogproject-f50da",
  storageBucket: "blogproject-f50da.appspot.com",
  messagingSenderId: "360186264400",
  appId: "1:360186264400:web:8a178185dd4522667cca55"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithEmailAndPasswordHandler = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed in:", user);
    return user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
    console.log("User signed out");
    localStorage.removeItem("auth"); // Remove authentication status
    window.location.href = "/login"; // Redirect to login page
  } catch (error) {
    console.error("Error signing out:", error);
  }
};