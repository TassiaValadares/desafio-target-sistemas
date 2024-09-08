function IdentificaNumeroDaSequenciaFibonacci(numero) {
    
    const primeiraVerificacao = Math.sqrt(5 * (numero ** 2) + 4); // Retorna a raiz quadrada do número resultante da operação.

    const segundaVerificacao = Math.sqrt(5 * (numero ** 2) - 4);


   if (Number.isInteger(primeiraVerificacao) || Number.isInteger(segundaVerificacao)) { /* Verifica se a raiz quadrada é um número
     inteiro, se for, então faça:*/

        console.log(`O número ${numero} faz parte da sequência de fibonacci.`); // Imprime no console.
        
   } else {  // Senão, então faça:

        console.log(`O número ${numero} não faz parte da sequência de fibonacci.`);
   }
}

IdentificaNumeroDaSequenciaFibonacci(34); // Chamando a função.