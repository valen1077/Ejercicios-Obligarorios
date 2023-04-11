"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numeroDados = Number(rls.question('Ingrese el número de dados: '));
if (numeroDados >= 1 && numeroDados % 1 === 0) {
    var probabilidad = Math.pow((1 / 6), numeroDados);
    console.log("La probabilidad de sacar todos los dados 6 es de ".concat(probabilidad));
}
else {
    console.log('Debe ingresar un número entero mayor o igual a 1');
}
