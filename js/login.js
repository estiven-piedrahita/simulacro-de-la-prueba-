
let form = document.getElementById("loginForm");
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let message = document.getElementById("message");


 let users = JSON.parse(localStorage.getItem("users")) || [];

if (sessionStorage.getItem("login") === "true") {
    window.location.href = "home.html"
}

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    let theName = inputEmail.value.trim();
    let theEmail = inputEmail.value.trim();
    let thePassword = inputPassword.value;
    let Role = document.getElementById("rol").value;
   
    
    let userFound = users.find(user => user.email === theEmail && user.password === thePassword
    );

    if (!userFound) {
        message.textContent = "Invalid email or password";
        message.style.color = "red";
        setTimeout(() => message.textContent = "", 2000);
        form.reset();
        return;
    }
    sessionStorage.setItem("login", "true");  

    localStorage.setItem("loggedUser", JSON.stringify(Role,theName,userFound));
    
    message.textContent = "Login successful";
    message.style.color = "green"

    
    setTimeout(() => {
    window.location.href = "profiles.html";
}, 1000);
});