SWITCH /////////////////////////
// let munthNumber = +prompt("grir tiv");
// let month;
// // if (munthNumber == 1) {
// //   month = "hunvar";
// // } else if (munthNumber == 2) {
// //   month = "petrvar";
// // } else if (munthNumber == 3) {
// //   month = "mart";
// // } else if (munthNumber == 4) {
// //   month = "april";
// // } else if (munthNumber == 5) {
// //   month = "mayis";
// // } else if (munthNumber == 6) {
// //   month = "hunis";
// // } else if (munthNumber == 7) {
// //   month = "hulis";
// // } else if (munthNumber == 8) {
// //   month = "ogostos";
// // } else if (munthNumber == 9) {
// //   month = "september";
// // } else if (munthNumber == 10) {
// //   month = "hoktember";
// // } else if (munthNumber == 11) {
// //   month = "noyember";
// // } else if (munthNumber == 12) {
// //   month = "dektember";
// // } else if (munthNumber == 13) {
// //   month = "dektember";
// // } else { /*  */}
// switch (munthNumber) {
//   case 1:
//     month = "hunvar";
//     break;
//   case 2:
//     month = "petrvar";
//     break;
//   case 3:
//     month = "mart";
//     break;
//   case 4:
//     month = "april";
//     break;
//   case 5:
//     month = "mayis";
//     break;
//   case 6:
//     month = "hunis";
//     break;
//   case 7:
//     month = "hulis";
//     break;
//   case 8:
//     month = "ogostos";
//     break;
//   case 9:
//     month = "september";
//     break;
//   case 10:
//     month = "hoktember";
//     break;
//   case 11:
//     month = "noyember";
//     break;
//   case 12:
//     month = "dektember";
//     break;
//   case 13:
//     month = "saff";
//     break;
//   default:
//     month = "Error";
// }
// console.log(month);
// // //////////////////////////////////////
// xndir
const firstNum = +prompt("write first number");
const operator = prompt("write operator");
const secondNum = +prompt("write second number");
let result;
switch (operator) {
  case "/":
    result = firstNum / secondNum;
    break;
  case "*":
    result = firstNum * secondNum;
    break;
  case "+":
    result = firstNum + secondNum;
    break;
  case "-":
    result = firstNum - secondNum;
    break;
  default:
    result = "error";
}
// console.log(firstNum + " " + operator + " " + secondNum + " = " + result); // 4 * 5 = 20
const res = firstNum + " " + operator + " " + secondNum + " = " + "<em class='ll'><b>" + result + "</b></em>"; // 4 * 5 = 20
document.write("<p>" + res + "</p>")
/////////////////////////////////////////////////////////////////
// orinak
// let num = +prompt("write first number");
// if (num === 5 || num === 7 || num === 19) {
//   /* code */
// }
// switch (num) {
//   case 5:
//   case 7:
//   case 19: /* code */;
// }