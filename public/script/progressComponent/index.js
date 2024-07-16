const getProgressComponent = wrapperClassName => {
    const viewSize = 100;
    const borderWidth = viewSize / 10;
    const radius = viewSize / 2 - borderWidth / 2;
    const perimeter = radius * 2 * Math.PI;
    const progressComponent = document.createElement("span");
    progressComponent.classList.add("spinner");
    wrapperClassName && progressComponent.classList.add(wrapperClassName);
    progressComponent.innerHTML = `
    <svg viewBox="0 0 ${viewSize} ${viewSize}">
      <circle 
        r="${radius}"
        cx="50"
        cy="50"
        data-idea="background"
      />
      <circle 
        r="${radius}"
        cx="50"
        cy="50"
        data-idea="progress"
      />
    </svg>
  `;
    const circleProgress = progressComponent.querySelector("circle[data-idea='progress']");
    circleProgress.style.strokeDashoffset = `${perimeter / 4}`;
    progressComponent.querySelectorAll("circle").forEach(circle => {
        circle.style.strokeWidth = `${borderWidth}px`;
    });
    function setPercentage(percentage) {
        const safePtg = Math.max(Math.min(percentage, 100), 0);
        circleProgress.style.strokeDasharray = `${(perimeter * safePtg) / 100} ${(perimeter * (100 - safePtg)) / 100}`;
    }
    return { progressComponent, setPercentage };
};
export default getProgressComponent;
//# sourceMappingURL=index.js.map