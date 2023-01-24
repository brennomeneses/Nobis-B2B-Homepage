// import axios from '../node_modules/axios/index';

window.onscroll = () => { displayToTopButton() }

const allBtnList = [
  "btnImpact",
  "btnComunicacao",
  "btnMaterialidade",
  "btnESG"
];

function displayToTopButton() {
  const goToTopButton = document.getElementById("toTopButton");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    goToTopButton.classList.remove("hidden")
  } else {
    goToTopButton.classList.add("hidden")
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrolltoId(event) {
  const elementId = event.srcElement.id;
  const targetId = elementId.replace("btn", "").toLowerCase();

  document.getElementById(targetId).scrollIntoView();
}

document.addEventListener("DOMContentLoaded", () => {
  allBtnList.map((e) => {
    const element = document.getElementById(e);
    element.addEventListener("click", scrolltoId);
  });
})

