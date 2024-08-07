var _a;
import getProgressComponent from "./progressComponent/progressComponent.js";
const main = document.querySelector(".main");
const valueInput = document.querySelector(".controller__text-input");
const animateInput = document.querySelector(".switch__input_animate");
const hideInput = document.querySelector(".switch__input_hide");
const darkModeInput = document.querySelector(".switch__input_dark-mode");
const { progressComponent, setPercentage, setAnimate, setHide } = getProgressComponent("main__progress", {
    percentage: Number((_a = valueInput.getAttribute("value")) !== null && _a !== void 0 ? _a : 0),
    isAnimated: animateInput.hasAttribute("checked"),
    isHidden: hideInput.hasAttribute("checked"),
});
main.prepend(progressComponent);
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
darkModeInput.addEventListener("input", event => {
    const input = event.target;
    if (input === null)
        return;
    if (input.checked)
        document.body.classList.add("dark-mode");
    else
        document.body.classList.remove("dark-mode");
});
//# sourceMappingURL=index.js.map