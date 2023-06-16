import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FirebaseAppProvider } from "reactfire"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import App from "./App";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq_VWIfyLbCy4UV_XC2x7o66LVMy7Qp8g",
  authDomain: "artgallery-81069.firebaseapp.com",
  projectId: "artgallery-81069",
  storageBucket: "artgallery-81069.appspot.com",
  messagingSenderId: "356462073393",
  appId: "1:356462073393:web:c821297b759d29d3322710"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const firestore = getFirestore();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
<FirebaseAppProvider firebaseConfig={firebaseConfig} auth={auth} firestore={firestore}>
  <StrictMode>
    <App />
  </StrictMode>
  </FirebaseAppProvider>
);
