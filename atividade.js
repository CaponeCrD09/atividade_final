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

