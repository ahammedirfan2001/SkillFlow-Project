function validateName(){
    const username = document.getElementById("username").value;
    const usernameInput =document.getElementById("username");
    const usernameMessage = document.getElementById("usernameMessage");
    if(username.length >= 3){
        usernameInput.style.bordercolor ="green";
        usernameMessage.textContent= "Username Looks good";
        usernameMessage.style.color = "green";
        return true;
    }
    else{
        usernameInput.style.borderColor= "red";
        usernameMessage.textContent ="Username should be at least 3 characters long";
        usernameMessage.style.color="red";
        return false;
    }
}

function validateEmail(){
    const email = document.getElementById("email").value;
    const emailInput =document.getElementById("email");
    const emailMessage = document.getElementById("emailMessage");
    const emailPattern =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(emailPattern.test(email)){
        emailInput.style.bordercolor ="green";
        emailMessage.textContent= "Validate email";
        emailMessage.style.color = "green";
        return true;
    }
    else{
        emailInput.style.borderColor= "red";
        emailMessage.textContent ="Enter a valid email address";
        emailMessage.style.color="red";
        return false;
    }
}

function validatenewPassword(){
    const password = document.getElementById("newPassword").value;
    const passwordInput =document.getElementById("newPassword");
    const passwordMessage = document.getElementById("passwordMessage");
    if(password.length >= 6){
        passwordInput.style.bordercolor ="green";
        passwordMessage.textContent= "Strong password";
        passwordMessage.style.color = "green";
        return true;
    }
    else{
        passwordInput.style.borderColor= "red";
        passwordMessage.textContent ="Password should be at least 6 character long";
        passwordMessage.style.color="red";
        return false;
    }
}
function validateconfirmPassword(){
    const password = document.getElementById("confirmPassword").value;
    const passwordInput =document.getElementById("confirmPassword");
    const passwordMessage = document.getElementById("confirmpasswordMessage");
    if(confirmPassword = newPassword){
        passwordInput.style.bordercolor ="green";
        passwordMessage.textContent= "Same password";
        passwordMessage.style.color = "green";
        return true;
    }
    else{
        passwordInput.style.borderColor= "red";
        passwordMessage.textContent ="Password should be same";
        passwordMessage.style.color="red";
        return false;
    }
}

document.getElementById("myform").addEventListener("submit", function(event){
    const isvalidName = validateName();
    const isvaliEmail = validateEmail();
    const isvalidPassword = validatePassword();
    if(!isvalidName || !isvaliEmail || !isvalidPassword){
        event.preventDefault();
    }
});