type TDefaultValues = {
  percentage: number;
  isAnimated: boolean;
  isHidden: boolean;
};

type TProgressComponent = (
  wrapperClassName?: string,
  defaultValues?: Partial<TDefaultValues>
) => {
  progressComponent: HTMLSpanElement;
  setPercentage: (percentage: number) => void;
  setAnimate: (value: boolean) => void;
  setHide: (value: boolean) => void;
};

const getProgressComponent: TProgressComponent = (
  wrapperClassName,
  defaultValues
) => {
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

    if (
      (safePtg === 0 || safePtg === 100) &&
      progressComponent.classList.contains("animated")
    ) {
      progressComponent.style.animationPlayState = "paused";
    } else {
      progressComponent.style.animationPlayState = "";
    }
  }

  function setAnimate(value: boolean): void {
    if (value) progressComponent.classList.add("animated");
    else progressComponent.classList.remove("animated");
  }

  function setHide(value: boolean): void {
    if (value) progressComponent.classList.add("hidden");
    else progressComponent.classList.remove("hidden");
  }

  if (defaultValues?.percentage) setPercentage(defaultValues.percentage);
  if (defaultValues?.isAnimated) setAnimate(defaultValues.isAnimated);
  if (defaultValues?.isHidden) setHide(defaultValues.isHidden);

  return {progressComponent, setPercentage, setAnimate, setHide};
};

export default getProgressComponent;
