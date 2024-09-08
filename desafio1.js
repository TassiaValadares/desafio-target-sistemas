const indice = 13; // O índice é 13.

let soma = 0; // A variável soma começa em zero.

let k = 0; // A variável k começa em zero.

while(k < indice) { // Enquanto k for menor que indice, então faça:

    k++  // Já no começo do loop é acrescido um número. Exemplo: Começou em 0, mas agora já é 1.

    soma += k; // A variável soma é avaliada somente uma vez, passando por avaliação em todos os loops a variável k.
}

console.log(soma); // Imprime no console.