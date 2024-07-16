import getProgressComponent from "./progressComponent/progressComponent.js";

const {progressComponent, setPercentage} =
  getProgressComponent("main__progress");
setPercentage(23);

const main = document.querySelector(".main")!;
main.prepend(progressComponent);
