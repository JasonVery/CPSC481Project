document.addEventListener("DOMContentLoaded", function () {

    const helpBtn = document.getElementById("helpBtn");
    const loginBTn = document.getElementById("loginBtn");
    const backBtn = document.getElementById("backBtn");
    const homeBtn = document.getElementById("homeBtn");
 
    helpBtn.addEventListener("click", function () {
        console.log("Help BTN has been clicked");


    });

    loginBTn.addEventListener("click", function () {
        console.log("Login BTN has been clicked");

    });

    if(backBtn){
        backBtn.addEventListener("click", function () {
            console.log("Back BTN has been clicked");
        });
    }

    if(homeBtn){
        homeBtn.addEventListener("click", function () {
            console.log("Home BTN has been clicked");
        });
    }

});