type TProgressComponent = (wrapperClassName?: string) => {
    progressComponent: HTMLSpanElement;
    setPercentage: (percentage: number) => void;
    setAnimate: (value: boolean) => void;
    setHide: (value: boolean) => void;
};
declare const getProgressComponent: TProgressComponent;
export default getProgressComponent;
