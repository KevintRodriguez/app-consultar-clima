import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { mostrarMensaje } from "./mensaje.js";

const ingreso = document.querySelector("#formIngreso");

ingreso.addEventListener("submit", async e => {
    e.preventDefault();

    const email = ingreso["ing-correo"].value;                         //aqui se evaluan los usuarios (correos y claves) que se tienen registrados
    const clave = ingreso["ing-clave"].value;

    try {
        const credenciales = await signInWithEmailAndPassword(auth, email, clave);
        console.log(credenciales);
        const modal = bootstrap.Modal.getInstance(document.querySelector("#modalIngresar"));      //si las credenciales son correctas, el usuario ingresa y se muestra un mensaje de exito
        modal.hide();
        mostrarMensaje("Acceso exitoso");
    } catch (error) {
        console.log(error);

        if(error.code === "auth/invalid-login-credentials"){
            mostrarMensaje("Datos incorrectos", "error");
        }else if(error.code === "auth/user-not-found"){
            mostrarMensaje("Usuario no encontrado", "error");                         //sino, se topa con estas validaciones de los errores que le pueden salir
        }else if(error.code === "auth/too-many-requests"){
            mostrarMensaje("Número de intentos agotados", "error")
        }else{
            mostrarMensaje(error.message, "error");
        }
    }

})