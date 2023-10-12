onScrollEvent1();
horizontalScroll();
// onScrollEvent2();




function onScrollEvent1() {
    var header = document.querySelector(".header");

    // header.addEventListener("touchmove", function () {
    //     header.setAttribute("data-scroll", "true");
    // });

    window.addEventListener("scroll", function () {
        if (window.scrollY === 0) {
            header.removeAttribute("data-scroll");
        } else {
            header.setAttribute("data-scroll", "true");
        }
    });
}

// same with onScrollEvent
function onScrollEvent2() {
    window.onscroll = () => scrollFunction();

    function scrollFunction() {
        const header = document.querySelector("header");
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            header.classList.add('onscroll');
        } else {
            header.classList.remove('onscroll');
        }
    }
}

function horizontalScroll() {
    const scrollImages = document.querySelector(".hrtools__cards-container");
    const scrollLength = scrollImages.scrollWidth - scrollImages.clientWidth;
    const leftButton = document.querySelector(".hrtools__left-arrow");
    const rightButton = document.querySelector(".hrtools__right-arrow");

    function checkScroll() {
        const currentScroll = scrollImages.scrollLeft;
        if (currentScroll === 0) {
            leftButton.setAttribute("disabled", "true");
            rightButton.removeAttribute("disabled");
        } else if (currentScroll === scrollLength) {
            rightButton.setAttribute("disabled", "true");
            leftButton.removeAttribute("disabled");
        } else {
            leftButton.removeAttribute("disabled");
            rightButton.removeAttribute("disabled");
        }
    }

    scrollImages.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    function leftScroll() {
        scrollImages.scrollBy({
            left: -320,
            behavior: "smooth"
        });
    }

    function rightScroll() {
        scrollImages.scrollBy({
            left: 320,
            behavior: "smooth"
        });
    }

    leftButton.addEventListener("click", leftScroll);
    rightButton.addEventListener("click", rightScroll);

}