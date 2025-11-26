const start_container = document.querySelector(".start-container");
const startGame = document.querySelector(".startGame");
const category = document.querySelector(".category");

startGame.addEventListener("click", () => {
  start_container.classList.add("hidden");
  category.classList.remove("hidden");
});
