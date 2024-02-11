// Entrada de datospara ejecucion en node
const dias = 999;

// Proceso
const anos = Math.floor(dias / 365);
const semanas = Math.floor((dias % 365) / 7);
const diasRestantes = (dias % 365) % 7;

// Salida de datos
console.log(`Años: ${anos}  Semanas: ${semanas}  Dias: ${diasRestantes}`);