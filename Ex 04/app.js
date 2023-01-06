/* Em um arquivo **app.js** incluído em **index.html** 
escreva uma função de nome **mesclaObjetos**, que aceita 
dois objetos como parâmetro e retorna um novo objeto que 
contem todos os pares chave-valor do primeiro e do segundo objetos. */
console.log('e04-s03-m1');
const mesclaObjects = (objA, objB) => ({ ...objA, ...objB });// para retornar objetos é necessário utilizar parentesis
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const newObject = mesclaObjects(obj1, obj2);
console.log(newObject);
/* { a: 1, b: 2, c: 3, d: 4 } */