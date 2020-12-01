//xndir 2
let arr = [];
for(let key in obj){
    arr.push([key, obj[key]])
}
// xndir 3
let home = {
}
let isEmpty = true;
for(let key in home) {
    isEmpty = false;
    break;
}
if(isEmpty) console.log("empty")
////////
let arr = [2010, 2008, 2007 ];
for(let j = 0; j < arr.length - 1; j++){
    let flag = true;
    for(let i = 0; i < arr.length - 1 - j; i++){
        if(arr[i] > arr[i + 1]){
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            // swap
            flag = false;
        }
    }
    if( flag ) break;
}
///////////
let arr = [
    {
      title: "The Road Ahead",
      author: "Bill Gates",
      date: 2009,
    },
    {
      title: "Walter Isaacson",
      author: "Steve Jobs",
      date: 2015,
    },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      date: 2007,
    },
  ];
  for(let j = 0; j < arr.length - 1; j++){
      let flag = true;
      for(let i = 0; i < arr.length - 1 - j; i++){
          if(arr[i].date > arr[i + 1].date){
              let temp = arr[i];
              arr[i] = arr[i + 1];
              arr[i + 1] = temp;
              // swap
              flag = false;
          }
      }
      if( flag ) break;
      ///////////////////////
      let someArr = [1, 5, 7, 4]
function evenCount(arr){
    let count = 0;
    for(let el of arr){    
       el % 2 === 0 && ++count;
    }
    return count
}
let result = evenCount(someArr)