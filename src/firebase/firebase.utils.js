import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCO3qSish5So2YPYdJqCsT6sMYSylKg3_E",
    authDomain: "crwn-db-f4f17.firebaseapp.com",
    databaseURL: "https://crwn-db-f4f17.firebaseio.com",
    projectId: "crwn-db-f4f17",
    storageBucket: "crwn-db-f4f17.appspot.com",
    messagingSenderId: "121647338528",
    appId: "1:121647338528:web:6f65686190629959eb5845",
    measurementId: "G-D8GPHKLK6E"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user >>', error);
        }
    }
    return userRef; 
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// const twitterProvider = new firebase.auth.TwitterAuthProvider();
// twitterProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);



// export const signInWithTwitter = () => auth.signInWithPopup(twitterProvider);

