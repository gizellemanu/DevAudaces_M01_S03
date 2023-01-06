/* Um *palindrome* (palíndromo), segundo o dicionário Houaiss, 
**"diz-se de frase ou palavra que se pode ler, indiferentemente,
da esquerda para direita ou vice-versa"**, como por exemplo: *osso*, *Ana*, *radar*. 
Ou seja, é uma palavra que quando lida de trás pra frente tem o mesmo significado.  */
console.log('e06-s03-m1');
function verificaPalindromoFor(texto) { // ana, radar, osso
  const meio = texto.length / 2;
  const fim = texto.length - 1;
  for (let i = 0; i < meio; i++) {
    if (texto[i] !== texto[fim - i]) {
      return false;
    }
  }
  return true;
}
// reduzindo para arrow function com spread, reverse e join
const verificaPalindromo = t => [...t].reverse().join('') === t;
const teste0 = verificaPalindromo("osso");
console.log(teste0);// true
const teste1 = verificaPalindromo("ana");
console.log(teste1);// true
const teste2 = verificaPalindromo("julia");
console.log(teste2);// false
