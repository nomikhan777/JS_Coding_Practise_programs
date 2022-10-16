// array methods 
let num = [1, 2, 3, 34, 44]
console.log(num)

//  tostring method
let b = num.toString();
console.log(b);

// Another example 
let arr = [23, 45, 555, 44, 3, 4, 3]
let number = arr.toString();
console.log(number)

// join method 
let joinNum = [22, 34, 555, 444, 78]
let newNum = joinNum.join(" _");
console.log(newNum)
// Another example 
let joinNummber = [22, 34, 555, 444, 78]
let newNumber = joinNummber.join(" 1 ");
console.log(newNumber, typeof newNum)


// PoP Method 
//  IT changes the array by removing element from the last index

let myNum = [12, 34, 44, 4];
console.log(myNum);
myNum.pop();
console.log(myNum)

// Another example 

let popNum = [23, 44, 44, 44, 565];
let r = popNum.pop();  //  it will give the removed element
console.log(popNum, r)


// Push Method 
// Modify the original array and return new array length
// it adds new element in the end of array

let pushNum = [22, 23, 34, 45, 44];
pushNum.push(888);
console.log(pushNum);

// ANOTHER EXAMPLE
let d = [33, 3, 43];
let newPush = d.push(23);  //it will give added element
console.log(d, newPush);


// SHIFT METHOD
// removes first element of array and returns it
let f = [23, 45, 67, 88];
console.log(f);
f.shift();
console.log(f);


// UNSHIFT METHOD  adds new element at the start of the array AND RETURNS IT
let z = [23, 45, 66, 78];
console.log(z);
z.unshift(102);
console.log(z)
