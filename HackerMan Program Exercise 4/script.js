//document.getElementById("first").innerHTML= "installing hacking tools....."

//document.getElementById("second").innerHTML= "hacking ashish17...."


//document.getElementById("thr").innerHTML= "found username ashish17...."

document.getElementById("username").click()
const user = async () => {
    return new Promise((res, rej) => {
        document.getElementById("ka").innerHTML = "kali$"
        let input = document.getElementById("username")
        let inf = document.getElementById("inf")
        inf.innerHTML = "enter user name and hit enter"

        input.onkeypress = (event) => {
            if (event.keyCode == 13 || event.which == 13) {
                if (input.value != "") {
                    res(input.value)

                } else {
                    let err = input.insertAfter = "h4"
                    err.innerHTML = "error"
                }
            }
        }
    })
}

async function install(elm, text) {
    let first = document.getElementById(elm)
    first.innerHTML = text
    let i = 0
    while (i !== 100) {
        let ran = Math.floor(Math.random() * 5)

        i = i + ran
        if (i > 100) {
            i = 100
        }
        await new Promise(r => setTimeout(r, 100));
        first.innerHTML = `${text} ${i}%`
        //console.log(i)

    }
}
const hacker = async () => {
    let first = document.getElementById("first")
    let p = 0;
    await new Promise(r => setTimeout(r, 1000));
    await install("first", "initializing hack program.....")
    let usr = await user()
    console.log(usr)

    await install("second", `founding username ${usr}....`)
    await install("thr", `hacking ${usr}....`)
    document.getElementById("fourth").innerHTML = `${usr} hacked!`
    console.log("done")
    //first.innerHTML= "done"
}

hacker()

