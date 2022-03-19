function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const bgClrInformerEl = document.querySelector(".color");
const bgClrChangeBtnEl = document.querySelector(".change-color");

bgClrChangeBtnEl.addEventListener("click", (event) => {
  bodyEl.style.background = getRandomHexColor();

  bgClrInformerEl.textContent = bodyEl.style.background;

  bgClrInformerEl.textContent = getRandomHexColor();
});
