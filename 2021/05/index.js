/*
Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.

Veamos unos ejemplos:

const date1 = new Date('Dec 1, 2021')
daysToXmas(date1) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
daysToXmas(date2) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
daysToXmas(date3) // 1
const date4 = new Date("December 20, 2021 03:24:00")
daysToXmas(date4) // 5
El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.

¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos 0) o si es una fecha futura (devolveríamos el número de días en negativo -):

const date = new Date('Dec 25, 2021')
daysToXmas(date) // 0
const date1 = new Date('Dec 26, 2021')
daysToXmas(date1) // -1
const date2 = new Date('Dec 31, 2021')
daysToXmas(date2) // -6
const date3 = new Date('Jan 1, 2022 00:00:01')
daysToXmas(date3) // -7
const date4 = new Date('Jan 1, 2022 23:59:59')
daysToXmas(date4) // -7
Por cierto, la fecha de referencia para saber si es 25 de diciembre es Dec 25, 2021.
*/

export default function daysToXmas(date) {
  const diff =
    new Date('Dec 25, 2021').setHours(0, 0, 0, 0) - date.setHours(0, 0, 0, 0);
  const conversor = 1000 * 60 * 60 * 24;

  return Math.round(diff / conversor);
}

const date1 = new Date('Dec 1, 2021');
console.log(daysToXmas(date1)); // Obtenido: 24 Esperado: 24
const date2 = new Date('Dec 24, 2021 00:00:01');
console.log(daysToXmas(date2)); // Obtenido: 1 Esperado: 1
const date3 = new Date('Dec 24, 2021 23:59:59');
console.log(daysToXmas(date3)); // Obtenido: 0 Esperado: 1
const date4 = new Date('December 20, 2021 03:24:00');
console.log(daysToXmas(date4)); // Obtenido: 5 Esperado: 5
const date5 = new Date('Dec 25, 2021');
console.log(daysToXmas(date5)); // Obtenido: 0 Esperado: 0
const date6 = new Date('Dec 26, 2021');
console.log(daysToXmas(date6)); // Obtenido: -1 Esperado: -1
const date7 = new Date('Dec 31, 2021');
console.log(daysToXmas(date7)); // Obtenido: -6 Esperado: -6
const date8 = new Date('Jan 1, 2022 00:00:01');
console.log(daysToXmas(date8)); // Obtenido: -7 Esperado: -7
const date9 = new Date('Jan 1, 2022 23:59:59');
console.log(daysToXmas(date9)); // Obtenido: -8 Esperado: -7
