
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function load() {
    await sleep(100)
    window.scrollTo(0, 0)
    await sleep(500)
    $('.holder').toggleClass('in');
    await sleep(3000)
    document.body.style = ""
}

window.addEventListener("load", load);