const get = (totalBoxes: number, size: string) => {
    switch (size) {
        case "xs": {
            return 0;
        }
        case "sm": {
            return 0;
        }
        case "lg": {
            return 0;
        }
        default:
        case "xl": {
            return 0;
        }
    }
};

export const boxesCountCalculator = {
    get
};