"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num1 = parseFloat(rls.question('Ingrese un numero: '));
var numMax = parseFloat(rls.question("Ingrese hasta que numero quiere saber la tabla de ".concat(num1, ": ")));
console.log("Tabla de multiplicaci\u00F3n de ".concat(num1, ":"));
for (var i = 1; i <= numMax; i++) {
    console.log("".concat(num1, " x ").concat(i, " = ").concat(num1 * i));
}
