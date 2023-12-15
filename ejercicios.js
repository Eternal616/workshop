// Ejercicio 1.a
const sueldo=prompt("Ingrese su sueldo en USD:");
const antiguedad=prompt("Ingrese su antiguedad en años:");
const sueldoInferior2000= Number(sueldo) <2000;
const antiguedad10=Number(antiguedad) ==10 || Number(antiguedad)>10;
const ejercicioa=sueldoInferior2000 && antiguedad10;
console.log("Respuesta 1.a.1 :" + ejercicioa);

//Ejercicio 1.b
const antiguedadmenor10=Number(antiguedad) <10;
const ejerciciob=sueldoInferior2000 || antiguedadmenor10;
console.log("Respuesta 1.a.2 : " + ejerciciob);

//Ejercicio 1.c

const ejercicioc=!sueldoInferior2000;
console.log("Respuesta 1.a.3 : " + ejercicioc);