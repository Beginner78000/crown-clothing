// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
 } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAne-XGttoTPNGiUc1XNlX4LcUCu7HI5qc",
  authDomain: "crown-project-db-3b67f.firebaseapp.com",
  projectId: "crown-project-db-3b67f",
  storageBucket: "crown-project-db-3b67f.appspot.com",
  messagingSenderId: "700108714274",
  appId: "1:700108714274:web:dc722a184b71cb6526b57b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Provider are instruction for differents instances
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    // On vérifie si le document exist
    const userDocRef = doc(db, 'user', userAuth.uid);
    // console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot.exists());

    // If user data exists
    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    // If it doesn't exists, we create the document in the collection

    // return the data if it does exists
}