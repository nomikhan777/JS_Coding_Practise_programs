const loadSCript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            resolve("script has been loaded sir ")
        }
        script.onerror = () => { reject(0) }
    })
}

let p1 = loadSCript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")

p1.then((value) => {
    console.log(value)
    return loadSCript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
}).then((value) => {
    console.log("second script is ready")

}).catch((error) => {
    console.log("we are sorry but having a porblems having loading the  script")
})