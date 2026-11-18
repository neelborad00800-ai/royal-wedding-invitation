
const enterButton = document.getElementById("enterButton");
const welcomeScreen = document.getElementById("welcome");
const mainInvitation = document.getElementById("mainInvitation");

enterButton.addEventListener("click", function () {
  welcomeScreen.style.display = "none";
  mainInvitation.classList.remove("hidden");
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
