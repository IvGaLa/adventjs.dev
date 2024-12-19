/*

Estamos en la fábrica de Santa Claus 🎅 creando regalos como si no hubiera un mañana.

Pensábamos que no íbamos a llegar pero Jelf Bezos ha tenido una idea genial para aprovechar las máquinas y optimizar al máximo la creación de regalos. 🎁

La configuración de las máquinas es un string. Podemos reconfigurarla para que haga otro regalo y, para ello, podemos cambiar cada carácter por otro.

Pero tiene limitaciones 🥲: al reemplazar el carácter se debe mantener el orden, no se puede asignar al mismo carácter a dos letras distintas (pero sí a si mismo) y, claro, la longitud del string debe ser el mismo.

Necesitamos una función que nos diga si podemos reconfigurar una máquina para que de un regalo pueda pasar a fabricar otro según las reglas mencionadas. Lo mejor es que veamos un ejemplo:

const from = 'BAL'
const to   = 'LIB'
const canReconfigure(from, to) // true
la transformación sería así:
B -> L
A -> I
L -> B


const from = 'CON'
const to   = 'JUU'
const canReconfigure(from, to) // false
no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO


const from = 'XBOX'
const to   = 'XXBO'
const canReconfigure(from, to) // false
no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)


const from = 'XBOX'
const to   = 'XOBX'
const canReconfigure(from, to) // true

const from = 'MMM'
const to   = 'MID'
cons canReconfigure(from, to) // false
no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)


const from = 'AA'
const to   = 'MID'
cons canReconfigure(from, to) // false -> no tiene la misma longitud


*/

export default function canReconfigure(from, to) {
  if (from.length !== to.length) return false;

  const transformations = new Map();

  for (let i = 0; i < from.length; i++) {
    const charFrom = from[i];
    const charTo = to[i];

    if (transformations.has(charFrom)) {
      if (transformations.get(charFrom) !== charTo) return false;
    } else {
      if ([...transformations.values()].includes(charTo)) return false;
      transformations.set(charFrom, charTo);
    }
  }
  return true;
}

const from = 'BAL';
const to = 'LIB';
console.log(canReconfigure(from, to)); // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

const from1 = 'CON';
const to1 = 'JUU';
console.log(canReconfigure(from1, to1)); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

const from2 = 'XBOX';
const to2 = 'XXBO';
console.log(canReconfigure(from2, to2)); // false
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra)
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

const from3 = 'XBOX';
const to3 = 'XOBX';
console.log(canReconfigure(from3, to3)); // true

const from4 = 'MMM';
const to4 = 'MID';
console.log(canReconfigure(from4, to4)); // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

const from5 = 'AA';
const to5 = 'MID';
console.log(canReconfigure(from5, to5)); // false -> no tiene la misma longitud
