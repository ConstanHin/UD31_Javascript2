setInterval(obtenerHora, 1000);

function obtenerHora() {

    let horas = document.getElementById('horas');
    let minutos = document.getElementById('minutos');
    let segundos = document.getElementById('segundos');

    let date = new Date();

    horas.innerHTML = date.getHours();
    minutos.innerHTML = date.getMinutes();
    segundos.innerHTML = date.getSeconds();

}