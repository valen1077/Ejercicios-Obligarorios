"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nombreAlumno = '';
while (true) {
    nombreAlumno = rls.question('Ingrese el nombre del alumno (o presione enter para salir): ');
    if (nombreAlumno === '') {
        break;
    }
    var notaPractica = Number(rls.question('Ingrese la nota de práctica: '));
    var notaProblemas = Number(rls.question('Ingrese la nota de problemas: '));
    var notaTeorico = Number(rls.question('Ingrese la nota de teoría: '));
    if (notaPractica < 0 || notaPractica > 10 || notaProblemas < 0 || notaProblemas > 10 || notaTeorico < 0 || notaTeorico > 10) {
        console.log('Error: ingrese un numero entre el 0 y el 10 inclusive');
        continue;
    }
    var notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorico * 0.4;
    console.log("La nota final de ".concat(nombreAlumno, " es: ").concat(notaFinal));
}
