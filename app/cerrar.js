import { signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import {auth} from "./firebase.js"
import { mostrarMensaje } from "./mensaje.js";

const cerrarS = document.querySelector("#cerrar");   //archivo creado para que al darle click en el boton "cerrar sesion" el usuario se salga de la aplicación, por así decirlo

cerrarS.addEventListener("click", async () => {
    await signOut(auth);
    mostrarMensaje("Sesion Cerrada");                //aquí se cierra la sesion y se muestra un mensaje de ello
})