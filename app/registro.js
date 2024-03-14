import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { mostrarMensaje } from "./mensaje.js"

const formRegistro = document.querySelector("#formRegistro");

formRegistro.addEventListener("submit", async (e) =>{
    e.preventDefault();

    const correo = formRegistro["reg-correo"].value;                          //aqui se tomas los datos del formulario y se almacenan en las variables correo y clave
    const clave = formRegistro["reg-clave"].value;

    try {
        const usuario = await createUserWithEmailAndPassword(auth, correo, clave);
        console.log(usuario);
        const modalRegistrar = document.querySelector("#modalRegistrar");
        const modal = bootstrap.Modal.getInstance(modalRegistrar);           //y aqui es donde se almacena en el back de firebase y se muestra un mensaje de exito
        modal.hide();
        mostrarMensaje("Registro exitoso");
    } catch (error) {
        console.log(error.message);
        console.log(error.code);

        if (error.code === "auth/email-already-in-use"){
            mostrarMensaje("Este correo se encuentra en uso", "error");
        }else if (error.code === "auth/invalid-email"){                      //si no pasan las exigencias que firebase pone, se muestran errores con sus debidos mensajes
            mostrarMensaje("El correo es inválido", "error");
        }else if (error.code === "auth/weak-password"){
            mostrarMensaje("La contraseña es muy débil", "error");        }

    }
})