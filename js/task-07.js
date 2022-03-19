const fontSizeControler = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

fontSizeControler.addEventListener("input", () => {
  textEl.style.fontSize = fontSizeControler.value + "px";
});
