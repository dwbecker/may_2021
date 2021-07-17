const user_name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message')


function validate() {
      
    if( document.myForm.name.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.name.focus() ;
       return false;
    }
    if( document.myForm.email.value == "" ) {
       alert( "Please provide your email address!" );
       document.myForm.email.focus() ;
       return false;
    }
    return( true );
 };

 function validateEmail() {
    var emailID = document.myForm.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Please enter your email address.")
       document.myForm.email.focus() ;
       return false;
    }
    return( true );
 };

 function displayMessageOnSubmit () {
    

 };