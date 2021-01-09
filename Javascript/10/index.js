const getNumbers = (arr) => {
    const sortedArr = arr.sort((a, b) => a - b)
    const secondSmall = sortedArr[1]
    const secondBig = sortedArr[arr.length - 2]
    // return [secondSmall, secondBig]
    return { secondSmall, secondBig }
}
const arrNums = [4, 3, 8, 2, 15, 9, 7, 6]
const result = getNumbers(arrNums)
// result.secondSmall === 3


let getMax = (arr) => {
}
let array = [4, 3, 8, 15, 9, 7, 6]
let res = getMax(array)

let getMin = (arr) => {
    let min = arr[0]; // 2
    let min2 = arr[0]; // 3
    for(let el of arr){
        if(el > min2 && el < min){
            min = el 
        } else if(el < min){
            min2 = min
            min = el;
        }
    }
    let max = arr[0]; // 15
    let max2 = arr[0]; // 8
    for(let el of arr){
        if(el > max2 && el < max){
            max2 = el 
        } else if(el > max){
            max2 = max
            max = el
        }
    }
    return [max2, min2]
}
let array = [5, 8, 4, 15, 9, 3, 7, 6]
let res = getMin(array)

function boo(){
    console.log("        boo work");
}
function goo(){
    console.log("    goo work");
    boo()
    console.log("    goo end");
}
function foo(){
    console.log("foo work");
    goo()
    console.log("foo end");
}
foo()


function foo(){
    console.log("foo work");
    foo()
    console.log("foo end");
}
foo()
// data structurs
//
// stack
// => push
// <= pop
// V8 Engine => js
// stack => 1mb
// stack overflow Error



// factorial
// 1 * 2 * 3 * 4 * 5 * ... * n
// n!
// n!
// n * (n - 1)!
function factorial(n){
    if(n <= 1) return 1;
    return n * factorial(n - 1)
}
let result = factorial(Math.abs(-5))


// fibonachi
// 1 1 2 3 5 8 13 21 34 ... 
// 1 2 3 4 5 6 7  8  9  ... n
// 1.618
function fib(n){
    if(n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
let result = fib(6)
// fib(3) = fib(2) + fib(1)
// fib(5)
//     fib(4)
//         fib(3)
//            fib(2)
//                1
//            fib(1)
//                1 
//         fib(2)
//             1
//     fib(3)
//        fib(2)
//            1
//        fib(1)
//            1 
// fib(4)
//     fib(3)
//        fib(2)
//            1
//        fib(1)
//            1 
//     fib(2)
//         1
//////////////////////////////////////////////
// fib(5)
//     fib(4)
//         fib(3)
//            fib(2)
//                1
//            fib(1)
//                1 
//         fib(2)
//             1
//     fib(3)
//        fib(2)
//            1
//        fib(1)
//            1 
// fib(4)
//     fib(3)
//        fib(2)
//            1
//        fib(1)
//            1 
//     fib(2)
//         1


// fibonachi
// 1 1 2 3 5 8 13 21 34 ...
// 1 2 3 4 5 6 7  8  9  ... n
// 1.618
function fib(n){
    if(n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}
let result = fib(50)
console.log(result)
// fib(3) = fib(2) + fib(1)

// fibonachi
// 1 1 2 3 5 8 13 21 34 ...
// 1 2 3 4 5 6 7  8  9  ... n
let cache = [1, 1];
function fib(n){
    if( cache[n - 1] ) return cache[n - 1];
    let nextFib = fib(n - 1) + fib(n - 2);
    cache.push(nextFib)
    return nextFib
}
let result = fib(1000)
console.log(result)

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let result = arr.reduce((acc, val) => acc * val, 0)


// RegExp => Regulyar Expression
let pattern = new RegExp("a", "g");
let str = "some text";
// aveli shat ogtagorcvox methodneric
let isMatch = pattern.test(str);
// qich ogtagorcvox
let matchArray = pattern.exec(str);
/**************************************** */
let pattern1 = /a/gi;
let str = "safjhsAdszdf asgfhsea";
console.log(str.match(pattern1));
/**************************************** */
// s => space (" ", \n, \t ...)
// S => space ^(" ", \n, \t ...) բացի
let pattern1 = /\s/g;
let str = "safjh\nsAdszdf asgfhs\tea";
console.log(str.match(pattern1));
/****************************************** */
// w =>  (a-z, A-Z, 0-9)
// W =>  ^(a-z, A-Z, 0-9) բացի
let pattern1 = /\w/g;
let str = "safjh\ns#Ad%s88*(989  898zdf ВАнекйййs\tea";
console.log(str.match(pattern1));
/************************************ */
// d =>  (0-9)
// D =>  ^(0-9) բացի
let pattern1 = /\d/g;
let str = "safjh\ns#Ad%s88*(989  898zdf ВАнекйййs\tea";
console.log(str.match(pattern1));
/***************************************** */
const patternPhone = /\d{3}-\d{2}-\d{2}-\d{2}/;
// short variant => /\d{3}(-\d{2}){3}/
const phone = "094-47-47-47";
console.log(patternPhone.test(phone)); // true or false
/***************************************** */
// search and match only from start position ^(pattern)
// search and match only from end position (pattern)$
// + one and more matches [1, ...]
// * nothing or one and more matches [0, ...]