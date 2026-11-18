
const enterButton = document.getElementById("enterButton");
const buttonText = document.getElementById("buttonText");
const welcomeScreen = document.getElementById("welcome");
const mainInvitation = document.getElementById("mainInvitation");
const diyas = document.querySelectorAll(".diya");
const diyaStage = document.getElementById("diyaStage");

let diyasAreLit = false;

enterButton.addEventListener("click", function () {

  if (!diyasAreLit) {

    diyasAreLit = true;

    diyaStage.classList.add("lighting");

    diyas.forEach((diya, index) => {
      setTimeout(() => {
        diya.classList.add("lit");
      }, index * 450);
    });

    buttonText.textContent = "ENTER INVITATION";

  } else {

    welcomeScreen.style.display = "none";
    mainInvitation.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

});
