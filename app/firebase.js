import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyAI3jtibD1TzOnYigZhGJSg_gDKjNsK38A",
  authDomain: "app-consulta-clima.firebaseapp.com",
  projectId: "app-consulta-clima",
  storageBucket: "app-consulta-clima.appspot.com",                         //aqui se adquieren los beneficios de utilizar firebase, especificamente el de autenticacion
  messagingSenderId: "346890419369",
  appId: "1:346890419369:web:6d8f61ccd4b41a4c027db8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);