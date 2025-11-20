
// Just basic routing for the eyecatcher screen'
// When user clicks start it goes to main page
// If user clicks help, we will probably blur background and inject popup
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".fullScreenBtn").addEventListener("click", function() {
        console.log("Going to home Page");
        window.location.href = 'mainPage.html';

    });

    document.querySelector(".helpBtn").addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("Help BTN was pushed");
        // Load popup here 
    })
});
