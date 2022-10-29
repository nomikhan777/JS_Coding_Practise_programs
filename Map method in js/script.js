
//        MAP METHOD()
//  map()method is used to create new array by perfoming some operation on each array element

// Example 1

let arr = [43, 45, 67, 78, 76]
let a = arr.map((value) => {
    console.log(value)
    return value + 1
})

console.log(a)

let arr1 = [43, 45, 67, 78, 76]
let b = arr.map((value, index) => {
    console.log(value, index)
    return value + 5
})

console.log(b)

let arr2 = [43, 45, 67, 78, 76]
let c = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value + 10
})

console.log(c)

//  the major differnce between for each and map method is that we use for each loop
//  when we have to do some operation on the existing array elements


const users = [

    { name: "IBTISAM", city: "faisalabad", age: 20, email: "ibtisam843@gmail.com", status: "alive", id: 213 },
    { name: "rizwan", city: "multan", age: 25, email: "rizwan22@gmail.com", status: "alive", id: 33 },
    { name: "nawab", city: "burewala", age: 5, email: "ali2@gmail.com", status: " not alive", id: 112 },
    { name: "sabtain", city: "multan", age: 23, email: "ali2@gmail.com", status: "alive", id: 11 },
    { name: "subhan", city: "Islamabad", age: 44, email: "ali2@gmail.com", status: "alive", id: 11 },
    { name: "ahtisham", city: "faisalabad", age: 35, email: "ali2@gmail.com", status: " notalive", id: 14 },
    { name: "talha", city: "okara", age: 25, email: "ali2@gmail.com", status: "alive", id: 113 },
    { name: "shahziab", city: "toba tek singh", age: 15, email: "ali2@gmail.com", status: "alive", id: 11 },
    { name: "shoaib", city: "hasilpur", age: 65, email: "ali2@gmail.com", status: "alive", id: 1431 },
]
let user = users.map((value, index) => {
    console.log(value, index)
    return value
})