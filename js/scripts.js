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
// const containsVowels = list => {
//   const vowels = 'aeiouAEIOU';
//   for (let i = 0; i < list.length; i++) {
//     if (vowels.includes(list)) {
//       console.log('si');
//     } else {
//       console.log('no');
//     }
//   }
//   //alreves vowels
// };

const checkList = list => {
  const vowels = 'aeiouAEIOU';
  for (const supplie of list) {
    //recorre list [0], list [1]...
    let hasVowel = false;
    for (const letter of supplie) {
      //recorre supplie[1].charAt(0),supplie[1].charAt(2)... >> letra por letra
      if (vowels.includes(letter)) {
        hasVowel = true;
        break;
      }
    }
    if (hasVowel) {
      console.log(`${supplie} tiene vocales.`);
    } else {
      console.log(`${supplie} no tiene vocales.`);
    }
  }
};
checkList(['Agua', 'Munición', 'Botiquín', 'Czst']);

// 5️⃣ Bego está calculando precios con descuento. Tiene un array con precios, (por ejemplo [150, 300, 50]). Si el precio es mayor a 100, aplica un 20% de descuento, si no, un 10%. Usa un bucle para mostrar cada precio original, descuento aplicado y precio final.
// Ejemplo salida:
// Precio original: 150 - Descuento aplicado: 30 - Precio final: 120
// Precio original: 300 - Descuento aplicado: 60 - Precio final: 240
// Precio original: 50 - Descuento aplicado: 5 - Precio final: 45

const getDiscount = prices => {
  for (const price of prices) {
  }
};
getDiscount([150, 300, 50]);

// 7️⃣ Sabrina quiere verificar cuántos números aleatorios generados entre 1 y 100 son múltiplos de 3. Haz una función que haga esta comprobación con 10 números.
// Ejemplo salida:
// Números generados: [12, 35, 75, 9, 27, 4, 6, 88, 15, 3]
// Múltiplos de 3 encontrados: 7

// 8️⃣ Macarena tiene un array con tres nombres y debe crear un array nuevo con las iniciales de cada nombre en mayúsculas usando un bucle.
// Ejemplo entrada: ['Pedro', 'Ana', 'Luis']
// Ejemplo salida: ['P', 'A', 'L']

const getCapLetters = names => {
  const initials = [];
  for (const name of names) {
    const initial = name.charAt(0).toUpperCase(); //NOMBRAR BIEN TODO
    initials.push(initial);
  }
  console.log(initials);
};
getCapLetters(['Pedro', 'Ana', 'Luis']);

// 9️⃣ Abby está revisando mensajes cifrados. Tiene un array con palabras (cantidad y palabras a tu elección) que deben invertirse y mostrarse en minúsculas. Usa un bucle para procesarlas todas. Investiga sobre las funciones split(), reverse() y join()
// Ejemplo entrada: ['FUEGO', 'REFUGIO', 'SUMINISTROS']
// Ejemplo salida: ['oguef', 'oiguref', 'sotsinimus']

const getWords = words => {
  const reversedWords = [];
  for (word of words) {
    const reverseWord = word.split('').reverse().join('').toLowerCase();
    reversedWords.push(reverseWord);
  }
  console.log(reversedWords);
};
getWords(['FUEGO', 'REFUGIO', 'SUMINISTROS', 'riñon']);

// 🔟 Camila quiere generar un código de acceso combinando letras aleatorias y números. Usa un bucle para crear un string aleatorio de 6 caracteres sacados de 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.
// Ejemplo salida: 'A3P9K8'

const getRandomCode = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (i = 0; i < 6; i++) {
    const randomPosition = Math.floor(Math.random() * characters.length);
    const randomCharacter = characters.charAt(randomPosition);
    code = code + randomCharacter;
  }
  console.log(code);
};
getRandomCode();

