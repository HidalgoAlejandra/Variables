// Entrada de datos
const num1 = Number(prompt('Ingrese numero 1: '));
const num2 = Number(prompt('Ingrese numero 2: '));
const num3 = Number(prompt('Ingrese numero 3: '));
const num4 = Number(prompt('Ingrese numero 4: '));
const num5 = Number(prompt('Ingrese numero 5: '));
// Proceso
let suma = num1 + num2 + num3 + num4 + num5;
let promedio = suma/5;

// Salida de datos
document.getElementById("suma").innerHTML = suma;
document.getElementById("promedio").innerHTML = promedio;
