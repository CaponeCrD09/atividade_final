const fs = require("fs").promises;

// -------------------------------
// LER ARQUIVO (load)
// -------------------------------
async function carregarProdutos(caminhoArquivo) {
  try {
    const conteudo = await fs.readFile(caminhoArquivo, "utf-8");

    const produtos = JSON.parse(conteudo); // converte string → array/objeto

    console.log("✔ Arquivo carregado com sucesso.");
    return produtos;

  } catch (erro) {

    if (erro.code === "ENOENT") {
      console.error("❌ Erro: Arquivo não encontrado:", caminhoArquivo);
    } else if (erro instanceof SyntaxError) {
      console.error("❌ Erro: JSON inválido no arquivo.");
    } else {
      console.error("❌ Erro ao ler o arquivo:", erro.message);
    }

    return []; // devolve array vazio em caso de falha
  }
}

// -------------------------------
// SALVAR ARQUIVO (save)
// -------------------------------
async function salvarProdutos(caminhoArquivo, produtos) {
  try {
    const conteudo = JSON.stringify(produtos, null, 2); // formata bonito

    await fs.writeFile(caminhoArquivo, conteudo);

    console.log("✔ Produtos salvos com sucesso.");

  } catch (erro) {
    console.error("❌ Erro ao salvar o arquivo:", erro.message);
  }
}

module.exports = { carregarProdutos, salvarProdutos };
