/*

¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:

> Se mueve a la siguiente instrucción
+ Incrementa en 1 el valor actual
- Decrementa en 1 el valor actual
[ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
{y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.

execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5
Nota: Un condicional puede tener un bucle dentro y también un bucle puede tener un condicional. Pero nunca se anidan dos bucles o dos condicionales.

*/

function execute(code) {
  const instructions = code.split('');
  let count = 0;

  for (let i = 0; i < instructions.length; i++) {
    switch (instructions[i]) {
      case '+':
        count++;
        break;

      case '-':
        count--;
        break;

      case '[':
        i = instructions.indexOf(']', i) - 1;
        count = 0;
        break;

      case '{':
        if (count === 0) i = instructions.indexOf('}', i) - 1;
        break;
    }
  }
  return count;
}

console.log(execute('+++')); // 3
console.log(execute('+--')); // -1
console.log(execute('>+++[-]')); // 0
console.log(execute('>>>+{++}')); // 3
console.log(execute('+{[-]+}+')); // 2
console.log(execute('{+}{+}{+}')); // 0
console.log(execute('------[+]++')); // 2
console.log(execute('-[++{-}]+{++++}')); // 5