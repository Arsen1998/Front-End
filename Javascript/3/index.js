// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log(1,2,3,4,5,6,7,8 ...100)
/*************** while loop ******************/
// console.log("start");
// let i = 0;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// console.log("end");
/*************** for loop ******************/
// 1 սկզբնարժեքվորում // 1 անգամ
// 2 պայման // մարմինը կատարելուց առաջ ամեն անգամ
// 3 քայլ // մարմինը կատարելուց հետո ամեն անգամ
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
/*************** for loop - break ******************/
// let i = 10;
// for (;;) {
//   if (i < 1) break;
//   console.log(i);
//   i--;
// }
/*************** for loop - continue  ******************/
// for (let i = 0; i <= 10; i++) {
//   if (i === 7 || i === 6 || i === 2) continue;
//   console.log(i);
// }
// for (let i = 0; i <= 10; i++) {
//     // if (i === 7) continue;
//     // let x = i === 7 ? continue : "";
//     console.log(i);
// }
/*************** for loop - sum ******************/
// let sum = 0;
// sum += 1;
// sum += 2;
// sum += 3;
// sum += 4;
// sum += 5;
// ...
// sum += 10;
// for (let i = 1; i <= 100000000000; i++) {
//   sum += i;
// }
// կամ
// sum = 100000000000 * (100000000000 + 1) / 2
// console.log(sum);
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ,,, 50
// 50, 49, ․․․․․․․․․․․․․․․․․․․․․․․․․․․․ 2 ,1
// 51, 51, 51 ․․․․․․․․․․․․․․․․․․․․․․․․․51, 51
// 50 x 51 / 2
// n * (n + 1) / 2
/*************** for loop - factorial ******************/
// let factorial = 1;
// for (let i = 2; i <= 4; i++) {
//   factorial *= i;
// }
// console.log(factorial);