const HTMLBadges = prompt('How many HTML badges do you have?'); //prompts user to enter number of HTML badges
const CSSBadges = prompt('How many CSS badges do you have?'); //prompts user to enter number of CSS badges

// const totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges); //parseInt() parses the string provided by user into an interger
const totalBadges = +HTMLBadges + +CSSBadges //This method (unary plus) is faster and allows you to combine integers and float points

console.log(totalBadges); //displays the total number of badges entered by user in the console