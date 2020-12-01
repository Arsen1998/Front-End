// const arr = [10, 15, 4, 78];
///////////////////// 6 ////////////////////////
// // [4, 21] mijakayqin patkanox
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] >= 4 && arr[i] <= 21) {
//     ++count;
//   }
// }
// console.log(count);
////////////////////////////////////////////////
// let arr = [1, 10, 30, 2, 20, 3, 25, 40, 9];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);
///////////////////////
// let arr = [1, 10, 30, 2, 20, 3, 25, 10, 9, 45];
// let max = arr[0];
// let maxIndex = 0;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] >= max) {
//     max = arr[i];
//     maxIndex = i;
//   }
// }
// console.log(maxIndex);
// for (const el of arr) {
//   if (el >= max) {
//     max = el;
//   }
// }
/////////////////
// let sum = 0;
// for (const el of arr) {
//   sum += el;
// }
//////////////////////
//////////////////// indexOf //////////////////
// const firstIndexOf10 = arr.indexOf(10, prevIndex + 1);
// const secondIndexOf10 = arr.indexOf(10, firstIndexOf10 + 1);
// const thirdIndexOf10 = arr.indexOf(10, secondIndexOf10 + 1);
// console.log(firstIndexOf10, secondIndexOf10, thirdIndexOf10);
/// xndir
let arr = [1, 10, 30, 2, 20, 3, 25, 10, 9, 45];
// let prevIndex = -1;
// let foundIndexes = [];
// while (true) {
//   prevIndex = arr.indexOf(10, prevIndex + 1);
//   if (prevIndex === -1) break;
//   foundIndexes.push(prevIndex);
// }
// tarberak 2
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 10) {
//     foundIndexes.push(i);
//   }
// }
// console.log(foundIndexes);
//////////////////////////////********************************** */
// fizz bazz
// 1-100
// tiv % 3 -> fizz
// tiv % 5 -> bazz
// tiv % 3 & 5 -> fizzBazz
//////////////////////////////********************************** */
// for (let i = 1; i <= 100; i++) {
  //   if (i % 15 === 0) {
  //     console.log("fizzbazz");
  //   } else if (i % 3 === 0) {
  //     console.log("fizz");
  //   } else if (i % 5 === 0) {
  //     console.log("bazz");
  //   } else {
  //     console.log(i);
  //   }
  //*****
  //***** tarberak 2
  //   let result = "";
  //   if (i % 3 === 0) {
  //     result += "fizz";
  //   }
  //   if (i % 5 === 0) {
  //     result += "bazz";
  //   }
  //   console.log(result || i);
// }
///////////////////////////////////////////////////////////
// arr.splice(4, 0, 10)
// let arr1 = arr
// let arr2 = arr.slice()