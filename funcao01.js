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
