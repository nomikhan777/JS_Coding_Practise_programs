let p1 = new Promise((resolve, reject) => {
    console.log("promsie is pending")
    setTimeout(() => {
        // console.log("I am a promsie  I am resolved")
        resolve(true)
        // reject(new Error("I am a new error"))
    }, 5000)
})


let p2 = new Promise((resolve, reject) => {
    console.log("promsie is pending")
    setTimeout(() => {
        // console.log("I am a promsie and I am rejected")
        // resolve(true)
        reject(new Error("I am a new error"))
    }, 5000)
})

// console.log(p1, p2)

p1.then((value) => {
    console.log(value)
})

p2.catch((error) => {
    console.log("some error occurred in p2")
})