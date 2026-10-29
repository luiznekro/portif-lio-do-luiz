function aleatorio() {
let min = 1;
let max = 23;
let dif = max - min;
let aleatorio = Math.random();
let num = min + Math.trunc(dif * aleatorio);

let mostrar = document.getElementById('resultado');
mostrar.innerHTML = `<p>acabei de pensar no número ${num}.</p>`;

if( num == 22){ alert ("FAZ O F DE FLAVIO")
   
}
}