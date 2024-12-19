/*

Ayer, en noche buena, una família cenó por todo lo alto... Con tanta copa 🍾 encima todavía no han retirado los platos y la comida de ayer...

Un ratoncillo llamado midurat 🐭, que vió ayer el festín escondido, está relamiéndose los bigotes al ver todos los manjares que hay en el comedor.

Eso sí, hay que tener cuidado 😶 y sólo hacer los movimientos correctos para comer algo. Por eso, el ratón, que se ha visto los vídeos de midudev, va a crear una función para saber si su próximo movimiento es correcto o no ✅.

El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

Un espacio vacío es que no hay nada
Una m es el ratón
Un * es la comida
Vamos a ver unos ejemplos:

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false
¡Ten en cuenta que el ratón quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!

*/

export default function canMouseEat(direction, game) {
  const DIRECTIONS = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1],
  };

  for (let x = 0; x < game.length; x++) {
    for (let y = 0; y < game[x].length; y++) {
      if (game[x][y] === 'm') {
        const [dx, dy] = DIRECTIONS[direction];
        const newX = x + dx;
        const newY = y + dy;

        if (
          newX >= 0 &&
          newX < game.length &&
          newY >= 0 &&
          newY < game[x].length
        ) {
          return game[newX][newY] === '*';
        } else {
          return false;
        }
      }
    }
  }

  return false;
}

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*'],
];

console.log(canMouseEat('up', room)); // false
console.log(canMouseEat('down', room)); // true
console.log(canMouseEat('right', room)); // false
console.log(canMouseEat('left', room)); // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*'],
];

console.log(canMouseEat('up', room2)); // false
console.log(canMouseEat('down', room2)); // false
console.log(canMouseEat('right', room2)); // true
console.log(canMouseEat('left', room2)); // false
