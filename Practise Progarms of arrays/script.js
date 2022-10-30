//  
// Progarm 01

let arr = [23, 24, 25, 26];
let a = prompt("enter a number");
a = Number.parseInt(a);
arr.push(a);
console.log(arr);

// Progarm 02

let arr1 = [23, 24, 25, 26];
let a1;
do {
    a1 = prompt("enter a number");
    a1 = Number.parseInt(a);
    arr.push(a1);
} while (a1 != 0);
console.log(arr1);


// Program 03

let a2 = [23, 40, 50, 80, 550];
let n1 = a2.filter((x) => {
    return x % 10 == 0
})
console.log(n1)

// program 04

let a3 = [23, 40, 50, 80, 550];
let n2 = a3.map((x) => {
    return x * x
})
console.log(n2)


// program 05

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let n3 = arr2.reduce((x1, x2) => {
    return x1 * x2
})
console.log(n3)