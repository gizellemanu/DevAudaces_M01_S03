/* No arquivo **apps.js**, utilizando o operador **Rest**, crie uma 
função que receba como parâmetro uma **quantidade indefinida de 
variáveis** inteiras (números inteiros).
A função deve retornar a soma de todos os **parâmetros** (...).
Após executada a função, o resultado deve ser exibido no console. */
console.log('e05-s03-m1');
const somaTudo = (...numeros) => {
  let total = 0;
    numeros.forEach((num) => {
    total += num;
  });
    return total;
}
const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);