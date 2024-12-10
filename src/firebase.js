import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDr7K2n4mjIbHfTGp9D0ueK7FjXQw6j4Ig",
  authDomain: "e-shop-project--webdesign.firebaseapp.com",
  databaseURL: "https://e-shop-project--webdesign-default-rtdb.firebaseio.com",
  projectId: "e-shop-project--webdesign",
  storageBucket: "e-shop-project--webdesign.appspot.com",
  messagingSenderId: "375442161052",
  appId: "1:375442161052:web:fa09934d70ab9b6e001c59",
  measurementId: "G-8XK3XF4HJV",
};

const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
