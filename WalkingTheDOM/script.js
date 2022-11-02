// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.childNodes)

// let arr = Array.from(document.body.childNodes)

// console.log(arr)

// console.log(document.body.firstChild)

// a = document.body.firstChild
// console.log(a.parentNode)
// console.log(a.parentElement)
// console.log(a.firstChild.nextSibling)



const changeBodyRed = () => {
    document.body.firstElementChild.style.background = 'red'
}

let b = document.body
console.log("first child of b is :", b.firstChild)
console.log("first  Elemnt child of b is :", b.firstElementChild)