// different book detail pages
// 43 words for desc
const bookDetails = {
    suns: {
        title: "A Thousand Splendid Suns",
        author: "Khaled Hosseini",
        img: "images/books/searchSuns.svg",
        genre: "Classic, Historical, Fiction",
        availability: "1 Available At Louise Riley Library",
        description: "After more than two years on the bestseller lists and over four million copies in print, Khaled Hosseini returns with a beautiful, riveting, and haunting novel of enormous contemporary relevance. A Thousand Splendid Suns is a breathtaking story set against the volatile even..."
    },

    miles: {
        title: "A Thousand Miles",
        author: "Bridget Morrissey",
        img: "images/books/searchMiles.svg",
        genre: "Contemporary, Fiction, Romance",
        availability: "2 Available At Louise Riley Library",
        description: "Dee Matthews is the cohost of the smash-hit podcast Did I Forget To Tell You?, where she interviews family, friends, and past lovers. Nothing is off limits, except for one man (known on the show only as Name Redacted) who happens to be her high school best friend Ben. Gap Filler ..."

    },

    pieces: {
        title: "A Thousand Pieces of You",
        author: "Caludia Gray",
        img: "images/books/searchPieces.svg",
        genre: "Fiction, Fantasy, Romance, Young-Adult",
        availability: "1 Available At Louise Riley Library",
        description: "Marguerite Caine's physicist parents are known for their groundbreaking achievements. Their most astonishing invention, called the Firebird, allows users to jump into multiple universes—and promises to revolutionize science forever. But then Marguerite's father is murdered..."

    },

    tomorrows: {
        title: "A Thousand Tomorrows",
        author: "Karen Kingsbuy",
        img: "images/books/searchTomorrow.svg",
        genre: "Fiction, Fantasy, Romance, Young-Adult",
        availability: "0 Available At Louise Riley Library",
        description: "Cody Gunner has no use for real love. Abandoned as a child by the person he needed the most, he swears he will never allow himself to love again. Ali Daniels denies love as well. Carrying a terrible secret, she lives life to the fullest, taking risks and refusing relationships..."

    }
}

