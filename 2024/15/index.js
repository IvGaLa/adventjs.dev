function drawTable(data) {
  const headers = [];
  const columnWidths = [];

  for (const header of Object.keys(data[0])) {
    headers.push(header.charAt(0).toUpperCase() + header.slice(1));
    columnWidths.push(
      Math.max(
        header.length,
        ...data.map((item) => item[header].toString().length),
      ),
    );
  }

  const drawRow = (row, widths, isHeader = false) =>
    '| ' +
    headers
      .map((header, i) => {
        const value = isHeader
          ? header
          : row[Object.keys(data[0])[i]].toString();
        return value.padEnd(widths[i]);
      })
      .join(' | ') +
    ' |';

  const line =
    '+-' + columnWidths.map((width) => '-'.repeat(width) + '-+').join('-');

  const result = [
    line,
    drawRow(null, columnWidths, true),
    line,
    ...data.map((row) => drawRow(row, columnWidths)),
    line,
  ].join('\n');

  return result;
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
