const signUpBtn = document.getElementById("signUp");
const signInBtn = document.getElementById("signIn");
const login = document.querySelector(".login");

signUpBtn.addEventListener("click", () => {
  login.classList.add("right-panel-active");
});
signInBtn.addEventListener("click", () => {
  login.classList.remove("right-panel-active");
});