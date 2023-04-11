import * as rls from 'readline-sync';

const numeroDados = Number(rls.question('Ingrese el número de dados: '));

if (numeroDados >= 1 && numeroDados % 1 === 0) {

  const probabilidad = (1 / 6) ** numeroDados;

  console.log(`La probabilidad de sacar todos los dados 6 es de ${probabilidad}`);
  
} else {

  console.log('Debe ingresar un número entero mayor o igual a 1');

}