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
  let startAddition = 0;
  for (let i = 0; i < prices.length; i++) {
    startAddition = startAddition + prices[i];
  }
  console.log(startAddition);
};
sumPrices();

// 3️⃣ Macarena quiere generar tres códigos de seguridad y almacenarlos en un array. Cada código debe ser un número aleatorio entre 1000 y 9999. Usa un bucle for para generar los códigos y luego mostrarlos.
// Ejemplo salida: [4356, 7890, 1234]

const generatePassword = emptyArray => {
  // const fisrtPassword = '';
  // const secondPassword = '';
  // const thirdPassword = '';

  for (let i = 0; i < 3; i++) {
    const randomNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);
    emptyArray.push(randomNumber);
  }
  console.log(emptyArray);
};
generatePassword([]);

// 4️⃣ Abby encontró una lista de suministros en un refugio: ['Agua', 'Munición', 'Botiquín', 'Czst']. Debe comprobar si todos los elementos contienen al menos una vocal.
// Ejemplo salida:
// Agua contiene vocales.
// Munición contiene vocales.
// Botiquín contiene vocales.
// Czst no contiene vocales.
const containsVowels = list => {
  const vowels = 'aeiouAEIOU';
  for (let i = 0; i < list.length; i++) {
    if (list.includes(vowels)) {
      console.log('si');
    } else {
      console.log('no');
    }
  }
  //alreves vowels
};
containsVowels(['Agua', 'Munición', 'Botiquín', 'Czst']);
