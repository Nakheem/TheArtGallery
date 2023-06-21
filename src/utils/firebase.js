import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyCwDsatEbzT8rUqRlTgtxNlVflGDxklIWM",
  authDomain: "chat-app-a6652.firebaseapp.com",
  projectId: "chat-app-a6652",
  storageBucket: "chat-app-a6652.appspot.com",
  messagingSenderId: "42552667700",
  appId: "1:42552667700:web:664a4dd227b1c0e88e2461"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;