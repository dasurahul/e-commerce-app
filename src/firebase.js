import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCXJW0DXCZwq8MPYqbC4FScnh5dNKmlDfY",
  authDomain: "shopping-website-react.firebaseapp.com",
  databaseURL: "https://shopping-website-react-default-rtdb.firebaseio.com",
  projectId: "shopping-website-react",
  storageBucket: "shopping-website-react.appspot.com",
  messagingSenderId: "554920291655",
  appId: "1:554920291655:web:ecf17183e3073f8203f062",
  measurementId: "G-5RXWYVKK92",
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope("profile");
provider.addScope("email");
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).then((res) => console.log(res));

export default firebase;
