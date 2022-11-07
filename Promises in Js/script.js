let promise = new Promise(function (resolve, reject) {
    alert("I am an alert in promise")
    resolve(56)
})


console.log("Hello");
setTimeout(function () {
    console.log("hello in 2 seconds")
}, 2000)

console.log("My name is " + "john");
console.log(promise)



// why to use Promise 


// suppose you want to fetch google.com homepage ==> console.log("google.com homepage done")

// Fetch data from the data api
// fetch pictures from the server
// Rest of the script