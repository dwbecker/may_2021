//find element on the page
const menuicon = document.getElementById("menu-icon");
const listItems = document.getElementById("list-items");
const navMenu = document.getElementById('nav-menu');

//perform action on click event

menu-icon.addEventListener("click", showNavMenuOnClick);

// This is the hamburger menu
function showNavMenuOnClick() {
    if(!navMenu.style.display) { // equal to (navMenu.style.display === '')
        navMenu.style.display = 'flex'
    } else {
        navMenu.style.display = '';
    }
}

