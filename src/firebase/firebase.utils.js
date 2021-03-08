import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC30jZ1wuUR3bb-c3fz6TSmMzNNlBOUMzU",
    authDomain: "crown-clothing-589c2.firebaseapp.com",
    projectId: "crown-clothing-589c2",
    storageBucket: "crown-clothing-589c2.appspot.com",
    messagingSenderId: "744571369610",
    appId: "1:744571369610:web:93bb1eb1be71f748fd1573",
    measurementId: "G-FZRWD2L6YS"
  };


  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set ({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
          console.log('error creating user' , error.message)
      }
    }
    return userRef;
  }

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ pormpt: 'select_account'});

export const signInWithGoogle = () => (
    auth.signInWithPopup(provider)
);

export default firebase