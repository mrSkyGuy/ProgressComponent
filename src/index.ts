import getProgressComponent from "./progressComponent/progressComponent.js";

const valueInput = document.querySelector(".controller__text-input")!;
const animateInput = document.querySelector(".switch__input_animate")!;
const hideInput = document.querySelector(".switch__input_hide")!;
const main = document.querySelector(".main")!;

const {progressComponent, setPercentage, setAnimate, setHide} =
  getProgressComponent("main__progress", {
    percentage: Number(valueInput.getAttribute("value") ?? 0),
    isAnimated: animateInput.hasAttribute("checked"),
    isHidden: hideInput.hasAttribute("checked"),
  });

main.prepend(progressComponent);

valueInput.addEventListener("input", event => {
  const input = event.target as HTMLInputElement | null;
  if (input === null) return;

  setPercentage(Number(input.value));
});

animateInput.addEventListener("input", event => {
  const input = event.target as HTMLInputElement | null;
  if (input === null) return;

  setAnimate(input.checked);
});

hideInput.addEventListener("input", event => {
  const input = event.target as HTMLInputElement | null;
  if (input === null) return;

  setHide(input.checked);
});
