/*

¡Santa Claus ya ha repartido todos los regalos! Ahora está revisando los informes de productividad de los elfos. Pero hay un problema: la Product Owner, Mrs. Claus 🧑‍🎄✨, necesita entender rápidamente si los elfos cumplieron con los tiempos estimados. Están haciendo Agile Scream.

Para ayudar a Mrs. Claus, tu tarea es calcular el porcentaje completado de cada tarea y devolverlo redondeado al número entero más cercano. Esto le permitirá planificar mejor para la próxima Navidad y mantener a todos contentos.

Esta es la función que espera:

getCompleted('01:00:00', '03:00:00') // 33%
getCompleted('02:00:00', '04:00:00') // 50%
getCompleted('01:00:00', '01:00:00') // 100%
getCompleted('00:10:00', '01:00:00') // 17%
getCompleted('01:10:10', '03:30:30') // 33%
getCompleted('03:30:30', '05:50:50') // 60%
🎁 Ahora Santa Claus y los elfos merecen un descanso. ¡Esperamos que hayan disfrutado el AdventJS y lo recomienden a sus amigos!

*/

function getCompleted(timeWorked, totalTime) {
  const timeToSeconds = (t) => {
    const [h, m, s] = t.split(':').map(Number);
    return h * 3600 + m * 60 + s;
  };

  const secondsWorked = timeToSeconds(timeWorked);
  const secondsTotal = timeToSeconds(totalTime);
  const value = Math.round((secondsWorked / secondsTotal) * 100);

  return `${value}%`;
}

console.log(getCompleted('01:00:00', '03:00:00')); // 33%
console.log(getCompleted('02:00:00', '04:00:00')); // 50%
console.log(getCompleted('01:00:00', '01:00:00')); // 100%
console.log(getCompleted('00:10:00', '01:00:00')); // 17%
console.log(getCompleted('01:10:10', '03:30:30')); // 33%
console.log(getCompleted('03:30:30', '05:50:50')); // 60%
