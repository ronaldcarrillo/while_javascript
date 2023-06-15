'use strict'
/*Realiza un programa que te pida un número positivo y si introduces un número negativo te vuelva a pedir el número. */

let numero = -5;
while (numero < 0){
    console.log('Ingrese un número positivo');
    numero = parseInt(prompt('Ingrese un número positivo'));
}
