let n = localStorage.getItem("note")
alert("Your note is " + n)

let a = prompt("enter your note")
if (a) {

    localStorage.setItem("note", a)
}



let c = confirm("do you want to delete your note?")
if (c) {
    localStorage.removeItem("note")
}
