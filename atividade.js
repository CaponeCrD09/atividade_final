const readline = require('readline');

function cadastrarProduto(produtos) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite o ID do produto: ", (id_prod) => {
        // Verifica se já existe um produto com o mesmo ID
        const produtoExistente = produtos.find(prod => prod.id === id_prod);
        if (produtoExistente) {
            console.log("Erro: Já existe um produto com este ID. Cadastro não realizado.");
            rl.close();
            return;
        }

        rl.question("Digite o nome do produto: ", (nome) => {
            rl.question("Digite a categoria do produto: ", (categoria) => {
                rl.question("Digite o preço do produto: ", (precoStr) => {
                    const preco = parseFloat(precoStr);
                    rl.question("Digite a quantidade em estoque: ", (quantidadeStr) => {
                        const quantidadeEmEstoque = parseInt(quantidadeStr);

                        // Cria o objeto produto
                        const produto = {
                            id: id_prod,
                            nome: nome,
                            categoria: categoria,
                            preco: preco,
                            quantidadeEmEstoque: quantidadeEmEstoque
                        };

                        // Adiciona o produto ao array
                        produtos.push(produto);
                        console.log("Produto cadastrado com sucesso!");

                        rl.close();
                    });
                });
            });
        });
    });
}

// Exemplo de uso (para testar, descomente as linhas abaixo):
// let produtos = [];
// cadastrarProduto(produtos);

const readline = require('readline');

function cadastrarProduto(produtos) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite o ID do produto: ", (id_prod) => {
        // Verifica se já existe um produto com o mesmo ID
        const produtoExistente = produtos.find(prod => prod.id === id_prod);
        if (produtoExistente) {
            console.log("Erro: Já existe um produto com este ID. Cadastro não realizado.");
            rl.close();
            return;
        }

        rl.question("Digite o nome do produto: ", (nome) => {
            rl.question("Digite a categoria do produto: ", (categoria) => {
                rl.question("Digite o preço do produto: ", (precoStr) => {
                    const preco = parseFloat(precoStr);
                    rl.question("Digite a quantidade em estoque: ", (quantidadeStr) => {
                        const quantidadeEmEstoque = parseInt(quantidadeStr);

                        // Cria o objeto produto
                        const produto = {
                            id: id_prod,
                            nome: nome,
                            categoria: categoria,
                            preco: preco,
                            quantidadeEmEstoque: quantidadeEmEstoque
                        };

                        // Adiciona o produto ao array
                        produtos.push(produto);
                        console.log("Produto cadastrado com sucesso!");

                        rl.close();
                    });
                });
            });
        });
    });
}

// Exemplo de uso (para testar, descomente as linhas abaixo):
// let produtos = [];
// cadastrarProduto(produtos);

const fs = require("fs").promises;

/**
 * Lê um arquivo JSON e retorna um array de produtos.
 * @param {string} caminhoArquivo - Caminho do arquivo JSON
 * @returns {Promise<Array>} - Array de produtos
 */
async function carregarProdutos(caminhoArquivo) {
  try {
    // Lê o arquivo como texto
    const conteudo = await fs.readFile(caminhoArquivo, "utf-8");

    // Converte o texto para objeto/array
    const produtos = JSON.parse(conteudo);

    return produtos;
  } catch (erro) {
    // Tratamento de erros
    if (erro.code === "ENOENT") {
      console.error("❌ Arquivo não encontrado:", caminhoArquivo);
    } else if (erro instanceof SyntaxError) {
      console.error("❌ JSON inválido no arquivo:", caminhoArquivo);
    } else {
      console.error("❌ Erro ao ler o arquivo:", erro.message);
    }
    return []; // retorna array vazio em caso de falha
  }
}

// Exemplo de uso:
(async () => {
  const produtos = await carregarProdutos("./input.json");
  console.log(produtos);
})();


