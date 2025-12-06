// ===============================
// IMPORT INPUT ASSÍNCRONO
// ===============================
const input = require("./input");
const fs = require("fs").promises;

// ===============================
// FUNÇÃO 1 — Buscar Produto por ID
// ===============================
function buscarProdutoPorId(produtos, id) {
    return produtos.find(prod => prod.id === id);
}



// ===============================
// FUNÇÃO 2 — Cadastrar Produto
// ===============================
async function cadastrarProduto(produtos) {

    const id_prod = await input("Digite o ID do produto: ");

    const produtoExistente = produtos.find(prod => prod.id === id_prod);
    if (produtoExistente) {
        console.log("❌ Já existe um produto com este ID. Cadastro não realizado.");
        return;
    }

    const nome = await input("Digite o nome do produto: ");
    const categoria = await input("Digite a categoria do produto: ");
    const preco = Number(await input("Digite o preço do produto: "));
    const quantidadeEmEstoque = Number(await input("Digite a quantidade em estoque: "));

    const produto = {
        id: id_prod,
        nome,
        categoria,
        preco,
        quantidadeEmEstoque
    };

    produtos.push(produto);
    console.log("✅ Produto cadastrado com sucesso!");
}



// ===============================
// FUNÇÃO 3 — Atualizar Produto
// ===============================
async function atualizarProduto(produtos) {
    const id = await input("Digite o ID do produto que deseja atualizar: ");

    const produto = buscarProdutoPorId(produtos, id);

    if (!produto) {
        console.log("❌ Produto não encontrado!");
        return;
    }

    console.log("\n--- Produto encontrado ---");
    console.log(produto);

    const novoNome = await input(`Novo nome (${produto.nome}): `);
    const novaCategoria = await input(`Nova categoria (${produto.categoria}): `);
    const novoPrecoStr = await input(`Novo preço (${produto.preco}): `);

    if (novoNome.trim()) produto.nome = novoNome;
    if (novaCategoria.trim()) produto.categoria = novaCategoria;
    if (novoPrecoStr.trim()) produto.preco = Number(novoPrecoStr);

    console.log("✅ Produto atualizado com sucesso!");
}



// ===============================
// FUNÇÃO 4 — Filtrar por Categoria
// ===============================
async function filtrarPorCategoria(produtos) {
    const categoria = await input("Digite a categoria para filtrar: ");

    const filtrados = produtos.filter(p => p.categoria === categoria);

    if (filtrados.length === 0) {
        console.log("\nNenhum produto encontrado nessa categoria.");
    } else {
        console.log("\n=== PRODUTOS DA CATEGORIA:", categoria, "===\n");
        console.log(filtrados);
    }
}



// ===============================
// FUNÇÃO 5 — Carregar Produtos de JSON
// ===============================
async function carregarProdutos(caminhoArquivo) {
    try {
        const conteudo = await fs.readFile(caminhoArquivo, "utf8");
        const produtos = JSON.parse(conteudo);
        console.log("📂 Produtos carregados do arquivo!");
        return produtos;
    } catch (erro) {
        console.log("⚠ Erro ao carregar arquivo:", erro.message);
        return [];
    }
}



// ===============================
// FUNÇÃO 6 — Salvar Produtos em JSON
// ===============================
async function salvarProdutos(produtos, caminhoArquivo) {
    try {
        await fs.writeFile(caminhoArquivo, JSON.stringify(produtos, null, 4));
        console.log("💾 Produtos salvos com sucesso!");
    } catch (erro) {
        console.log("⚠ Erro ao salvar arquivo:", erro.message);
    }
}



// ===============================
// FUNÇÃO 10 — MAIN COM MENU
// ===============================
async function main() {

    let produtos = [];
    let opcao = "";

    do {
        console.log("\n========== MENU DO SISTEMA ==========");
        console.log("1 – Cadastrar produto");
        console.log("2 – Atualizar produto");
        console.log("3 – Filtrar produto por categoria");
        console.log("4 – Carregar produtos do arquivo JSON");
        console.log("5 – Salvar produtos no arquivo JSON");
        console.log("0 – Sair");

        opcao = await input("Escolha uma opção: ");

        switch (opcao) {

            case "1":
                await cadastrarProduto(produtos);
                break;

            case "2":
                await atualizarProduto(produtos);
                break;

            case "3":
                await filtrarPorCategoria(produtos);
                break;

            case "4":
                produtos = await carregarProdutos("./produtos.json");
                break;

            case "5":
                await salvarProdutos(produtos, "./produtos.json");
                break;

            case "0":
                console.log("👋 Encerrando o sistema...");
                break;

            default:
                console.log("⚠ Opção inválida! Tente novamente.");
        }

    } while (opcao !== "0");
}



// ===============================
// EXECUTAR SISTEMA
// ===============================
main();
