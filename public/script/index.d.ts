type TProgressBar = () => {
    progressComponent: HTMLSpanElement;
    setPercentage: (percentage: number) => void;
};
declare const getProgressBar: TProgressBar;
export default getProgressBar;
