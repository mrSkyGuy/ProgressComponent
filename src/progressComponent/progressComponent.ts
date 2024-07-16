type TProgressComponent = (wrapperClassName?: string) => {
  progressComponent: HTMLSpanElement;
  setPercentage: (percentage: number) => void;
  setAnimate: (value: boolean) => void;
  setHide: (value: boolean) => void;
};

const getProgressComponent: TProgressComponent = wrapperClassName => {
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

  const circleProgress: SVGCircleElement = progressComponent.querySelector(
    "circle[data-idea='progress']"
  )!;
  circleProgress.style.strokeDashoffset = `${perimeter / 4}`;
  circleProgress.style.strokeDasharray = `0 ${perimeter}`;

  progressComponent.querySelectorAll("circle").forEach(circle => {
    circle.style.strokeWidth = `${borderWidth}px`;
  });

  function setPercentage(percentage: number): void {
    const safePtg = Math.max(Math.min(percentage, 100), 0);
    circleProgress.style.strokeDasharray = `${(perimeter * safePtg) / 100} ${(perimeter * (100 - safePtg)) / 100}`;
  }

  function setAnimate(value: boolean): void {
    if (value) progressComponent.classList.add("animated");
    else progressComponent.classList.remove("animated");
  }

  function setHide(value: boolean): void {
    if (value) progressComponent.classList.add("hidden");
    else progressComponent.classList.remove("hidden");
  }

  return {progressComponent, setPercentage, setAnimate, setHide};
};

export default getProgressComponent;
