/*

Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.

El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.

Para crear los cubos se le pasa un número con el tamaño deseado al programa y este devuelve un string con el diseño de ese tamaño. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

const cube = createCube(3)
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: /, \, _ y (espacio en blanco).

Otros ejemplos de cubos:

const cubeOfOne = createCube(1)
/\_\
\/_/
const cubeOfTwo = createCube(2)
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
A tener en cuenta:

Fíjate bien en los espacios en blanco que hay en el cubo.
El cubo tiene que ser simétrico.
Asegúrate de usar los símbolos correctos.
Cada nueva línea del cubo debe terminar con un salto de línea (\n) excepto la última.

*/

function createCube(size) {
  const UP = '/\\';
  const DOWN = '\\/';
  const RIGTH = '_\\';
  const LEFT = '_/';

  const cube = Array(size * 2);

  for (let i = 1; i <= size; i++) {
    const espaces = ' '.repeat(Math.abs(size - i));
    const lineUp = espaces + UP.repeat(i) + RIGTH.repeat(size);
    const lineDown = espaces + DOWN.repeat(i) + LEFT.repeat(size);
    cube[i - 1] = lineUp;
    cube[cube.length - i] = lineDown;
  }

  return cube.join('\n');
}

const cubeOfOne = createCube(1);
console.log(cubeOfOne);
// /\_\
// \/_/

const cubeOfTwo = createCube(2);
console.log(cubeOfTwo);

//  /\_\_\
// /\/\_\_\
// \/\/_/_/
//  \/_/_/

const cubeOfFour = createCube(4);
console.log(cubeOfFour);
//    /\_\_\_\_\
//   /\/\_\_\_\_\
//  /\/\/\_\_\_\_\
// /\/\/\/\_\_\_\_\
// \/\/\/\/_/_/_/_/
//  \/\/\/_/_/_/_/
//   \/\/_/_/_/_/
//    \/_/_/_/_/
