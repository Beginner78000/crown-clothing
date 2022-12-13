// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { 
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
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
console.log(firebaseApp);

// Provider are instruction for differents instances
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
})

// Auth keep track of the authentification of the entire application
// It keep track of if the user his authenticated or not
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((obj) => {
        const docRef = doc(collectionRef, obj.title.toLowerCase());
        batch.set(docRef, obj);
    });

    await batch.commit();
    console.log('done');
};

// Elles isole les zones avec lesquelles notre application s'interface, 
// Les choses pouvant changer
export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    // On récupère les instantanés des documents que nous voulons
    const querySnapshot = await getDocs(q);
    // Ça nous donnera un tableau de tous ces documents individuels
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, []);

    return categoryMap;
};

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    // Si je ne reçois pas l'authentification de l'utilisateur alors je veux sortir
    if(!userAuth) return;

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
            // If it doesn't exists, we create the document in the collection
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
        // return the data if it does exists
        return userDocRef;
    }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    // Si je ne reçois pas l'email, ou le password alors je veux sortir
    if(!email || !password) return;

    // Sinon je retourne l'utilisateur
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    // Si je ne reçois pas l'email, ou le password alors je veux sortir
    if(!email || !password) return;

    // Sinon je retourne l'utilisateur
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangeListener = (callback) => onAuthStateChanged(auth, callback);
