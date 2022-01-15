// Set scroll to 0 onload so colorNavbar() doesn't immediately trigger
var scroll = 0

// Changes navbar classes when navbar collapses
function resizeNavbar() {
    const md = 768
    const navList = document.getElementsByClassName("nav-link")

    for (const nav of navList) {
        if (window.innerWidth < md && nav.classList.contains("px-4")) {
            nav.classList.remove("px-4")
        } else if (window.innerWidth >= md && !nav.classList.contains("px-4")) {
            nav.classList.add("px-4")
        }
    }
}

// Changes the navbar color depending on current screen position
function colorNavbar() {
    const navbar = document.getElementById("navbar")
    const home = document.getElementById("top-nav")

    if (scroll == 0) {
        scroll++
    } else if (home.classList.contains("active") && navbar.classList.contains("navbar-dark")) {
        navbar.classList.add("navbar-light", "bg-light", "opacity-75")
        navbar.classList.remove("navbar-dark", "bg-dark")
        document.documentElement.style.setProperty("--active-color", "lightgrey");
    } else if (!home.classList.contains("active") && navbar.classList.contains("navbar-light")) {
        navbar.classList.remove("navbar-light", "bg-light", "opacity-75")
        navbar.classList.add("navbar-dark", "bg-dark")
        document.documentElement.style.setProperty("--active-color", "black");
    }
}

// Checks if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

// Activates animation for elements if they scroll into viewport
function scrollAnimate() {
    var elementList = document.getElementsByClassName("right-not-animated")
    for (const element of elementList) {
        if (isInViewport(element)) {
            element.classList.add("right-animated")
            element.classList.remove("right-not-animated")
        }
    }

    elementList = document.getElementsByClassName("left-not-animated")
    for (const element of elementList) {
        if (isInViewport(element)) {
            element.classList.add("left-animated")
            element.classList.remove("left-not-animated")
        }
    }

    elementList = document.getElementsByClassName("divider-not-animated")
    for (const element of elementList) {
        if (isInViewport(element)) {
            element.classList.add("divider-animated")
            element.classList.remove("divider-not-animated")
        }
    }
}