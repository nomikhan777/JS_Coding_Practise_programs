//  Delete Method
//  Delete is an operator 
//  Delete is an operator  does not effect the length of array it just delete the value or element in the array

let num = [1, 2, 3, 44, 5, 5, 6];
console.log(num.length);
delete num[0];
console.log(num);

delete num[5];
console.log(num);


// Concat Method
//  lets suppose we have three arrays
//  Concat Method returns a new array ,It does not change the existing array

let num1 = [12, 344, 56]
let num2 = [1, 2, 3, 5]
let num3 = [23, 24, 25]

let newArray = num1.concat(num2, num3);
console.log(newArray);


let class_names = ["Numan", "Ahtisham", "Talha"];
let class_Numers = [43, 44, 45, 46];
let class_roll_number = [6073, 6053, 6072]

let Details = class_names.concat(class_Numers, class_roll_number)
console.log(Details);

// Sort () Method
//  Sort() Method  is used to sort the array alphabatically
//  it modifies the original array
let _sort = [333, 56, 67, 78, 87, 1];
_sort.sort();
console.log(_sort);


// we can sort according to asending and desending order but
//  we have to provide the function as an argument to sort method

//  Asending Order
let compare = (a, b) => {
    return a - b
}
let un_sort = [56, 67, 78, 87, 1];
un_sort.sort(compare);
console.log(un_sort);

//  Desending order
let compare1 = (a, b) => {
    return b - a
}
let un_sort1 = [56, 67, 78, 87, 1];
un_sort.sort(compare1);
console.log(un_sort1);



// Reverse Method
// reverse the elements in the source array

let arr = [23, 24, 25, 26];
arr.reverse();
console.log(arr);

//  SPLICE METHOD
//  Splice method adds new elements into the array;
// it modifies the source array
//  There are four arguments in the splice method 
let arr1 = [23, 34, 55, 5, 45, 56, 67, 778];
arr1.splice(2, 3, 243, 254, 263);
console.log(arr1);


let arr2 = [23, 34, 55, 5, 45, 56, 67, 778];
arr2.splice(2, 0, 243, 254, 263);
console.log(arr2);



// Slice method
//  slices out a piece a from an array 
// it creates a new array

let arr3 = [1, 2, 3, 4, 5];
let arr4 = arr3.slice(2);
console.log(arr4);


let arr5 = [1, 2, 3, 4, 5];
let arr6 = arr3.slice(1, 3);
//  last index does not include in the new array
console.log(arr6);

