/*
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
      
Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
*/

export default function isValid(letter) {
  let stack = [];

  for (let i = 0; i < letter.length; i++) {
    const char = letter[i];

    if (char === '(') {
      stack.push(i);
    } else if (char === ')') {
      if (stack.length === 0) return false;

      const openIndex = stack.pop();
      const content = letter.substring(openIndex + 1, i).trim();

      if (!/^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/.test(content)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid('bici coche (balón) bici coche peluche')); // -> ✅
console.log(isValid('(muñeca) consola bici')); // ✅
console.log(isValid('bici coche (balón bici coche')); // -> ❌
console.log(isValid('peluche (bici [coche) bici coche balón')); // -> ❌
console.log(isValid('(peluche {) bici')); // -> ❌
console.log(isValid('() bici')); // ❌
