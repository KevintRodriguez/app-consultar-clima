export function mostrarMensaje(mensaje, tipo = "succes"){
    Toastify({
        text: mensaje,
        duration: 4000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`                          //esta es una libreria para mostrar un mensaje personalizado
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: tipo === "succes" ? "green" : "red",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}