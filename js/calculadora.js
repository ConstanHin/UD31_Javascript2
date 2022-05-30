// autor Constantin Vlad
// Calculadora simple

// Variables
let num1 = 0;
let num2 = 0;
let operador = "";
let fase = 1;
let result = 0;
const regexOperador = /[*+-]/;

// Estado inicial 
function setEstadoInicial() {
    num1 = 0;
    num2 = 0;
    result = 0;
    let operador = "";
    display.innerHTML = "0";
    fase = 1;
}

// Obtener el display o pantalla
const display = document.getElementById("calc-display");
display.innerText = num1;

// Obtener los botones
const botones = document.querySelectorAll(".calc-btn");

for (let i = 0; i < botones.length; i++) {
    botones[i].onclick = clickedBtn;
}

setEstadoInicial();

/*
*
* Al hacer click sobre un boton, identificar el botón
* luego ejecutar la acción propia del botón
*/
function clickedBtn() {

    // Identificar el botón por su id
    switch (this.id) {
        case "calc-igual":
            igualBtn();
            break;
        case "calc-plus":
            operadorBtn(this);

            break;
        case "calc-minus":
            operadorBtn(this);

            break;
        case "calc-multiplicar":
            operadorBtn(this);

            break;
        case "calc-punto":
            puntoBtn();
            break;
        case "calc-c":
            setEstadoInicial();
            break;
        default:
            // En otro caso es numero
            calcNum(this);
            break;
    }
}


/**
 * Method numero
 */
function calcNum(btn) {
    const numText = btn.innerText;
    // Si está el texto en estado inicial de "0" eliminar el "0"
    if (display.innerText === "0") {
        display.innerText = "";
    }

    display.innerText += numText;
    if (fase === 1) {
        num1 = Number.parseFloat(display.innerText);

    } else {
        const regex = /(?!\D)\d*/g;
        const arr = display.innerText.match(regex);
        num2 = Number.parseFloat(arr[1]);
        console.log(num2, ",num2");

    }
}


/**
 * Method igual calcular
 */
function igualBtn() {
    // Ejecutar la operación
    // Mostrar el resultado por display

    const matched = display.innerText.match(regexOperador);

    switch (matched[0]) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2

            break;
        case "*":
            result = num1 * num2

            break;
        default:
            break;
    }

    display.innerText = result;

    num1 = result;

}

/**
 * Method operacion
 */
function operadorBtn(btn) {
    fase = 2;

    // Set operador
    operador = btn.innerText;

    // Buscar operador en el string. Añadirlo al display si no existe
    // subtituirlo si existe


    if (display.innerText.match(regexOperador)) {
        const matched = display.innerText.match(regexOperador);
        display.innerText = display.innerText.replace(matched[0], operador);
    } else {
        // Mostrar operador por display
        display.innerText += operador;

    }

}

/**
 * Metodo punto
 */
function puntoBtn() {
    const regex = /(?!\D)\d*/g;
    const arr = display.innerText.match(regex);
    console.log(arr);
    if (fase === 1 && display.innerText.includes(".")) {
        console.log("fase1");
    } else if (fase === 2 && arr[1].includes(".")) {
        console.log("fase2");

    } else {
        display.innerText += ".";
    }
}
