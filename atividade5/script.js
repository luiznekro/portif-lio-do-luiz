function maior() {
let numero1;
let numero2;

numero1 = Number(prompt("digite o primeiro número:"));
numero2 = Number(prompt("digite o segundo número:"));

if(numero1 > numero2){
    alert("o número " + numero1 + " é maior que o número " + numero2 +".");
 }else if(numero1 < numero2){
    alert("o número " + numero2 + " é maior que o número " + numero1 +".");
}else{
alert("os números são iguais");

}
}
