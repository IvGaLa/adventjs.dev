/*
El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado bombas de carbón explosivo 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (true) y otras están vacías (false).

Los duendes necesitan tu ayuda para mapear las zonas peligrosas. Cada celda vacía debe mostrar un número que indique cuántas bombas de carbón explosivo hay en las posiciones adyacentes, incluidas las diagonales.

detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
  [true, true],
  [false, false],
  [true, true]
])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
Nota: ¿Quieres una pista? Seguro que has jugado al juego de buscaminas antes… 😉

*/

function detectBombs(grid) {
  const result = [];
  const DIRECTIONS = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  for (let x = 0; x < grid.length; x++) {
    const gridRow = grid[x];
    const row = Array(gridRow.length).fill(0);
    for (let y = 0; y < gridRow.length; y++)
      DIRECTIONS.forEach(([dx, dy]) => {
        if (grid[x + dx]?.[y + dy]) row[y]++;
      });

    result.push(row);
  }
  return result;
}

console.log(
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ]),
);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(
  detectBombs([
    [true, false],
    [false, false],
  ]),
);

// [
//   [0, 1],
//   [1, 1]
// ]

console.log(
  detectBombs([
    [true, true],
    [false, false],
    [true, true],
  ]),
);

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
