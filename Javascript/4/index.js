// let x = 45.4;
// console.log(x | 0);
////////////////////////////////
// let num = prompt();
// const numCount = num.length;
//////////////////////////////////////
// let num = 45678932;
// let count = 0;
// while (num > 0) {
//   count++;
//   num /= 10;
//   num |= 0;
// }
// console.log(count);
// let num = 456789156.412345;
// let sum = 0;
// while (num > 0) {
//   sum += num % 10;
//   num /= 10;
//   num |= 0;
// }
// console.log(sum);
////////////////////////////////////
// 1     *
// 2   * * *
// 3 * * * * *
// 2 * rowCount - 2 (i - 1) * 2
// *
// * * *
// * * * * *
// const rowCount = 3;
// for (let i = 1; i <= rowCount; i++) { // մեծ ցիկլ տողերը փոելու համար
//   for (let j = 1; j <= 2 * (rowCount - i); j++) { // ցիկլ տողի դիմացի բացատների համար
//     document.write(" ");
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) { // ցիկլ աստղանիշների համար
//     document.write("*");
//   }
//   document.write("<br />");
// }
//////////////////////////////////////////////
// array
// const celsHour1 = 24;
// const celsHour2 = 25;
// const celsHour3 = 22;
// // ...
// const celsHour24 = 15;
// let BMWYears = [2001, 2004, 2006, 2008, 2010, [10]];
// // let b = BMWYears[2];
// // console.log(BMWYears[3]);
// // BMWYears[1] = 14;
// // console.log(BMWYears);
// // BMWYears.push(2012);
// // BMWYears.push(2015);
// // BMWYears.pop();
// BMWYears[BMWYears.length - 1].push(1111, 2222);
// BMWYears.push([]);
// BMWYears[BMWYears.length - 1].push(3333);
// console.log(BMWYears);
/////////////////////////////////////////////
// console.log(BMWYears[0] + "-------");
// console.log(BMWYears[1] + "-------");
// console.log(BMWYears[2] + "-------");
// console.log(BMWYears[3] + "-------");
// let BMWYears = ["2001", "2004", 2006, "2008", false];
// for (let i = 0; i < BMWYears.length; i++) {
//   console.log(BMWYears[i] + "-------");
// }
// let newLength = BMWYears.push(2018);
// let removedElements = BMWYears.splice(2, 1); // delete one
// let removedElements1 = BMWYears.splice(2, 1, 2011); // delete one and isert one
// console.log(removedElements1);
// console.log(removedElements);
// console.log(BMWYears);