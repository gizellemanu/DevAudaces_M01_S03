/* Em **app.js** desenvolva uma função que receba 
**dois arrays** e realize a **concatenação** entre 
eles utilizando o operador **Spread**.
Apresente o resultado no console.log(novoArray). */
console.log('e03-s03-m1');
const concat = (arrayA, arrayB) => [...arrayA, ...arrayB];
const newArray = concat([1, 2, 3], [4, 5, 6]);
console.log(newArray);
// novo array deve ser [1, 2, 3, 4, 5, 6]