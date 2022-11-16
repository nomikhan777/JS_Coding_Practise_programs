let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
    return v.json()
}).then((contests) => {
    console.log(contests)
    ihtml = ""
    for (item in contests) {
        console.log(contests[item])
        ihtml += `
        <div id="cardContainer" class="card mx-2 my-2" style="width: 20rem;">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-tnKCUU4EGXUpgr3S7hbYDn6O19ne9600CA&usqp=CAU" class="card-img-top" alt="...">
                    <div class="card-body ">
                        <h5 class="card-title">${contests[item].name}</h5>
                        <p class="card-text">Status is ${contests[item].status} and site is "${contests[item].site}</p>
                        <p class="card-text">in 24 hours:  ${contests[item].in_24_hours}</p>
                        <p>starts at: ${contests[item].start_time}</p>
                        <p>Ends  at: ${contests[item].end_time}</p>
                        <a href="${contests[item].url}" class="btn btn-primary my-2">Visit Contest</a>
                    </div>
                </div>
        
        `
    }
    cardContainer.innerHTML = ihtml
})


