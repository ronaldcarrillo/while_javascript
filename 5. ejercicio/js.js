'use strict'
/*
Fibonacci: es una sucesión infinita de números naturales, donde el siguiente es calculado sumando los dos anteriores.

Ejemplo:
    aux    
             a  n
    0, 1, 1, 2, 3, 5, 8, 13, 21.
*/
let anterior = 0;
let nuevo = 1;
let termino = 1;
let contador = 1;
let aux = 0;
while(contador <= termino){
  console.log(anterior);
  aux = nuevo;
  nuevo = nuevo + anterior;
  anterior = aux;
  contador = contador + 1;
}