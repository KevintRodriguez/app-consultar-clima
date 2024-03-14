import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./app/firebase.js"
import { revision } from "./app/revision.js"
import "./app/registro.js"
import "./app/cerrar.js"
import "./app/revision.js"
import "./app/ingreso.js"

onAuthStateChanged(auth, async (user) => {
    revision(user);
    /*if(user){
        revision(user);
    }else{

    }*/
})