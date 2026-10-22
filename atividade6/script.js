function site() {
    let nome;
    let mostrar;

    nome = prompt("qual é o seu nome?");
    mostrar = document.getElementById('"mostrar');

    mostrar.innerHTML = `<p>olá,  ${nome}!</mark> seja bem vindo! </p>;`
}