const navbar = document.querySelector(".navbar");
const navbarToggle = document.querySelector(".navbar__toggle");
const navbarOverlay = document.querySelector(".navbar-overlay");
const navbarLinks = document.querySelectorAll(".navbar a");
const navbarClose = document.querySelector(".navbar__close");

const closeNavbar = () => {
    navbar.classList.remove("navbar--open");
    navbarToggle.querySelector(".material-symbols-outlined").textContent = "menu";
};

const openNavbar = () => {
    navbar.classList.add("navbar--open");
    // navbarToggle.querySelector(".material-symbols-outlined").textContent = "close";
};

navbarToggle.addEventListener("click", openNavbar);

navbarClose.addEventListener("click", closeNavbar);

navbarOverlay.addEventListener("click", closeNavbar);

// navbarToggle.addEventListener("click", () => {
//     const isOpen = navbar.classList.contains("navbar--open");

//     if (isOpen) {
//         closeNavbar();
//     } else {
//         openNavbar();
//     }
// });

navbarLinks.forEach((link) => {
    link.addEventListener("click", closeNavbar);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeNavbar();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeNavbar();
    }
});

