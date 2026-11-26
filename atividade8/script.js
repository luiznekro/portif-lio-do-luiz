let contasorte = 0;
let contaazar = 0;


function sorte(){
let min = 1;
let max = 100;
let dif = max - min;
let aleatorio = Math.random();
let num = min + Math.trunc(dif * aleatorio);


let mostrar = document.getElementById('resultado');

if(num > 50){
contasorte++;

  mostrar.innerHTML = `<p>sorte: ${contasorte} </p> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKsMzdhLsqgP0k3A71j16HnOgtDKJtQLKZfrLeuZLRrw&s=10">
    `
}else{
contaazar++;

    mostrar.innerHTML =`<p>azar: ${contaazar} </p><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZBtXnu2V1iYL_TLOKnHzONqqt2DGhtrDDE9CMPJ14A&s=10">`
}




}