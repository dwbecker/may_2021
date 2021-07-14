//find element on the page
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

//perform action on click event

menuIcon.addEventListener("click", showNavMenuOnClick);

// This is the hamburger menu
function showNavMenuOnClick() {
    if(!navMenu.style.display) {
        navMenu.style.display = 'flex'
    } else {
        navMenu.style.display = '';
    }
}
