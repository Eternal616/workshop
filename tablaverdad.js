//Ejercicio 3.a

let p_0=prompt("Ingrese p:");
let q_0=prompt("Ingrese q:");
const p=Boolean(p_0);
const q=Boolean(q_0);

console.log("Not p:" + !p)
const resultado=!p && q
console.log("Not p AND q:" + resultado);

//Ejercicio 3.b

console.log("NOT q:" + !q);
const resultado1=!p && !q;
console.log("NOT p AND NOT q:" + resultado1);