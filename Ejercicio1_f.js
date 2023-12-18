/*El aeropuerto El Dorado se encuentra en remodelación y requiere un 
programa para suministrarlo a su personal de seguridad con el objetivo de 
brindar información a los turistas sobre donde se debe tramitar las salidas 
internacionales para nacionales y extranjeros. Se le solicita diseñar este 
programa para que reciba el primer dígito de un número de pasaporte y 
que muestre el valor booleano que indique si el turista es del país o 
extranjero. Todos los No. de pasaporte que inicien con la letra A son 
nacionales. */

// Número de pasaporte, asumiendo que es una cadena de texto
const pasport=prompt("Ingrese su pasaporte");
console.log("Su número de pasaporte es: "+ pasport);

// Obtenemos el primer dígito del número de pasaporte
const firstDigit = pasport.charAt(0);

// Evaluamos si el turista es nacional o extranjero
let national = firstDigit === "A";

// Imprimimos el resultado
console.log("¿El turista es nacional? "+ national);
