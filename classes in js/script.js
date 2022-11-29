class RailwayForm {
    submit() {
        alert("Form is submitted")
    }
    cancel() {
        alert("Form is cancelled")
    }
}

let harry = new RailwayForm()
let numan = new RailwayForm()
harry.submit()
numan.submit()
numan.cancel()