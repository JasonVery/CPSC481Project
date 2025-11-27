
// Can add new book pictures to here. atm its just cycling the same books
const carourselBooks = {
    new: [
        "images/books/splendidSuns.svg",
        "images/books/achilles.svg",
        "images/books/midnightLib.svg",
        "images/books/headsYouWith.svg",
        "images/books/searchTomorrow.svg"
    ],

    classic: [
        "images/books/tender.svg",
        "images/books/rye.svg",
        "images/books/blossom.svg",
        "images/books/paradise.svg",
        "images/books/searchPieces.svg"
    ],

    mystery: [
        "images/books/sheGone.svg",
        "images/books/patient.svg",
        "images/books/longHome.svg",
        "images/books/herrings.svg",
        "images/books/searchMiles.svg"
    ],

    similar: [
        "images/books/echoedDetails.svg",
        "images/books/growDetails.svg",
        "images/books/theifDetails.svg",
        "images/books/achilles.svg"
    ]

};

// function to handle the book carousel on main page and specific book details pages
document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll(".carousel").forEach(section => {
        const genre = section.dataset.carousel;
        const books = section.querySelectorAll(".bookMainPage");
        const detailbooks = section.querySelectorAll(".bookDetailsForDetails");
        const leftBtn = section.querySelector(".left");
        const rightBtn = section.querySelector(".right");

        // handles updating what is seen on carousel
        function updateCarousel() {
            const booksSrcs = carourselBooks[genre];

            // main page books
            books.forEach((book, i) => {
                book.src = booksSrcs[i];
            });

            detailbooks.forEach((book, i) => {
                book.src = booksSrcs[i];

            });
        }


        // Swap
        if (leftBtn) {
            leftBtn.addEventListener("click", function () {
                carourselBooks[genre].unshift(carourselBooks[genre].pop());
                updateCarousel();
            });
        }

        if (rightBtn) {
            rightBtn.addEventListener("click", function () {
                carourselBooks[genre].push(carourselBooks[genre].shift());
                updateCarousel();
            });
        }

        // // Can get rid of this if you guys dont like but i thought it was a nice addition for minimal work
        // setInterval(() => {
        //     carourselBooks[genre].unshift(carourselBooks[genre].pop());
        //     updateCarousel();
        // }, 5000);

        updateCarousel();

    });
});
