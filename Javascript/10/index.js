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
