
// When a user hits the search button, we will just hide the components on the page and replace with new ones
document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector(".searchWrapper");
    const suggestedBookContentWrapper = document.querySelector(".bookGenresCont");
    const fakeSearchResults = document.querySelector(".searchResults");
    const searchBar = document.querySelector(".searchBar");
    const searchBarAfter = document.querySelector(".searchBarAfter");
    const keyboard = document.querySelector(".keyboardImg");
    const backBtn = document.getElementById("backButton");
    const mainCont = document.querySelector(".mainCont");

    searchButton.addEventListener("click", function () {
        suggestedBookContentWrapper.style.display = "none";
        fakeSearchResults.style.display = "block";
        keyboard.style.display = "block";
        backBtn.style.display = "flex";
        searchBar.style.display = "none";
        searchBarAfter.style.display = "block";

    });

    backBtn.addEventListener("click", function () {
        fakeSearchResults.style.display = "none";
        suggestedBookContentWrapper.style.display = "block";
        keyboard.style.display = "none";
        backBtn.style.display = "none";
        searchBar.style.display = "block";
        searchBarAfter.style.display = "none";

    });

    if(keyboard){
        keyboard.addEventListener("click", function () {
            window.location.href = "resultsPage.html"
        });
    }

    fakeSearchResults.addEventListener("click", function () {
        if(keyboard.style.display === "block"){
            keyboard.style.display = "none";
        }
    });

});