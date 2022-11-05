myDisplayer = (some) => {
    document.getElementById('demo').innerHTML = some;
}



// myFirst = () => {
//     myDisplayer("Hello")
// }

// mySecond = () => {
//     myDisplayer("Good Bye")
// }

// myFirst();
// mySecond();


// myCalculator = (num1, num2) => {
//     let sum = num1 + num2;
//     return sum;
// }
// let result = myCalculator(5, 5);
// myDisplayer(result);


// myCalculator = (num1, num2) => {
//     let sum = num1 + num2;
//     myDisplayer(sum);

// }

// myCalculator(5, 25);

// Call  back function


// myCalculator = (num1, num2, myCallback) => {
//     let sum = num1 + num2;
//     myCallback(sum)
// }
// myCalculator(50, 5, myDisplayer)

// Remember not to use parenthesis , when you pass a function as an argument


// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Remove negative numbers
removeNeg = (numbers, callback) => {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);
        }
    }
    return myArray;
}

// Call removeNeg with a callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display positive numbers
document.getElementById("demo").innerHTML = posNumbers;

