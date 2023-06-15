'use strict'
/*Suma números hasta que la suma sea mayor a un límite. */

let suma = 0;
let numero = 0
while (suma < 1000){
    numero = parseInt(prompt('Ingrese un número'),10);
    suma += numero;
    console.log(suma);
}
alert(`La suma es ${suma}`);
