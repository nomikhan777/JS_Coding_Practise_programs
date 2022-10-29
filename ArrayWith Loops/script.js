let num = [3, 34, 32, 44, 543]
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}


//  For Each loop
num.forEach((element) => {
    console.log(element * element)
})


// array.from 

let name = "harry";
let arr = Array.from(name);
console.log(arr);


// for of loop using array;
for (let i of num) {
    console.log(i)
}

// for in loop

for (let item in num) {
    console.log(item)
}