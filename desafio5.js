function deTrasParaFrenteString(string) {

    const stringDeTrasParaFrente = []; // Array

   // A variável i recebe o tamanho do parâmetro string - 1.
   // Enquanto i for maior ou igual a zero, então faça:

    for (let i = string.length - 1; i >= 0; i--) {  

            /* As letras do parâmetro string serão colocadas separadamente no array e em posições diferentes, estando a última letra da 
            string na posição zero e assim por diante.*/
            stringDeTrasParaFrente.push(string[i]); 
    }

    const stringInvertida = stringDeTrasParaFrente.join(""); // Junta todos os elementos do array e retorna uma string.

    console.log(stringInvertida); // Imprime no console.
}

deTrasParaFrenteString("Tassia"); // chamando função.