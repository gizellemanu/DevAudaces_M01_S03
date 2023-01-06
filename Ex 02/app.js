/* Em um arquivo **app.js** (incluído em **index.html**) faça o seguinte:
No documento **js** faça uma **arrow function** para retornar uma mensagem (string) de **"Olá, Mundo!"**.
Armazene esta **arrow function** em uma constante (**const**) de nome **mensagemOla**.
Chame a função **mensagemOla** e exiba o retorno desta função no console.
Ajuste a função **mensagemOla** para que receba um parâmetro **nome** e retorne a mensagem **"Olá, [nome]!"**. */

console.log('e02-s03-m1');
const entradaName = document.getElementById('name');
const botaoAction = document.getElementById('action');
const pMensagem = document.getElementById('mensagem');
const mensagemhello = name => `Hello, ${name}!`; // podemos omitir as chaves e return statement
const result = mensagemhello("Gizelle Emanuela");
console.log(result);
botaoAction.addEventListener('click', () => {pMensagem.innerHTML = mensagemhello(entradaName.value);});