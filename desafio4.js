const faturamentoEstados = [ // Array de objetos 

    {
        estado: "SP",

        valor: 67836.43
    },

    {
        estado: "RJ",

        valor: 36678.66
    },

    {
        estado: "MG",

        valor: 29229.88
    },

    {
        estado: "ES",

        valor: 27165.48
    },

    {
        estado: "Outros",

        valor: 19849.53
    }];

    
 

const faturamentoTotal = calculaFaturamentoTotal(); // Valor retornado da função.

function calculaFaturamentoTotal() {

    let faturamentoTotal = 0;

    for (let i = 0; i < faturamentoEstados.length; i++) { // Enquanto i for menor que o tamanho do array faturamentoEstados, então faça:

        faturamentoTotal += faturamentoEstados[i].valor; /* FaturamentoTotal recebe ele mesmo e o valor do índice de
         faturamentoEstados.valor.*/
    }

    return faturamentoTotal // retorna para fora da função.

}

function calculaPorcentagemDeFaturamento(estado) {

    let porcentagem;

    if (estado === "SP") { // Se o parâmetro for totalmente igual à sigla, então faça

            porcentagem = (faturamentoEstados[0].valor / faturamentoTotal) * 100; // atribui porcentagem.

    } else { // Senão, então faça:

        if (estado === "RJ") {

               porcentagem = (faturamentoEstados[1].valor / faturamentoTotal) * 100;

        } else {

            if (estado === "MG") {

                    porcentagem = (faturamentoEstados[2].valor / faturamentoTotal) * 100;

            } else {

                if (estado === "ES") {

                        porcentagem = (faturamentoEstados[3].valor / faturamentoTotal) * 100;

                } else {

                    if (estado === "Outros") {

                            porcentagem = (faturamentoEstados[4].valor / faturamentoTotal) * 100;
                    }
                }
            }
        }
    }

    console.log(`Porcentagem do faturamento total por estados: ${estado} = ${porcentagem.toFixed(0)}%`); // Imprime no console.
}

calculaPorcentagemDeFaturamento("ES"); // Chamando função.