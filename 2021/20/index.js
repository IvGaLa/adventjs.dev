/*

En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

Vamos a ver unos ejemplos de frases:

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false
Y ya que estás... ¿Cuál es tu pangrama favorito? ¡Compártelo en nuestra comunidad de Discord!

*/

export default function pangram(letter) {
  const abc = new Set('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ');
  const normalizedLetter = letter
    .toUpperCase()
    .replace(/Ñ/g, '#')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/#/g, 'Ñ');

  const uniqueLetters = new Set(
    [...normalizedLetter].filter((char) => abc.has(char)),
  );

  return uniqueLetters.size === abc.size;
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')); // true
console.log(
  pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'),
); // true
console.log(
  pangram(
    'Esto es una frase larga pero no tiene todas las letras del abecedario',
  ),
); // false
console.log(pangram('De la a a la z, nos faltan letras')); // false