// 1️⃣1️⃣ Macarena quiere crear un sistema que genere combinaciones de nombres y apellidos. Tiene dos arrays: ['Juan', 'Ana', 'Luis'] y ['Pérez', 'Martínez', 'García']. Debe generar todos los nombres posibles combinando uno de cada array.
// Ejemplo salida:
// Juan Pérez
// Juan Martínez
// Juan García
// Ana Pérez
// Ana Martínez
// Ana García
// Luis Pérez
// Luis Martínez
// Luis García

// 1️⃣2️⃣ Abby quiere comprobar si al menos uno de los números generados aleatoriamente entre 1 y 100 es divisible por 5. Genera 5 números y muestra si se cumple la condición.
// Ejemplo salida:
// Números generados: [23, 45, 67, 12, 90]
// Números divisibles por 5 encontrados: [45, 90]

// 1️⃣3️⃣ Camila tiene un array con nombres y quiere mostrar sólo aquellos que tienen más de 4 letras.
// Ejemplo entrada: ['Pedro', 'Ana', 'Luis', 'Elena', 'Sofía']
// Ejemplo salida: ['Pedro', 'Elena', 'Sofía']

// 1️⃣4️⃣ Bego tiene un array con tres palabras y quiere mostrar todas las combinaciones posibles de esas palabras usando dos palabras a la vez y cuyas combinaciones no repitan la palabra.
// Ejemplo entrada: ['Sol', 'Luna', 'Estrella']
// Ejemplo salida:
// Sol Luna
// Sol Estrella
// Luna Sol
// Luna Estrella
// Estrella Sol
// Estrella Luna

const wordCombination = () => {
  const wordList = ['Sol', 'Luna', 'Estrella'];
  for (const word of wordList) {
    for (const word2 of wordList) {
      if (word !== word2) {
        console.log(word + ' ' + word2);
      }
    }
  }
};
wordCombination();

// 1️⃣5️⃣ Sabrina quiere generar un nombre de usuario aleatorio combinando una consonante, una vocal y un número aleatorio entre 1 y 99. Debe hacerlo 5 veces y mostrar los resultados.
// Ejemplo salida: ['MA87', 'RO56', 'LE23', 'FI99', 'PU12']
const generateCode = () => {
  const vowels = 'AEIOU';
  const consonants = 'BCDFGHJKLMNÑPQRSTVWXYZ';

  const randomVowel = vowels.charAt(Math.floor(Math.random() * vowels.length));
  const randomConsonant = consonants.charAt(
    Math.floor(Math.random() * consonants.length)
  );
  const randomNumber = Math.floor(Math.random() * 99);

  return randomVowel + randomConsonant + randomNumber;
};

const getUsername = () => {
  const codeList = [];
  for (let i = 0; i < 5; i++) {
    const code = generateCode();
    codeList.push(code);
  }
  console.log(codeList);
};
getUsername();

// 1️⃣6️⃣ Abby tiene problemas con las tablas de multiplicar, quiere hacer 2 funciones que reciban un número y le impriman la tabla de multiplicar de ese número desde hasta el 10 una en orden descendente y otra en orden ascendente.

// Ejemplo entrada: 4

// Ejemplo salida función descendente:
// 4 x 10 = 40
// 4 x 9 = 36
// 4 x 8 = 32
// 4 x 7 = 28
// 4 x 6 = 24
// 4 x 5 = 20
// 4 x 4 = 16
// 4 x 3 = 12
// 4 x 2 = 8
// 4 x 1 = 4
// 4 x 0 = 0

// Ejemplo salida función ascendente:
// 4 x 0 = 0
// 4 x 1 = 4
// 4 x 2 = 8
// 4 x 3 = 12
// 4 x 4 = 16
// 4 x 5 = 20
// 4 x 6 = 24
// 4 x 7 = 28
// 4 x 8 = 32
// 4 x 9 = 36
// 4 x 10 = 40

const getMultiplication = number => {
  for (let i = 0; i <= 10; i++) {
    console.log(`${number}x${i}=${number * i}`);
  }
  for (let i = 0; i >= 10; i--) {
    console.log(`${number}x${i}=${number * i}`);
  }
};
getMultiplication(4);
