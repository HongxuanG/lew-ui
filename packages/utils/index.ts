// Returns the icon type to be used in a tooltip.
// type: The type of message to display in the tooltip.
export const getIconType = (type: string): string => {
    let map = {
        normal: 'info',
        warning: 'alert-triangle',
        success: 'check',
        error: 'alert-circle',
        info: 'bell',
    };
    // @ts-ignore
    return map[type] || 'info';
};

// getPx takes a string or number and returns a string with 'px' appended to it.
// num: string | number
// return: string
export const getPx = (num: string) => {
    return typeof num === 'string' ? num : num + 'px';
};

export * from './validator';
