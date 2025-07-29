//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaNomes = [];

//Função para adicionar amigo
function adicionarAmigo() {
    let input = document.getElementById("amigo").value;

    if (input === '') {
        alert('O campo não pode estar vazio. Adicione um nome');
    } else if (listaNomes.includes(input)) {
        alert('Nome já adicionado. Por favor, insira um nome diferente.');
        document.getElementById('amigo').value = '';
    } else {
        listaNomes.push(input);
        listarAmigos();
        document.getElementById('amigo').value = '';
    }


}

//função para listar amigos
function listarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i <= listaNomes.length; i++) {
        let novoNome = document.createElement("li");
        novoNome.textContent = listaNomes[i];
        lista.appendChild(novoNome);
    }


}

function sortearAmigo() {
    if (listaNomes.length < 2) {
        alert('Adicione pelo menos 2 amigos para realizar o sorteio!');
        
    }

    const indiceSorteado = Math.floor(Math.random() * listaNomes.length);
    const amigoSorteado = listaNomes[indiceSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo secreto é: <strong>${amigoSorteado}</strong>`;
}
