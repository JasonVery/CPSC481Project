// functions to simulate auto log out if inactive.
// If this gets super annoying when ur doing ur coding just comment out the script on the html

let timer;
const logoutTimer = 60000;

function resetTimer () {
    clearTimeout(timer);
    timer = setTimeout(() => {
        console.log("Logging out user");
        window.location.reload();
    },logoutTimer);
}

document.addEventListener("click", function () {
    resetTimer();
})

document.addEventListener("mousemove", function () {
    resetTimer();
})

resetTimer();