// Main js file. Handles things like navigation and swithching pages
// to make routing easier, everyhting is just in one html doc and just setting or removing
// display to show different elements
document.addEventListener("DOMContentLoaded", function () {

    // Specific one off vars
    const eyeCatcherHelpBtn = document.querySelector(".eyeCatcherHelpBtn");
    const eyeCatcherStartBtn = document.querySelector(".eyeCatcherStartBtn");
    const searchBars = document.querySelectorAll(".searchBarCont");
    const keyboard = document.getElementById("keyboardContainer");
    const filterBtn = document.querySelector(".filterButtonWrapper");
    const showMore = document.getElementById("showMoreText");
    const location = document.querySelector(".shelfLocation");
    const placeOH = document.querySelector(".placeOnHoldBtnCont");
    const placeOHSuccess = document.getElementById("successPopup");
    const popupCloseBtns = document.querySelectorAll(".popupClose");



    // Books that open book details page
    const demoBook1 = document.querySelectorAll(".demoBook1");
    const demoBook2 = document.querySelectorAll(".demoBook2");
    const demoBook3 = document.querySelectorAll(".demoBook3");
    const demoBook4 = document.querySelectorAll(".demoBook4");
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



    // Login/ profile variables
    let isLoggedIn = false;
    let isTryingToHold = false;
    const loginGoodBtn = document.querySelectorAll(".loginGoodBtn");
    const loginLabel = document.getElementById("loginLabel");
    const logoutBtn = document.querySelectorAll(".logoutBtn");
    const logoutAcc = document.querySelector(".logoutAcc");
    const logOffChangeName = document.querySelector(".logOffMain");
    const backToProfile = document.querySelector(".backToProfile");
    const bookRoom = document.querySelector(".bookRoomBtn");
    const roomBooked = document.querySelector(".roomBooked");
    const retunToProf = document.querySelector(".returnToProf");




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

        const anyOpen = document.querySelectorAll(".popup:not(.hidden)").length > 0; 

        // Only removing blur if all popups are closed.
        if (!anyOpen) {
        document.querySelectorAll(".page").forEach(page => page.classList.remove("blurred"));
        keyboard.classList.remove("blurred");
    }
    }




    // Universal function to dynamically inject each book detail page 
    // with the proper information
    function generateBookDetails(bookID) {
        const book = bookDetails[bookID];
        if (!book) {
            return;
        }

        loadDetailsPage();

        // Keeping these here to keep the rest of the definitions clean 
        document.getElementById("detailsCoverImg").src = book.img;
        document.getElementById("detailsTitle").textContent = book.title;
        document.getElementById("detailsAuthor").textContent = "Author: " + book.author;
        document.getElementById("detailsAvailability").textContent = book.availability;
        const avail = document.getElementById("detailsAvailability");
        const shelf = document.querySelector(".shelfLocation");
        avail.textContent = book.availability;
        const isUnavailable = book.availability.startsWith("0");

        // Handeling the case where the book is unavailable. Probably want to hide the map aswell and chaneg font colour
        if (isUnavailable) {
            avail.style.color = "red";
            shelf.style.display = "none";
        } else {
            avail.style.color = "";
            shelf.style.display = "block";
        }

        const desc = document.getElementById("detailsDescription");
        desc.innerHTML = book.description + `<span id="showMoreText">Show More</span>`;
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
    if (searchBars) {
        searchBars.forEach(searchBar => {
            searchBar.addEventListener("click", function () {
                console.log("Search Bar has been Pressed");
                loadSearchPage();
            });
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
            if (isLoggedIn === false) {
                console.log("Not logged in, show login popup");
                openPopup("logIn");
            } else {
                console.log("Already Logged in, show member popup");
                openPopup("profilePopup");
            }

        });
    }

    if (loginGoodBtn) {
        loginGoodBtn.forEach(btn => {
            btn.addEventListener("click", function () {
                isLoggedIn = true;
                loginLabel.innerHTML = "Ann";

                if (isTryingToHold === true) {
                    openPopup("placeHoldPopup");
                }
            });

        });
    }

    if (logoutBtn) {
        logoutBtn.forEach(btn => {
            btn.addEventListener("click", function () {
                isLoggedIn = false;
                loginLabel.innerHTML = "Login";
                loadMainPage();

            });
        });
    }

    if (logoutAcc) {
        logoutAcc.addEventListener("click", function () {
            isLoggedIn = false;
            logButton.disabled = true;
            openPopup("logOff");
        });
    }

    if (logOffChangeName) {
        logOffChangeName.addEventListener("click", function () {
            isLoggedIn = false;
            loginLabel.innerHTML = "Login";
            console.log("Opening auto logout popup");
            openPopup("automaticLogoutPopup");
            // 10 second refresh can shorten
            setInterval(() => {
                window.location.reload()
            }, 5000);
        });
    }

    if (backToProfile) {
        backToProfile.addEventListener("click", function () {
            openPopup("profilePopup");
        });
    }

    if (bookRoom) {
        bookRoom.addEventListener("click", function () {
            console.log("Book Room Popup has been clicked");
            openPopup("roomBooking");

        });
    }

    if (roomBooked) {
        roomBooked.addEventListener("click", function () {
            console.log("Confirming Booked Room");
            openPopup("roomBookingSuccess");
        });
    }

    if (retunToProf) {
        retunToProf.addEventListener("click", function () {
            console.log("Returning to profile");
            openPopup("profilePopup");
        })
    }


    if (filterBtn) {
        filterBtn.addEventListener("click", function () {
            console.log("Filter Button Has Been Pressed");
            openPopup("selectFilter");
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
            if (isLoggedIn === false) {
                openPopup("logInHold");
                isTryingToHold = true;

            } else {
                console.log("Place On Hold has been pressed");
                openPopup("placeHoldPopup");
            }
        });
    }

    if (placeOHSuccess) {
        placeOHSuccess.addEventListener("click", function () {
            console.log("Place On Hold Success has been pressed");
            closePopup("placeHoldPopup");
            openPopup("holdSuccessPopup");

        })
    }



    // Routing to display demo books
    if (demoBook1) {
        demoBook1.forEach(book => {
            book.addEventListener("click", function () {
                console.log("Demo Book 1: A Thousand Miles has been pressed");
                generateBookDetails("miles");
            });

        })
    }

    if (demoBook2) {
        demoBook2.forEach(book => {
            book.addEventListener("click", function () {
                console.log("Demo Book 2: A Thousand Pieces of You has been pressed");
                generateBookDetails("pieces");
            });

        });
    }

    if (demoBook3) {
        demoBook3.forEach(book => {
            book.addEventListener("click", function () {
                console.log("Demo Book 3: A Thousand Splendid Suns has been pressed");
                generateBookDetails("suns");
            });

        });
    }

    if (demoBook4) {
        demoBook4.forEach(book => {
            book.addEventListener("click", function () {
                console.log("Demo Book 4: A Thousand Tomorrows has been pressed");
                generateBookDetails("tomorrows");
            });
        });
    }


    // JJ collapsible function for filter 
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            console.log("Toggled drop down");
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

    // JJ show password functions 
    const passwordInput = document.getElementById("passwordBox")
    const passwordButton = document.getElementById("showPassword")
    const imageUsed = document.getElementById("showPasswordImg")

    passwordButton.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            imageUsed.src = 'images/icons/passwordEyeOpen.svg';
        } else {
            passwordInput.type = 'password';
            imageUsed.src = 'images/icons/passwordEyeClosed.svg';
        }
    });

    const passwordInputHold = document.getElementById("passwordBoxHold")
    const passwordButtonHold = document.getElementById("showPasswordHold")
    const imageUsedHold = document.getElementById("showPasswordImgHold")

    passwordButtonHold.addEventListener('click', function () {
        if (passwordInputHold.type === 'password') {
            passwordInputHold.type = 'text';
            imageUsedHold.src = 'images/icons/passwordEyeOpen.svg';
        } else {
            passwordInputHold.type = 'password';
            imageUsedHold.src = 'images/icons/passwordEyeClosed.svg';
        }
    });

    // Checking if log in is true
    const correctUsername = "ann@gmail.com";
    const correctPassword = "Password1";
    const errorMessage = document.getElementById("errorMsg");

    const annPassword = passwordInput
    const annUsername = document.getElementById("emailBox");
    const logButton = document.getElementById("logButton");

    annPassword.addEventListener("input", function() {
        const passwordEntered = annPassword.value.trim();
        const loginInput = annUsername.value.trim();

        if (passwordEntered == correctPassword && loginInput.toLowerCase() == correctUsername){
            logButton.disabled = false;
        } else {
            logButton.disabled = true;
            if (loginInput.length > 0 || passwordInput.length > 0) {
                errorMessage.textContent = "Username and/or Password not recognized. Please try again."
                errorMessage.style.color = "#a81414"
                errorMessage.style.display = "block";
            } else {
                errorMessage.style.color = "#000"
                errorMessage.textContent = "Forgot your password, or want an account? Please find an associate for help."
            }
        }

    })


    // Universal handeling to close popups
    popupCloseBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const popup = btn.closest(".popup");
            if (popup) {
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