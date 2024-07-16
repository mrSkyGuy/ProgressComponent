import getProgressComponent from "./progressComponent/progressComponent.js";
const { progressComponent, setPercentage, setAnimate, setHide } = getProgressComponent("main__progress");
const main = document.querySelector(".main");
main.prepend(progressComponent);
const valueInput = document.querySelector(".controller__text-input");
const animateInput = document.querySelector(".switch__input_animate");
const hideInput = document.querySelector(".switch__input_hide");
valueInput.addEventListener("input", event => {
    const input = event.target;
    if (input === null)
        return;
    setPercentage(Number(input.value));
});
animateInput.addEventListener("input", event => {
    const input = event.target;
    if (input === null)
        return;
    setAnimate(input.checked);
});
hideInput.addEventListener("input", event => {
    const input = event.target;
    if (input === null)
        return;
    setHide(input.checked);
});
//# sourceMappingURL=index.js.map