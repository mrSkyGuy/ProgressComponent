type TProgressComponent = (wrapperClassName?: string) => {
    progressComponent: HTMLSpanElement;
    setPercentage: (percentage: number) => void;
};
declare const getProgressComponent: TProgressComponent;
export default getProgressComponent;
