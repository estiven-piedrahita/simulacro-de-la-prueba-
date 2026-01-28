let form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
e.preventDefault();

let users = JSON.parse(localStorage.getItem("users")) || [];

let inputEmail = document.getElementById("email").value;
let inputPassword = document.getElementById("password").value;
let rol = document.getElementById("rol").value;
let message = document.getElementById("message");

let existEmail = users.some(user => user.email === inputEmail);

if (existEmail) {
    message.textContent = "You already have an account created";
    message.style.color = "red";
    setTimeout(()=>{ message.textContent= ""},2000)

    return;
}

users.push({
    "email": inputEmail,
    "password": inputPassword,
    "rol" : rol
});
localStorage.setItem("users", JSON.stringify(users));

    message.textContent = "Account successfully created";
    message.style.color = "green";
    setTimeout(()=>{message.textContent = "",window.location.href = "./index.html"; },2000)

    
    form.reset();
});