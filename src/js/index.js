const darkMode = document.querySelector("#mode");
const headerNavMenu = document.querySelector("#headerNavMenu");
const arrow = document.querySelector("#arrow");
const arrow2 = document.querySelector("#arrow2");
const header = document.querySelector("header");
darkMode.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        darkMode.src = ("./assets/images/light-mode.svg");
        headerNavMenu.src = ("./assets/images/header-menu-icon-dark.svg");
        arrow.src = ("./assets/images/arrow-dark.svg");
        arrow2.src = ("./assets/images/arrow-dark.svg");

        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                header.style.backgroundColor = "#1d1d1d";
            } else {
                header.style.backgroundColor = "#000";
            }
        });
    } else {
        darkMode.src = ("./assets/images/dark-mode.svg");
        headerNavMenu.src = ("./assets/images/header-menu-icon.svg");
        arrow.src = ("./assets/images/arrow.svg");
        arrow2.src = ("./assets/images/arrow.svg");
    }
});