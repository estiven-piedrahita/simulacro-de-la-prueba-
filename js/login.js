let form = document.getElementById("loginForm");
let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let message = document.getElementById("message");

let users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let theName = inputName.value.trim();
  let theEmail = inputEmail.value.trim();
  let thePassword = inputPassword.value;
  let role = document.getElementById("rol").value;

  let userFound = users.find(
    (user) => user.email === theEmail && user.password === thePassword,
  );

  if (!userFound) {
    message.textContent = "Invalid email or password";
    message.style.color = "red";
    setTimeout(() => (message.textContent = ""), 2000);
    form.reset();
    return;
  }

  let rolFound = users.some((user) => user.rol === role);

  if (!rolFound) {
    message.textContent = "invalid data";
    message.style.color = "red";
    setTimeout(() => (message.textContent = ""), 2000);

    return;
  }

  sessionStorage.setItem("loggedUser", inputEmail, role);

  let julio = localStorage.setItem("Users", JSON.stringify());
  console.log(julio);

  message.textContent = "Login successful";
  message.style.color = "green";

//   setTimeout(() => {
    window.location.href = "mainUser.html";
//   }, 1000);
});
