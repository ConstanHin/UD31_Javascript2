// by Constantin Vlad

// Metodo a ejecutar al hacer click en el párrafo
const onParagrafoClick = function () {

    // Mostrar display
    display.style.opacity = 1;
    // Disminuir opacidad con temporizador
    setTimeout(() => display.style.opacity = 0, 1000);

    // Comprobar si es un párrafo de la segunda tabla
    document.querySelector("#tabla1 p").closest("#tabla2")
    if (this.closest("#tabla2")) {
        display.innerText = "Se pulsó un párrafo de la segunda tabla"; 
    } else {
        display.innerText = "Se presiono un párrafo del documento"; 
    }
}

// Obtenemos todos los párrafos de la página
const elementos = document.querySelectorAll("p");

// Setear la acción a realizar al hacer click en el párrafo
for (let index = 0; index < elementos.length; index++) {
    elementos.item(index).onclick = onParagrafoClick;
}

// Obtenemos el display para mostrar el mensaje
const display = document.getElementById("display");
