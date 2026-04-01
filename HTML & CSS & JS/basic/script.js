// let arr = [1, 2, 3, 4, 5];

// // for (let i = 0; i < arr.length; i++){
// //     console.log(arr[i]);
// // }

// let arr2 = ["apple", "orange", "mango", "banana"];

// // for (let item of arr2){
// //     console.log(item);
// // }

// console.log(arr2.includes("apple"));
// console.log(arr.includes(3));

// let arr3 = ["Hello", "World", "from", "JavaScript"];
// console.log(arr3.join(" ")); // Hello World

//          Ever Or Odd Number With Function
// function evenOrOdd(num){
//     if (num%2 === 0){
//         document.writeln(num +" is Even Number");
//     }
//     else{
//         document.writeln(num +" in Odd Number");
//     }
// }

// evenOrOdd(6); // Calling Function

// let sum = function (a , b){
//     document.writeln("SUM");
//     return a + b;

// }
// let result = sum(34,1);
// document.writeln(result);

// let sub = () => {
//   document.writeln("OK");
// };
// sub();


let mult = (num) => {
    if (num%2===0){
        document.writeln(`${num} This Number Is Even.`);
    }
    else{
        document.writeln(`${num} This Number Is Odd.`)
    }
}

document.writeln(mult(4));



// mult(4);
