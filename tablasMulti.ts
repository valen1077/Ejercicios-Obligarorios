import * as rls from 'readline-sync';

let num1: number = parseFloat(rls.question('Ingrese un numero: '));
let numMax: number = parseFloat(rls.question(`Ingrese hasta que numero quiere saber la tabla de ${num1}: `));

console.log(`Tabla de multiplicación de ${num1}:`);

for (let i = 1; i <= numMax; i++) {
  console.log(`${num1} x ${i} = ${num1 * i}`);
}