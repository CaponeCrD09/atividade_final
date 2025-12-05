function ordenarPorPreco(produtos, ordem) {
    if (!Array.isArray(produtos) || produtos.length === 0) {
        console.log("Nenhum produto para ordenar.");
        return;
    }

    if (ordem === "asc") {
        produtos.sort((a, b) => a.preco - b.preco);
        console.log("Produtos ordenados por preço (menor → maior).");
    }
    else if (ordem === "desc") {
        produtos.sort((a, b) => b.preco - a.preco);
        console.log("Produtos ordenados por preço (maior → menor).");
    }
    else {
        console.log('Ordem inválida. Use "asc" ou "desc".');
    }
}
