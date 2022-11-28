let a = [
    "Initializing hack tool...",
    "Connecting to facebook...",
    "connecting to server 1...",
    "Connecting failed. Retrying...",
    "connecting to server 2...",
    "Connected Successfully..",
    "userName nominomi...",
    "Trying brute force...",
    "200k passwords tried...",
    "Match is not found...",
    "Another 200k passwords tried...",
    "Match is found...",
    "Accessing the account...",
    "hack successful..."

]
const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(true) }, seconds * 1000)
    })
}
const showHack = async (message) => {
    await sleep(2)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
}

(async () => {
    for (let i = 0; i < a.length; i++) {
        await showHack(a[i])
    }
})();
