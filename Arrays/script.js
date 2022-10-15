let marks_class_12 = [81, 22, 23, 24, null, false, "not present", 23, 44]
console.log(marks_class_12)
marks_class_12[7] = 99
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])
console.log(marks_class_12[7])
console.log("the lenth of marks 12 is ", marks_class_12.length)
console.log(typeof marks_class_12)

for (let i = 0; i < marks_class_12.length; i++) {
    console.log(marks_class_12[i])

}

marks_class_12.forEach(element => {
    console.log(element)
})

for (let key in marks_class_12) {
    console.log(marks_class_12[key])
}


for (let element of marks_class_12) {
    console.log(element)
}