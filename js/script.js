let intervalo;
let posicion = 0;
const colores = ['rojo', 'amarillo', 'verde'];

function cambiarColor(color) {
    const luces = document.querySelectorAll('.luz');
    luces.forEach(luz => luz.classList.remove('activa'));

    let clase;

    if (color === 'rojo') clase = 'roja';
    if (color === 'amarillo') clase = 'amarilla';
    if (color === 'verde') clase = 'verde';

    document.querySelector(`.luz.${clase}`).classList.add('activa');
}

function iniciarAutomatico() {
    detenerAutomatico();

    intervalo = setInterval(() => {
        cambiarColor(colores[posicion]);
        posicion++;

        if (posicion === colores.length) {
            posicion = 0;
        }
    }, 1000);
}

function detenerAutomatico() {
    clearInterval(intervalo);
}