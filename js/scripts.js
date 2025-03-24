// const values = [6, 3, 9, 7, 5, 90, 23, 15, 64];

// const printFirst10Numbers = () => {
//   for (let i = 0; i < values.length; i++) {
//     console.log(values[i]);
//   }
// };
// printFirst10Numbers();

// const values = [6, 3, 9, 7, 5, 90, 23, 15, 64];

// // const printFirst10Numbers = () => {
// //   for (let i = values.length - 1; i >= 0; i--) {
// //     console.log(values[i]);
// //   }
// // };
// // printFirst10Numbers();

// const printNumbers = () => {
//   for (const value of values) {
//     console.log(value);
//   }
// };
// printNumbers();

// 1️⃣ Camila está revisando una lista de nombres, (por ejemplo: ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía']). Debe imprimir cada nombre en mayúsculas, uno por línea.
// Ejemplo salida:
// PEDRO
// ANA
// LUIS
// ELENA
// SOFÍA

const namesList = () => {
  const names = ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía'];
  for (const name of names) {
    console.log(name.toUpperCase());
  }
};
namesList();

// 2️⃣ Bego tiene un array con precios. Debe sumar todos los precios usando un bucle for y mostrar el total.
// Ejemplo entrada: [23, 78, 45]
// Ejemplo salida: Total: 146

const sumPrices = () => {
  const prices = [23, 78, 45];
  for (let i = 0; i < prices.length; i++) {
    console.log();
  }
};
sumPrices();
