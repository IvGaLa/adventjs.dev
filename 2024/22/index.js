/*

Santa Claus 🎅 está revisando una lista de juguetes únicos que podría incluir en su bolsa mágica de regalos. Quiere explorar todas las combinaciones posibles de juguetes. Quiere ver todas las combinaciones que realmente contengan al menos un juguete.

Tu tarea es escribir una función que, dado un array de juguetes, devuelva todas las combinaciones posibles.

Importante: Debes devolverlo en el orden que aparecen los juguetes y de combinaciones de 1 a n juguetes.

generateGiftSets(['car', 'doll', 'puzzle'])
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

generateGiftSets(['ball'])
// [
//   ['ball']
// ]

generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
Nota: En el array de entrada siempre habrá al menos un juguete y nunca habrá juguetes duplicados.

Consejo: Hay muchas formas de solucionar este problema, pero el backtracking puede ser una buena opción. 😉

*/

function generateGiftSets(gifts) {
  const result = [];

  const backtrack = (s, cur) => {
    if (cur.length > 0) result.push([...cur]);

    for (let i = s; i < gifts.length; i++) {
      cur.push(gifts[i]);
      backtrack(i + 1, cur);
      cur.pop();
    }
  };

  backtrack(0, []);

  return result.sort((a, b) => a.length - b.length);
}

console.log(generateGiftSets(['car', 'doll', 'puzzle']));
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(['ball']));
// [
//   ['ball']
// ]

console.log(generateGiftSets(['game', 'pc']));
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
