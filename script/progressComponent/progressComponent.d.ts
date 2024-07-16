type TDefaultValues = {
    percentage: number;
    isAnimated: boolean;
    isHidden: boolean;
};
type TProgressComponent = (wrapperClassName?: string, defaultValues?: Partial<TDefaultValues>) => {
    progressComponent: HTMLSpanElement;
    setPercentage: (percentage: number) => void;
    setAnimate: (value: boolean) => void;
    setHide: (value: boolean) => void;
};
declare const getProgressComponent: TProgressComponent;
export default getProgressComponent;
