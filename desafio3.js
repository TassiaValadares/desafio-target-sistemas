const faturamento = [ // Array de objetos json.
    {
        "dia": 1,
        "valor": 22174.1664
    },
    {
        "dia": 2,
        "valor": 24537.6698
    },
    {
        "dia": 3,
        "valor": 26139.6134
    },
    {
        "dia": 4,
        "valor": 0.0
    },
    {
        "dia": 5,
        "valor": 0.0
    },
    {
        "dia": 6,
        "valor": 26742.6612
    },
    {
        "dia": 7,
        "valor": 0.0
    },
    {
        "dia": 8,
        "valor": 42889.2258
    },
    {
        "dia": 9,
        "valor": 46251.174
    },
    {
        "dia": 10,
        "valor": 11191.4722
    },
    {
        "dia": 11,
        "valor": 0.0
    },
    {
        "dia": 12,
        "valor": 0.0
    },
    {
        "dia": 13,
        "valor": 3847.4823
    },
    {
        "dia": 14,
        "valor": 373.7838
    },
    {
        "dia": 15,
        "valor": 2659.7563
    },
    {
        "dia": 16,
        "valor": 48924.2448
    },
    {
        "dia": 17,
        "valor": 18419.2614
    },
    {
        "dia": 18,
        "valor": 0.0
    },
    {
        "dia": 19,
        "valor": 0.0
    },
    {
        "dia": 20,
        "valor": 35240.1826
    },
    {
        "dia": 21,
        "valor": 43829.1667
    },
    {
        "dia": 22,
        "valor": 18235.6852
    },
    {
        "dia": 23,
        "valor": 4355.0662
    },
    {
        "dia": 24,
        "valor": 13327.1025
    },
    {
        "dia": 25,
        "valor": 0.0
    },
    {
        "dia": 26,
        "valor": 0.0
    },
    {
        "dia": 27,
        "valor": 25681.8318
    },
    {
        "dia": 28,
        "valor": 1718.1221
    },
    {
        "dia": 29,
        "valor": 13220.495
    },
    {
        "dia": 30,
        "valor": 8414.61
    }
]

const mediaFaturamentoMensal = calculaMediaMensal(); // Valor retornado da função.

function calculaMediaMensal() {
    
const faturamentoTotal = faturamento.reduce((acumulador, faturamento) => acumulador + faturamento.valor, 0); /* Soma todos os elementos 
do array e retorna um valor.*/

const mediaFaturamento = faturamentoTotal / faturamento.length; // Calculando a média mensal de faturamento.

return mediaFaturamento; // Retorna o valor para fora da função.

}

function exibeMenorFaturamentoDoMes() {

    let menorValor = Infinity; // Um número infinito positivo.

    let diaDoMenorValor;

    for (const dia of faturamento) { // for... of percorre todo o array faturamento, atribuindo cada elemento e realizando a condição do if.

        if (dia.valor > 0 && menorValor > dia.valor) { // Se dia.valor for maior que zero e menorValor for maior que dia.valor, então faça:

            menorValor = dia.valor; // atribui o valor para a variável menorValor.

            diaDoMenorValor = dia.dia; // Atribui o dia de menor faturamento.
        }
    }

    console.log(`O menor faturamento do mês foi ${menorValor} no dia ${diaDoMenorValor}.`); // Imprime no console.
}

exibeMenorFaturamentoDoMes(); // Chamando função.

function exibeMaiorFaturamentoDoMes() {

    let maiorValor = faturamento[0].valor; // Atribuído à variável maiorValor, o elemento do primeiro array localizado na propriedade valor.

    let diaDoMaiorValor;

    for (const dia of faturamento) { // for... of percorre todo o array faturamento, atribuindo cada elemento e realizando a condição do if.

        if (dia.valor > 0 && maiorValor < dia.valor) { // Se dia.valor for maior que zero e maiorValor for menor que dia.valor, então faça:

            maiorValor = dia.valor; // atribui o valor para a variável maiorValor.

            diaDoMaiorValor = dia.dia; // Atribui o dia de maior faturamento.
        }
    }

    console.log(`O maior faturamento do mês foi ${maiorValor} no dia ${diaDoMaiorValor}.`); // Imprime no console.
}

exibeMaiorFaturamentoDoMes(); // Chamando a função.

function exibeQuantidadeDeDiasComFaturamentoExcedidoAMediaMensal() {

    let dias = 0

    for (let i = 0; i < faturamento.length; i++) { // Enquanto i for menor que o tamanho do array faturamento, então faça:

            if (faturamento[i].valor > mediaFaturamentoMensal) {  // Se faturamento.valor for maior que mediaMensal, então faça:

                dias =+ i; // Atribui ele mesmo + i.
        }
    }

    // Imprime no console.

    console.log(`A quantidade de dias em que o faturamento diário foi superior à média mensal foi de: ${dias} dias.`);
}

exibeQuantidadeDeDiasComFaturamentoExcedidoAMediaMensal(); // chamando função.