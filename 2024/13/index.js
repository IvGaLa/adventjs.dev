/*

Los elfos del Polo Norte han creado un robot 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. El robot se mueve en un plano 2D y partimos desde el origen (0, 0).

Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

Las órdenes básicas del robot son:

L: Mover hacia la izquierda
R: Mover hacia la derecha
U: Mover hacia arriba
D: Mover hacia abajo
Pero también tiene ciertos modificadores para los movimientos:

*: El movimiento se realiza con el doble de intensidad (ej: *R significa RR)
!: El siguiente movimiento se invierte (ej: R!L se considera como RR)
?: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: R?R significa R)
Nota: Cuando el movimiento se invierte con ! se contabiliza el movimiento invertido y no el original. Por ejemplo, !U?U invierte el movimiento de U, por lo que contabiliza que se hizo el movimiento D pero no el U. Así !U?U se traduce como D?U y, por lo tanto, se haría el movimiento U final.

Debes devolver:

true: si el robot vuelve a estar justo donde empezó
[x, y]: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo
isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

// Ejemplos paso a paso:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'

*/

function isRobotBack(moves) {
  const invertMovements = {
    R: 'L',
    L: 'R',
    U: 'D',
    D: 'U',
  };

  const pos = [0, 0];
  const numbers = {
    R: [1, 0],
    L: [-1, 0],
    U: [0, 1],
    D: [0, -1],
  };

  const history = new Set();

  let invertNext = false;

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];

    if (invertNext) {
      move = invertMovements[move] || move;
      invertNext = false;
    }

    switch (move) {
      case '*':
        if (i + 1 < moves.length) {
          const nextMove = moves[i + 1];
          moves = moves.slice(0, i) + nextMove + nextMove + moves.slice(i + 2);
          i--;
        }
        break;

      case '!':
        invertNext = true;
        break;

      case '?':
        if (i + 1 < moves.length && history.has(moves[i + 1])) {
          moves = moves.slice(0, i) + moves.slice(i + 1);
        }
        break;
    }

    if (numbers[move]) {
      pos[0] += numbers[move][0];
      pos[1] += numbers[move][1];
    }

    history.add(move);
  }

  return pos[0] === 0 && pos[1] === 0 ? true : pos;
}

console.log(isRobotBack('R')); // [1, 0]
console.log(isRobotBack('RL')); // true
console.log(isRobotBack('RLUD')); // true
console.log(isRobotBack('*RU')); // [2, 1]
console.log(isRobotBack('R*U')); // [1, 2]
console.log(isRobotBack('LLL!R')); // [-4, 0]
console.log(isRobotBack('R?R')); // [1, 0]
console.log(isRobotBack('U?D')); // true
console.log(isRobotBack('R!L')); // [2,0]
console.log(isRobotBack('U!D')); // [0,2]
console.log(isRobotBack('R?L')); // true
console.log(isRobotBack('U?U')); // [0,1]
console.log(isRobotBack('*U?U')); // [0,2]
console.log(isRobotBack('U?D?U')); // true
