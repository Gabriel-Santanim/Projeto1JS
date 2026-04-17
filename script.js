// Document => oque faz? 
// É o objeto que representa a sua página HTML inteira dentro do JavaScript.

// getElementById => oque faz?
// É um método do document que faz exatamente o que o nome diz. Ele vasculha seu HTML procurando a tag que tem aquele id específico e o traz para você manipular.

// value => oque é?
// É uma propriedade usada para pegar o valor que está escrito dentro de um campo de formulário no seu HTML.

// Diferenca (==) (===) 
// == (Igualdade abstrata): Verifica apenas o valor, ignorando o tipo. Exemplo: 5 == "5" é Verdadeiro.
// === (Igualdade estrita): Verifica o valor e o tipo. Exemplo: 5 === "5" é Falso. É o mais recomendado de se usar para evitar bugs.

// join => oque faz?
// É uma função usada em arrays. Ela pega todos os itens dessa lista e os junta em um única String.

// filter => oque é?
// É um filtro de listas. Ele passa por todos os itens do array e verifica uma condição que você determinou.


let filmes = [];

document.getElementById("btnCadastrar").addEventListener("click", cadastrarFilme);
document.getElementById("btnFiltrarClassificacao").addEventListener("click", filtrarClassificacao);
document.getElementById("btnFiltrarAno").addEventListener("click", filtrarAno);

function cadastrarFilme() {
    let titulo = document.getElementById("titulo").value;
    let ano = document.getElementById("ano").value;
    let classificacao = document.getElementById("classificacao").value;
    
    // Validação
    if (titulo === "" || ano === "" || classificacao === "") {
        alert("Preencha todos os campos");
        return;
    }

    let filme = {
        titulo: titulo,
        ano: Number(ano),
        classificacao: classificacao
    };

    filmes.push(filme);
    limparCampos();
    exibirFilmes(filmes);
}

function exibirFilmes(lista) {
    
    let texto = lista.map(f =>
        `${f.titulo} (${f.ano}) - Classificação: ${f.classificacao}`
    ).join("<br>");
    
    document.getElementById("listaFilmes").innerHTML = texto;
}

function filtrarClassificacao() {
    let filtro = document.getElementById("filtroClassificacao").value;
    let resultado = filmes.filter(f => f.classificacao === filtro);
    exibirFilmes(resultado);
}

function filtrarAno() {
    let filtro = Number(document.getElementById("filtroAno").value);
    let resultado = filmes.filter(f => f.ano === filtro);
    exibirFilmes(resultado);
}

function limparCampos() {
    document.getElementById("titulo").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("classificacao").value = "";
}