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

module.exports = { ordenarPorPreco };
