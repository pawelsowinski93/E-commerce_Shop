import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAw7yxkqQrCQV_VQP7pUNpVmfIIno_0H04",
  authDomain: "shop-db-755d5.firebaseapp.com",
  projectId: "shop-db-755d5",
  storageBucket: "shop-db-755d5.appspot.com",
  messagingSenderId: "172610688220",
  appId: "1:172610688220:web:579706b124a061f0131019",
  measurementId: "G-859NP91S4F"
};

export const creacteUserProfileDocument = async (userAuth, restData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...restData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
