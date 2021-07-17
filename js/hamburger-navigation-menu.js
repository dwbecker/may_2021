// Find elements on the page
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

// Perform action on click event

menuIcon.addEventListener("click", showNavMenuOnClick);

// Function displays and hides the navigation menu
function showNavMenuOnClick() {
    if(!navMenu.style.display) {
        navMenu.style.display = 'flex'
    } else {
        navMenu.style.display = '';
    }
}
