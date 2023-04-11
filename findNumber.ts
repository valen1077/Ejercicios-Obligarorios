import * as readlineSync from 'readline-sync';

let numero: number = parseFloat(readlineSync.question('Ingrese número: '));
let maximo: number = numero;

while (numero !== 0) {
  if (numero > maximo) {
    maximo = numero;
  }
  numero = parseFloat(readlineSync.question('Ingrese número: '));
}

console.log(`El máximo es ${maximo}`);