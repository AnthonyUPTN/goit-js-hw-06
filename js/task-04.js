let counterValue = 0;

const counterValueEl = document.querySelector("#value");
const counterMinusOneBtn = document.querySelector('[data-action="decrement"]');
const counterPlusOneBtn = document.querySelector('[data-action="increment"]');

counterMinusOneBtn.addEventListener("click", () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
});

counterPlusOneBtn.addEventListener("click", () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
});
