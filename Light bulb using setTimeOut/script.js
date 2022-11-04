let a = document.getElementById("r")
let b = document.getElementById("y")
let c = document.getElementById("g")
let e = document.getElementById("butt")
let d = document.getElementById("butto")
let st
e.onclick = () => {
    a.style.backgroundColor = "red"
    alert("Light's Starts")
    st = setInterval(function () {
        if (a.style.backgroundColor == "red") {
            b.style.backgroundColor = "yellow"
            c.style.backgroundColor = "white"
            a.style.backgroundColor = "white"
        }
        else if (b.style.backgroundColor == "yellow") {
            c.style.backgroundColor = "green"
            b.style.backgroundColor = "white"
            a.style.backgroundColor = "white"
        }
        else if (c.style.backgroundColor == "green") {
            a.style.backgroundColor = "red"
            c.style.backgroundColor = "white"
            b.style.backgroundColor = "white"
        };
    }, 3000)
}
d.onclick = () => {
    clearInterval(st)
    alert("Light Stoped")
}