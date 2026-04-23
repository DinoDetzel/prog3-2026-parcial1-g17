function cambiarColor(color) {
    const luces = document.querySelectorAll('.luz');
    luces.forEach(luz => luz.classList.remove('activa'));

    let clase;

    if (color === 'rojo') clase = 'roja';
    if (color === 'amarillo') clase = 'amarilla';
    if (color === 'verde') clase = 'verde';

    document.querySelector(`.luz.${clase}`).classList.add('activa');
}