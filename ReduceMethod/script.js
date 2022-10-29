//  Array Reduce method
// Reduces an array to single value 
let arr = [2, 4, 6, 8]
let newArr = arr.reduce((value1, value2) => {
    return value1 + value2
})
console.log(newArr)