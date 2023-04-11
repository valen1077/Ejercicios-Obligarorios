"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numero = parseFloat(readlineSync.question('Ingrese número: '));
var maximo = numero;
while (numero !== 0) {
    if (numero > maximo) {
        maximo = numero;
    }
    numero = parseFloat(readlineSync.question('Ingrese número: '));
}
console.log("El m\u00E1ximo es ".concat(maximo));
