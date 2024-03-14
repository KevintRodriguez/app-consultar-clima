const outLinks = document.querySelectorAll(".logged-out");
const inLinks = document.querySelectorAll(".logged-in");

console.log(outLinks);
console.log(inLinks);

export const revision = user => {
    if(user){
        outLinks.forEach(link => link.style.display = "none")
        inLinks.forEach(link => link.style.display = "block")
    }else{                                                               //aqui se definen las "clases" de el modulo de ingreso, registro, cerrar sesion y 
        outLinks.forEach(link => link.style.display = "block")           //del modulo de consulta, para que así, se oculten las opciones deseadas segun la
        inLinks.forEach(link => link.style.display = "none")             //accion que se haga
    }
}