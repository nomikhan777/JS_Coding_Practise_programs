alert("hello world")


let a = setTimeout(function () {
    alert("im inside of set timeout")
}, 4000)

clearTimeout(a)

console.log(a)

const sum = (a, b) => {
    console.log("this is runnning: ", (a + b))
    a + b
}
setTimeout(sum, 2000, 1, 2)
setInterval(sum, 2000, 1, 2)




// set interval using arguments 

let i = 0;
let fact = (n) => {
    let temp
    i++;
    temp = n * i;
    document.write(`Set Interval product : ${temp} <br>`)
}
setInterval(fact, 2000, 5);