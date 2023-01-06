/* Em um arquivo **app.js** incluído em **index.html**:
Implemente uma função "**procuraMinMax**" que receba como parâmetro
um array (numérico) e identifique o **menor** e o **maior** valor do mesmo. 
Imprima no console estes valores ou **"Não é possível encontrar"** quando não for possível. */

console.log('e01-s03-m1');
const procuraMinMax = (numeros) => {
  if (Array.isArray(numeros) && numeros.length > 0) {
    let larger = numeros[0];
    let smaller = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > larger) {
        larger = numeros[i];
      }
      if (numeros[i] < smaller) {
        smaller = numeros[i];
      }
    }
    console.log(`Maior: ${larger} | Menor: ${smaller}`);
  } else {
    console.log("Não foi possível encontrar");
  }
}
procuraMinMax([56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47])
procuraMinMax([])
procuraMinMax([1])
procuraMinMax([1, -1])
procuraMinMax(null)
procuraMinMax([-2,-2,-2,-2])
procuraMinMax([20,10, 30])