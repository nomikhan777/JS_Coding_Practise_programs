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