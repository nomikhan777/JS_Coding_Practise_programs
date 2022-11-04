btn.addEventListener('click', function (e) {

    alert("Hello world!");




    // var btn = e.target;
    // var btn_id = btn.id;
    // var btn_name = btn.textContext;
    // var btn_class = btn.className
})

btn.addEventListener('click', function (e) {

    alert("Hello world22!");

})


let x = function (event) {
    console.log(event.target)
    console.log(event.type, event.clientX, event.clientY)
    // alert("Hello World1!")
}

let y = function (e) {
    console.log(e)
    alert("Hello World2!")
}

btn.addEventListener('click', x)


btn.addEventListener('click', y)

let a = prompt("What is your favorite number?");


if (a == "2") {
    btn.removeEventListener('click', x)
}
