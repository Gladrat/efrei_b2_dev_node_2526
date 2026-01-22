// new Promise((resolve, reject) => {
//   // Calcul financier très long numéro 1
//   // ...
//   resolve(3.14);
// })
//   .then((v) => {
//     console.log("Calcul est terminé", v);
//     // Deuxième calcul financier très long (à partir du numéro 1)
//     // ...
//     return 99;
//   })
//   .then((v) => v * 2)
//   .then((v) => console.log(v))
//   .catch((err) => console.log(err));

async function calculFinancier_1() {
  return 3.14;
}

const r = await calculFinancier_1();
console.log(r);

const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

const text = await response.text();
console.log(text);

console.log("COUCOU");
