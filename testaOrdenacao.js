const { ordenarPorPreco } = require("./atividade"); 
const input = require("./input"); // usa seu input.js correto

(async () => {
    // Criamos um array de produtos para testar
    let produtos = [
        { nome: "Caneta", preco: 4.50 },
        { nome: "Caderno", preco: 15.90 },
        { nome: "Borracha", preco: 2.00 },
        { nome: "Estojo", preco: 12.00 }
    ];

    console.log("\n--- PRODUTOS ORIGINAIS ---");
    console.log(produtos);

    console.log("\nDigite 'asc' para ordem crescente ou 'desc' para decrescente:");
    let ordem = await input(); // funciona com seu input.js

    ordenarPorPreco(produtos, ordem);

    console.log("\n--- PRODUTOS ORDENADOS ---");
    console.log(produtos);
})();
