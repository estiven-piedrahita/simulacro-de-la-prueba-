let form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
e.preventDefault();

let users = JSON.parse(localStorage.getItem("users")) || [];

let inputEmail = document.getElementById("email").value;
let inputPassword = document.getElementById("password").value;
let rol = document.getElementById("rol").value;
let p = document.getElementById("message");

let existEmail = users.some(user => user.email === inputEmail);

if (existEmail) {
    alert("You already have an account created");
    return;
}

users.push({
    "email": inputEmail,
    "password": inputPassword,
    "rol" : rol
});
localStorage.setItem("users", JSON.stringify(users));

localStorage.setItem("loggedUser",inputEmail, rol);

alert("Account successfully created");
    p.textContent = "Account successfully created";
    p.style.color = "green";

    window.location.href = "login.html";
    form.reset();
});