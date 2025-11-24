
// Main js file. Handles things like navigation and swithching pages
// to make routing easier, everyhting is just in one html doc and just setting or removing
// display to show different elements
document.addEventListener("DOMContentLoaded", function () {

    // Specific one off vars
    const eyeCatcherHelpBtn = document.querySelector(".eyeCatcherHelpBtn");
    const eyeCatcherStartBtn = document.querySelector(".eyeCatcherStartBtn");
    const searchBar = document.querySelector(".searchBarCont");
    const keyboard = document.getElementById("keyboardContainer");
    const demoBook1 = document.getElementById("demoBook1");
    const filterBtn = document.querySelector(".filterButtonWrapper");
    const showMore = document.getElementById("showMoreText");
    const location = document.querySelector(".shelfLocation");
    const placeOH = document.querySelector(".placeOnHoldBtnCont");
    const popupCloseBtns = document.querySelectorAll(".popupClose")

    let currentPage = "eye";


    // Full pages -> These use Id attribute rather than class
    const eyeCatcherPage = document.getElementById("eyeCatcherPage");
    const mainPage = document.getElementById("mainPage");
    const searchPage = document.getElementById("searchPage");
    const resultsPage = document.getElementById("resultsPage");
    const detailsPage = document.getElementById("bookDetailsPage");



    // Navigation buttons
    const backBtn = document.getElementById("backBtn");
    const homeBtn = document.getElementById("homeBtn");
    const helpBtn = document.getElementById("helpBtn");
    const loginBtn = document.getElementById("loginBtn");

    // Function to reset the UI between page changes
    function resetPage() {
        const pages = document.querySelectorAll(".page")
        pages.forEach(function (page) {
            page.classList.remove("active");
        });;

        keyboard.style.display = "none";

        backBtn.classList.add("hidden");
        homeBtn.classList.add("hidden");
    }


    //  Function to load page elements
    function loadEyeCatcher() {
        resetPage();
        eyeCatcherPage.classList.add("active");
        currentPage = "eye";
    }

    function loadMainPage() {
        resetPage();
        mainPage.classList.add("active");
        currentPage = "main";
    }

    function loadSearchPage() {
        resetPage();
        searchPage.classList.add("active");
        backBtn.classList.remove("hidden");
        keyboard.style.display = "block";
        currentPage = "search";
    }

    function loadResultsPage() {
        resetPage();
        resultsPage.classList.add("active");
        backBtn.classList.remove("hidden");
        homeBtn.classList.remove("hidden");
        currentPage = "results"

    }

    function loadDetailsPage() {
        resetPage();
        detailsPage.classList.add("active");
        backBtn.classList.remove("hidden");
        homeBtn.classList.remove("hidden");
        currentPage = "details";

    }

    // Universal functions to open and close popups
    function openPopup(popupID) {
        const popup = document.getElementById(popupID);
        if (!popup) {
            return;
        }

        popup.classList.remove("hidden");

        let pages = document.querySelectorAll(".page");
        pages.forEach(page => page.classList.add("blurred"));
        keyboard.classList.add("blurred");
    }

    function closePopup(popupID) {
        const popup = document.getElementById(popupID);
        if (!popup) {
            return
        }

        popup.classList.add("hidden");

        let pages = document.querySelectorAll(".page");
        pages.forEach(page => page.classList.remove("blurred"));
        keyboard.classList.remove("blurred");
    }



    // Functions for eye catcher page
    if (eyeCatcherHelpBtn) {
        eyeCatcherHelpBtn.addEventListener("click", function () {
            console.log("Eye Catcher Help Btn has been Pressed");
            openPopup("requestAssistancePopup");
        });
    }

    if (eyeCatcherStartBtn) {
        eyeCatcherStartBtn.addEventListener("click", function () {
            console.log("Eye Catcher Start Btn has been Pressed");
            loadMainPage();
        });
    }


    // Button Clicks 
    if (searchBar) {
        searchBar.addEventListener("click", function () {
            console.log("Search Bar has been Pressed");
            loadSearchPage();
        });
    }

    if (homeBtn) {
        homeBtn.addEventListener("click", function () {
            console.log("Home Btn Has Been Pressed");
            loadMainPage();
        });
    }

    if (helpBtn) {
        helpBtn.addEventListener("click", function () {
            console.log("Help Button Has been Pressed here");
            openPopup("requestAssistancePopup");
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", function () {
            console.log("Login Button Has been Pressed")

        });
    }

    if (filterBtn) {
        filterBtn.addEventListener("click", function () {
            console.log("Filter Button Has Been Pressed");
        });
    }

    if (showMore) {
        showMore.addEventListener("click", function () {
            console.log("Show More Has been pressed");
        });
    }

    if (location) {
        location.addEventListener("click", function () {
            console.log("View Location has been pressed");
            openPopup("shelfLocationPopup");
        });
    }

    if (placeOH) {
        placeOH.addEventListener("click", function () {
            console.log("Place On Hold has been pressed");
            openPopup("holdSuccessPopup");
        });
    }

    if (demoBook1) {
        demoBook1.addEventListener("click", function () {
            console.log("Demo Book 1: Splendid Suns has been pressed");
            loadDetailsPage();
        });
    }

    // Universal handeling to close popups
    popupCloseBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const popup = btn.closest(".popup");
            if (popup){
                closePopup(popup.id);
                console.log("Closing Popup", popup.id);
            }
        })
    })


    // This simulates hitting search so we will now load the result page
    keyboard.addEventListener("click", function () {
        console.log("Keyboard has been Pressed, now showing results");
        loadResultsPage();
    });


    if (backBtn) {
        backBtn.addEventListener("click", function () {
            console.log("Back Button has been Pressed");

            if (currentPage === "search") {
                loadMainPage();

            } else if (currentPage === "results") {
                loadSearchPage();

            } else if (currentPage === "details") {
                loadResultsPage();
            }

        });
    }

});