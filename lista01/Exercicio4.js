const leia = require('readline-sync');

nUm = leia.questionFloat("\nDigite um valor para N1: ");
nDois = leia.questionFloat("\nDigite um valor para N2: ");
nTres = leia.questionFloat("\nDigite um valor para N3: ");
nQuatro = leia.questionFloat("\nDigite um valor para N4: ");
result = (nUm * nDois) - (nTres * nQuatro);

console.log("O resultado é: " , (result.toFixed(1)));

