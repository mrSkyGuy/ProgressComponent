const getProgressBar = () => {
    const viewSize = 100;
    const borderWidth = viewSize / 10;
    const radius = viewSize / 2 - borderWidth / 2;
    const circumference = radius * 2 * Math.PI;
    const progressComponent = document.createElement("span");
    progressComponent.style.width = "1em";
    progressComponent.style.height = "1em";
    progressComponent.style.display = "inline-block";
    progressComponent.innerHTML = `
    <svg viewBox="0 0 ${viewSize} ${viewSize}">
      <circle 
        r="${radius}"
        cx="50"
        cy="50"
        strokeWidth="${borderWidth}"
      />
    </svg>
  `;
    const circle = progressComponent.querySelector("circle");
    circle.style.stroke = "blue";
    circle.style.strokeLinecap = "round";
    circle.style.fillOpacity = "0";
    function setPercentage(percentage) {
        const safePtg = Math.max(Math.min(percentage, 100), 0);
        circle.style.strokeDasharray = `${(circumference * safePtg) / 100} ${(circumference * (100 - safePtg)) / 100}`;
        circle.style.strokeDashoffset = `${circumference / 4}`;
    }
    return { progressComponent, setPercentage };
};
export default getProgressBar;
const body = document.querySelector("body");
const { progressComponent, setPercentage } = getProgressBar();
body === null || body === void 0 ? void 0 : body.append(progressComponent);
setPercentage(50);
//# sourceMappingURL=index.js.map