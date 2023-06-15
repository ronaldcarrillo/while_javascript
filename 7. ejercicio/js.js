'use strict'
/*
Imprimir los números pares del 1 al 50.
*/

let numero = 10;
let contador = 1;
let factorial = 1;
while(contador <= numero){
  factorial *= contador;
  contador++;
}

const formateado = factorial.toLocaleString("es", {
	style: "currency",
	currency: "COP"
});
console.log(formateado);