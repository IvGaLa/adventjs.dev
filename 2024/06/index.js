/*
Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

Ejemplos:

inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "*####",
  "#   #",
  "#  #*",
  "####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
*/


function inBox(box) {
  const boxLength = box.length
  for (let i = 0; i < boxLength; i++) {
    const row = box[i]
    const rowLength = row.length
    const rowIndexOf = row.indexOf('*')
    const tapas = (row.includes('*') && i > 0 && i < boxLength - 1)
    if (tapas && rowIndexOf > 0 && rowIndexOf < rowLength - 1) return true
  }
  return false
}


console.log(inBox([
  "###",
  "#*#",
  "###"
])); // ➞ true

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
])); // ➞ true

console.log(inBox([
  "*####",
  "#   #",
  "#  #*",
  "####"
])); // ➞ false

console.log(inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])); // ➞ false


console.log(inBox([
  "#*#",
  "###",
  "###"
])); // false