let numero=prompt("Ingrese el numero base:");
const multiplo=Number(numero);
let calculo=multiplo%2 ==0;
//Si el residuo del modulo por 2 es 0, es multiplo de 2
console.log("¿Es multiplo de 2? :" + calculo);