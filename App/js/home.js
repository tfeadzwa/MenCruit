onScrollEvent();
displayMenuItems();
horizontalScroll();

function onScrollEvent() {
    const header = document.querySelector(".header");

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

// same with onScrollEvent , make sure to add class 'onscroll' to the style sheet
function onScrollEvent2() {
    window.onscroll = () => {
        return scrollFunction();
    };

    function scrollFunction() {
        const header = document.querySelector("header");
        if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
            header.classList.add('onscroll');
        } else {
            header.classList.remove('onscroll');
        }
    }
}

//? display menu items for each link item on mouse hover & mouse out
function displayMenuItems() {
    let headerLinks = document.querySelectorAll(".header__links a");
    let menuItems = document.querySelectorAll(".menu .header__menu");
    let menuLinks = document.querySelector(".menu");

    for (let i = 0; i < menuItems.length; i++) {

        headerLinks[i].addEventListener("mouseover", function () {
            menuLinks.classList.add("menu-overlay");
            menuItems[i].style.visibility = "visible";
        });

        headerLinks[i].addEventListener("mouseout", function () {
            menuLinks.classList.remove("menu-overlay");
            menuItems[i].style.visibility = "hidden";
        });
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