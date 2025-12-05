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
