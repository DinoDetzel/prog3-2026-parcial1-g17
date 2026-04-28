let intervalo = null;
let posicion = 0;
const colores = ['rojo', 'verde', 'amarillo'];

const tiempos = {
    rojo: 7000,
    verde: 9000,
    amarillo: 3000
};

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

    posicion = 0; // arranca siempre desde rojo

    function ciclo() {
        const colorActual = colores[posicion];

        cambiarColor(colorActual);

        document.getElementById("texto-estado").textContent = "MODO: Automatico";

        intervalo = setTimeout(() => {

            posicion++;
            if (posicion === colores.length) {
                posicion = 0;
            }

            ciclo();

        }, tiempos[colorActual]);
    }

    ciclo();
}

// detener
function detenerAutomatico() {
    if (intervalo) {
        clearTimeout(intervalo); // corta el ciclo correctamente
        intervalo = null;
    }

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