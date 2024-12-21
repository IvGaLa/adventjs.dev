/*

Para no cansar a los renos, Papá Noel quiere dejar el máximo número de regalos haciendo el menor número posible de viajes.

Tiene un array de ciudades donde cada elemento es el número de regalos que puede dejar allí. [12, 3, 11, 5, 7]. Por otro lado, el límite de regalos que caben en su saco. Y, finalmente, el número de ciudades máximo que sus renos pueden visitar.

Como no quiere dejar una ciudad a medias, si no puede dejar todos los regalos que son de esa ciudad, no deja ninguno allí.

Crea un programa que le diga la suma más alta de regalos que podría repartir teniendo en cuenta el máximo de regalos que puede transportar y el número máximo de ciudades que puede visitar:

const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

getMaxGifts(giftsCities, maxGifts, maxCities) // 20
Si no se puede realizar ningún viaje que satisface los requerimientos, el resultado debe ser 0. Más ejemplos:

getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
getMaxGifts([50], 100, 1) // 50
getMaxGifts([50, 70], 100, 1) // 70
getMaxGifts([50, 70, 30], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
getMaxGifts([50, 70, 30], 100, 4) // 100
A tener en cuenta:

maxGifts >= 1
giftsCities.length >= 1
maxCities >= 1
El número de maxCities puede ser mayor a giftsCities.length


*/
function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let maxSum = 0;

  const generateCombinations = (arr, maxLen) => {
    const results = [];

    const helper = (start, combination) => {
      if (combination.length > maxLen) return;
      if (combination.length > 0) results.push([...combination]);

      for (let i = start; i < arr.length; i++) {
        combination.push(arr[i]);
        helper(i + 1, combination);
        combination.pop();
      }
    };

    helper(0, []);

    return results;
  };

  const combinations = generateCombinations(giftsCities, maxCities);

  combinations.forEach((combination) => {
    const sum = combination.reduce((acc, gifts) => acc + gifts, 0);
    if (sum <= maxGifts) maxSum = Math.max(maxSum, sum);
  });

  return maxSum;
}

const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)); // 20
// console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)); // 20
// console.log(getMaxGifts([50], 15, 1)); // 0
// console.log(getMaxGifts([50], 100, 1)); // 50
// console.log(getMaxGifts([50, 70], 100, 1)); // 70
// console.log(getMaxGifts([50, 70, 30], 100, 2)); // 100
// console.log(getMaxGifts([50, 70, 30], 100, 3)); // 100
// console.log(getMaxGifts([50, 70, 30], 100, 4)); // 100
