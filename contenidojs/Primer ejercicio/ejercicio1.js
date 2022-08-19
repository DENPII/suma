'use strict';// indica que estamos trabajando en modo estricto
/**
 * Comentarios de bloque
 */

//Declaración de variable so contenedores
/*
var variable1 = 23; //Carácter global
let variable2 = 12; // Ámbito local
const constante1 = 3.14; // Declara constantes

if (true){
    var variable1 = 100;
    let variable2 = 29;
    console.log(variable2)
}

console.log(variable2);*/

//<Suma de dos numeros>
let num1;
let num2;
let suma = 0;
num1 = prompt("Introduzca un número");
num2 = prompt("Introduzca otro número");

suma = parseFloat(num1) + parseFloat(num2);
console.log("El resultado de la suma es: "+suma);
alert("La suma es: "+suma);