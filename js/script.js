let intervalo;
let posicion = 0;
const colores = ['rojo', 'amarillo', 'verde'];

// cambia luces
function cambiarColor(color) {
    const luces = document.querySelectorAll('.luz');

    // apaga todas
    luces.forEach(luz => {
        luz.classList.remove('activa-rojo', 'activa-amarillo', 'activa-verde');
    });

    // prende la correcta
    document.getElementById(color).classList.add(`activa-${color}`);
}

// modo automatico
function iniciarAutomatico() {
    detenerAutomatico();

    intervalo = setInterval(() => {
        cambiarColor(colores[posicion]);

        posicion++;
        if (posicion === colores.length) {
            posicion = 0;
        }

        document.getElementById("texto-estado").textContent = "MODO: Automatico";

    }, 1000);
}

// detener
function detenerAutomatico() {
    clearInterval(intervalo);
    document.getElementById("texto-estado").textContent = "MODO: Detenido";
}

// modo manual
function controlManual(color) {
    detenerAutomatico();
    cambiarColor(color);

    document.getElementById("texto-estado").textContent = "MODO: Manual - " + color;
}

// eventos botones
document.getElementById("btnIniciar").addEventListener("click", iniciarAutomatico);
document.getElementById("btnDetener").addEventListener("click", detenerAutomatico);