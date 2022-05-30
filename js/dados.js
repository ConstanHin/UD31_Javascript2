// Constantin Vlad
// UD30_11 Simulación de lanzamiento de dos dados

const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");

let vecesResultado = [0];
// Lanzar un dado
function lanzarDado() {
    // Obtener numero aleatorio entre 1 y 6, redondear posible decimal
    let numRandom = Math.random() * 5 + 1;
    numRandom = Math.round(numRandom);
    return numRandom;
}


// Sumar resultado de los dados lanzados
function lanzarVariosDados(nrDados) {
    let sumaDados = 0;
    for (let index = 0; index < nrDados; index++) {
        sumaDados = lanzarDado() + sumaDados;
    }
    return sumaDados;
}

// Lanzar dos dados
// Tomar ese resultado como referencia
const sumaPrimerLanzamiento = lanzarVariosDados(2);

// Dentro de un array anotar el total de veces que aparece ese resultado
// Hacer la operación 36000 veces
for (let i = 0; i < 36000; i++) {
    let sumaDados = lanzarVariosDados(2);
    if (sumaPrimerLanzamiento === sumaDados) {
        vecesResultado[0] = vecesResultado[0] + 1;
    }
}

display1.innerText = "El valor del primer lanzamiento de dados es: " + sumaPrimerLanzamiento;
display2.innerText = "Este valor se repite " + vecesResultado[0] + " veces.";
console.log("El valor del primer lanzamiento de dados es: " + sumaPrimerLanzamiento);
console.log("Este valor se repite " + vecesResultado[0] + " veces.");