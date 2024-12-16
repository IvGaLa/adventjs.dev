/*
Los elfos están trabajando arduamente para limpiar los caminos llenos de nieve mágica ❄️. Esta nieve tiene una propiedad especial: si dos montículos de nieve idénticos y adyacentes se encuentran, desaparecen automáticamente.

Tu tarea es escribir una función que ayude a los elfos a simular este proceso. El camino se representa por una cadena de texto y cada montículo de nieve un carácter.

Tienes que eliminar todos los montículos de nieve adyacentes que sean iguales hasta que no queden más movimientos posibles.

El resultado debe ser el camino final después de haber eliminado todos los montículos duplicados:

removeSnow('zxxzoz') // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

removeSnow('abcdd') // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

removeSnow('zzz') // -> "z"
// 1. Eliminamos "zz", quedando "z"

removeSnow('a') // -> "a"
// No hay montículos repetidos

*/

function removeSnow(s) {
  const stack = [];
  for (const char of s)
    stack.length > 0 && stack[stack.length - 1] === char
      ? stack.pop()
      : stack.push(char);

  return stack.join('');
}

console.log(removeSnow('zxxzoz')); // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow('abcdd')); // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow('zzz')); // -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow('a')); // -> "a"
// No hay montículos repetidos
