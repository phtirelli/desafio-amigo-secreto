//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];


function adicionarAmigo() {
    let input = document.getElementById("amigo").value;

    if (input === '') {
        alert('O campo não pode estar vazio. Adicione um nome');
    } else {
        listaNomes.push(input);
        input = document.getElementById("amigo").value = '';
        console.log(listaNomes);

    }


}


