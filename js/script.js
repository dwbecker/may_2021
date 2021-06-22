//find element on the page
const actionButton = document.getElementById("action-btn")

//perform action on click event

actionButton.addEventListener("click", performActionOnClick)

function performActionOnClick() {
    alert("You've been rick-rolled!")
}

