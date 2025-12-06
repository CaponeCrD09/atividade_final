const input = require("./input"); // seu módulo de entrada

(async () => {
    let produtos = [
        { id: 1, nome: "Mouse" },
        { id: 2, nome: "Teclado" },
        { id: 3, nome: "Monitor" }
    ];

    console.log("Informe o ID do produto a ser removido:");
    const idRemover = Number(await input());

    // Localiza o índice
    const indice = produtos.findIndex(p => p.id === idRemover);

    if (indice === -1) {
        console.log("Produto não encontrado!");
    } else {
        produtos.splice(indice, 1);
        console.log("Produto removido com sucesso!");
    }

    console.log("Lista final de produtos:", produtos);
})();

function ordenarPorPreco(produtos, ordem) {
    if (!Array.isArray(produtos) || produtos.length === 0) {
        console.log("Nenhum produto para ordenar.");
        return;
    }

    if (ordem === "asc") {
        produtos.sort((a, b) => a.preco - b.preco);
    } 
    else if (ordem === "desc") {
        produtos.sort((a, b) => b.preco - a.preco);
    } 
    else {
        console.log('Ordem inválida. Use "asc" ou "desc".');
    }
}


const fs = require("fs"); // IMPORTAÇÃO QUE FALTAVA

// Array global de produtos (exemplo)
let produtos = [
    { id: 1, nome: "Mouse", preco: 50 },
    { id: 2, nome: "Teclado", preco: 120 }
];

function salvarDados(caminhoArquivo) {
    try {
        // Converte o array produtos para JSON formatado
        const conteudo = JSON.stringify(produtos, null, 4);

        // Grava o conteúdo no arquivo
        fs.writeFileSync(caminhoArquivo, conteudo, "utf8");

        console.log("✅ Dados salvos com sucesso!");
        return true;
    } catch (erro) {
        console.error("❌ Erro ao salvar dados:", erro.message);
        return false;
    }
}

module.exports = { salvarDados, produtos };

function listarProdutos(produtos) {
    console.log("\n=== Lista de Produtos Cadastrados ===");

    // Se o array estiver vazio
    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado no momento.");
        return;
    }

    // Percorre o array e exibe cada produto
    produtos.forEach((produto, index) => {
        console.log(`\nProduto ${index + 1}:`);
        console.log(`ID: ${produto.id}`);
        console.log(`Nome: ${produto.nome}`);
        console.log(`Categoria: ${produto.categoria}`);
        console.log(`Preço: R$ ${produto.preco.toFixed(2)}`);
        console.log(`Quantidade em Estoque: ${produto.quantidadeEmEstoque}`);
    });

    console.log("\n=====================================\n");
}


