const resultado = document.querySelector('.resultado');
const form = document.getElementById('weatherForm');
const weatherData = document.getElementById('weatherData');
const nomCiudad = document.querySelector('#inputciudad');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    if(nomCiudad.value == ''){
        moserror('Error: Se debe digitar una ciudad.')
        return;
    }

    obtenerDatosClima(nomCiudad.value);
});

//En esta función se obtienen los datos del clima de la ciudad por medio de una API llamada OpenWeatherMap
async function obtenerDatosClima(inputciudad) {
    const apiKey = '4bde36ac5930c28ee49f6365aebf4c03';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputciudad}&appid=${apiKey}`;
    //https://api.openweathermap.org/data/2.5/weather?q=medellin&appid=4bde36ac5930c28ee49f6365aebf4c03    -    Esto lo utilice para probar la api

    fetch(url)
        .then(data =>
            {return data.json()
        })
        .then(dataJSON => {
            if(dataJSON.cod === '404'){
                moserror('Error, ingrese una ciudad valida.');
            } else{
                limpiarHTML();
                mosclima(dataJSON);
            }
            console.log(dataJSON);
        })
        .catch(error => {
            console.log(error);
        })
}

//Esta función sirve para mostrar errores creando una etiqueta p en donde se devuelve el mensaje que se desee
function moserror(mensaje){
    console.log(mensaje);
    const alerta = document.createElement('p');
    alerta.classList.add('mensajeAlerta');
    alerta.innerHTML = mensaje;
    form.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000)
}

//En esta funcion se obtienen los datos de la API para mostrarlos en pantalla por medio de las etiquetas que se crean en este
function mosclima(data){
    const {name, main:{temp, temp_min, temp_max}} = data;

    const grados = conCent(temp);
    const gra_min = conCent(temp_min);
    const gra_max = conCent(temp_max);

    const contClima = document.createElement('div');
    contClima.innerHTML = `
        <h4>Clima de ${name}</h4>
        <h1>Grados ${grados}°C</h1>
        <p class="grados">Grados min ${gra_min}°C</p>
        <p>Grados max ${gra_max}°C</p>
    `;

    resultado.appendChild(contClima);    

    // console.log(name);
    // console.log(temp);                     Esto era para verificar si me traia los datos del clima y el nombre de la ciudad
    // console.log(temp_min);
    // console.log(temp_max);
}

//Esta funcion sirve para pasar los grados Kelvin a Centigrados
function conCent(temp){
    return parseInt(temp - 273.15);
}

//Esta funcion es para que el boton "limpiar" tenga la accion de borrar todo lo digitado en el input
function limpiarFormulario() {
    document.getElementById('inputciudad').value = '';
    weatherData.innerHTML = '';
}

//Esta funcion sirve para que se sobreescriba el resultado del clima de una nueva ciudad digitada en el que se presente anteriormente
function limpiarHTML(){
    resultado.innerHTML = '';
}
