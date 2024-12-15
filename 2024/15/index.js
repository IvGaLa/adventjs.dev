/*
Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

Tiene una cabecera con el nombre de la columna.
El nombre de la columna pone la primera letra en mayúscula.
Cada fila debe contener los valores de los objetos en el orden correspondiente.
Cada valor debe estar alineado a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
Mira el ejemplo para ver cómo debes dibujar la tabla:

drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+

*/

function drawTable(data) {
  const titles = Object.keys(data[0]);

  const columnWidths = titles.map((title) =>
    Math.max(title.length, ...data.map((row) => `${row[title]}`.length)),
  );

  const line = `+-${columnWidths.map((w) => '-'.repeat(w)).join('-+-')}-+`;

  const titleRow = `| ${titles
    .map((title, index) => {
      const headerFormatted = title.charAt(0).toUpperCase() + title.slice(1);
      return headerFormatted.padEnd(columnWidths[index]);
    })
    .join(' | ')} |`;

  const lines = data.map(
    (row) =>
      `| ${titles
        .map((key, i) => `${row[key]}`.padEnd(columnWidths[i]))
        .join(' | ')} |`,
  );

  return [line, titleRow, line, ...lines, line].join('\n');
}

console.log(
  drawTable([
    { name: 'Alice', city: 'London' },
    { name: 'Bob', city: 'Paris' },
    { name: 'Charlie', city: 'New York' },
  ]),
);

console.log(
  drawTable([
    { gift: 'Doll', quantity: 10 },
    { gift: 'Book', quantity: 5 },
    { gift: 'Music CD', quantity: 1 },
  ]),
);
