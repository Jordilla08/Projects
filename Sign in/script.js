const container = document.getElementById('container');
const registerBtn = document.getElementById('register');  // Get the register button
const loginBtn = document.getElementById('login');  // Get the login button

registerBtn.addEventListener('click', () => {
  container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
  });