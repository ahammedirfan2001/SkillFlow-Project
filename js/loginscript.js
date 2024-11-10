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

function validatePassword(){
    const password = document.getElementById("password").value;
    const passwordInput =document.getElementById("password");
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

document.getElementById("myform").addEventListener("submit", function(event){
    const isvalidUsername = validateUsername();
    const isvalidPassword = validatePassword();
    if(!isvalidUsername || !isvalidPassword){
        event.preventDefault();
    }
});