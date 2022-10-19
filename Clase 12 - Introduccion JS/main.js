//1. Variables y constantes
let numero; // Variable
const direccion = 'Avenida 8000'; // no se puede reasignar

numero = 15;
console.log(direccion);

numero = 8000;
console.log(numero);

let num1 = 10; // el = es un operador de asignacion
let num2 = 15;
let total;

//2. Operadores Matematicos + - / * 
total = num1 + num2;
console.log(total)

//2.1 Operadores de comparacion === ==  >  <  >=  <=

let edadDavid = 54; //Camel Case
let edadJuanJesus = "54";

if( edadDavid === edadJuanJesus  ){
   console.log('Sus edades son iguales');
}else{
    console.log('Sus edades NO son iguales');
}

// Funciones de Javascript
console.log() // Imprimir en consola
parseInt() // Convierte un string a entero
parseFloat() // Convierte un string a decimales
//alert('Buenos dias') // Mostrar un mensaje en la pagina
// let nombre = prompt('Ingresa tu nombre')  //Mostrar un mensaje y recibir un dato

// console.log('El nombre del usuario es: ' + nombre)

let operador1 = prompt('Ingresa el primer numero'); // Devuelven un string
let operador2 = prompt('Ingresao el segundo numero');


operador1 = parseInt(operador1);
let operador2Numero = parseInt(operador2)


let sumaTotal = operador1 + operador2Numero;

console.log('La suma total es: ' + sumaTotal)