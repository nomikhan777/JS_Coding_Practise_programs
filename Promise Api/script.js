let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1")
    }, 4000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("value 2")
        reject(new Error("This is a new error"))
    }, 2000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3")
    }, 3000)
})


p1.then((value) => {
    console.log(value)
})

p2.then((value) => {
    console.log(value)
})


p3.then((value) => {
    console.log(value)
})



//  PROMISE.ALL WILL WORK ONLY WHEN ALL PROMISES WILL RESOLVE 
//  OTHERWISE NOTHING IS GOING TO WORK



let promise_all1 = Promise.all([p1, p2, p3])
promise_all1.then((value) => {
    console.log(value)
})

//  Promise.allSettled
let promise_all2 = Promise.allSettled([p1, p2, p3])
promise_all2.then((value) => {
    console.log(value)
})



//  Promise.race

let promise_all3 = Promise.race([p1, p2, p3])
promise_all3.then((value) => {
    console.log(value)
})


// Promise.any



let promise_all4 = Promise.any([p1, p2, p3])
promise_all4.then((value) => {
    console.log(value)
})