import * as rls from 'readline-sync';

let nombreAlumno : string = ''


while (true) {
    nombreAlumno = rls.question('Ingrese el nombre del alumno (o presione enter para salir): ');

    if (nombreAlumno === ''){
        break;
    }


    const notaPractica = Number(rls.question('Ingrese la nota de práctica: '));
    const notaProblemas = Number(rls.question('Ingrese la nota de problemas: '));
    const notaTeorico = Number(rls.question('Ingrese la nota de teoría: '));


    if (notaPractica < 0 || notaPractica > 10 || notaProblemas < 0 || notaProblemas > 10 || notaTeorico < 0 || notaTeorico > 10) {
        console.log('Error: ingrese un numero entre el 0 y el 10 inclusive');
        continue;
      }

    const notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorico * 0.4;

console.log(`La nota final de ${nombreAlumno} es: ${notaFinal}`);
}