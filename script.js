const start_container = document.querySelector(".start-container");
const startGame = document.querySelector(".startGame");
const category = document.querySelector(".category");
const Dexter=document.querySelector(".Dexter");
const questionBox=document.querySelector(".question-box");

startGame.addEventListener("click", () => {
  start_container.classList.add("hidden");
  category.classList.remove("hidden");
});
Dexter.addEventListener("click", () => {
  category.classList.add("hidden");
  questionBox.classList.remove("hidden");
});
