// let arr = [1, 5, 7, 45]; // array
// let user = {
//   firstName: "Jack",
//   lastName: "Tomson",
//   age: 45,
// };
// let userCopy = user;
// userCopy.age = 20;
// console.log(user.age === 20); // true
// reference type
//////////////////////////////////////////////////
// const constants = {
//   waight: {
//     KILOGRAM: "kg",
//     GRAM: "gr",
//   },
//   speed: {
//     KL_HOUR: "km/h",
//   },
//   materials: {
//     WOOD: "wood",
//     KARBON: "karbon",
//     COMPOSIT: "composit",
//     PLASTIC: "plastic",
//   },
// };
// const Jack = {
//   firstName: "Jack",
//   lastName: "Simpson",
//   age: 35,
//   from: "Boston",
// };
// const Sam = {
//   firstName: "Sam",
//   lastName: "Smit",
//   age: 50,
//   from: "California",
// };
// const Tom = {
//   firstName: "Tom",
//   lastName: "Parker",
//   age: 29,
//   from: "Luiziana",
// };
// const materials = [
//   { name: "composit", m: { value: 100, unit: constants.waight.GRAM } },
//   { name: "wood", m: { value: 20, unit: constants.waight.GRAM } },
// ];
// let car = {
//   year: 1996,
//   mark: "Merc",
//   series: "s",
//   hp: {
//     unit: "n/kg",
//     value: 320,
//   },
//   m: {
//     unit: constants.waight.KILOGRAM,
//     value: 1500,
//     lastTyuning: 100,
//   },
//   door: {
//     count: 4,
//     material: {
//       front: constants.materials.KARBON,
//       back: constants.materials.PLASTIC,
//       other: materials,
//     },
//   },
//   speed: {
//     value: 300,
//     unit: constants.speed.KL_HOUR,
//   },
//   "this car owners": [
//     { owner: Jack, from: 2000, to: 2005 },
//     { owner: Sam, from: 2006, to: 2010 },
//     { owner: Tom, from: 2010, to: 2015 },
//   ],
// };
//// access
// let someKey = prompt(); // "mark"
// car[someKey]; // car.mark or car.series ...
// delete car.year
//// add
// car.x = 45
// car["x"] = 45
// for (let key in car) {
//   console.log(car[key]);
// }
/////////////////////// sum of numbers
// let obj = {
//   x: "4545",
//   y: 48,
//   z: 79,
//   r: "sdgzdfas",
//   t: 2,
// };
// let sum = 0;
// for (let key in obj) {
//   if (typeof obj[key] === "number") {
//     sum += obj[key];
//   }
// }
///////////////////// Object.assign