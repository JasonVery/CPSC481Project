document.addEventListener("DOMContentLoaded", function () {
    const demoBook = document.getElementById("demoBook1");
    const filterBtn = document.querySelector(".filterButton");
    const backBtn = document.querySelector(".backButton");

    if (demoBook) {
        demoBook.addEventListener("click", function () {
            sessionStorage.setItem("searchOpen", "true");
            window.location.href = "bookDetailsPage.html";
        });
    }

    if (filterBtn) {
        console.log("Filter Button Was Clicked");
    }

    if (backBtn) {
        backBtn.addEventListener("click", function () {


        });


    }
});