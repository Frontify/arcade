import { convertCamelCaseToKebabCase } from './convertCamelCaseToKebabCase';

export const reactCssPropsToCss = (props?: any): string => {
    if (!props) {
        return '';
    }
    return Object.keys(props)
        .map((key) => {
            return `${convertCamelCaseToKebabCase(key)}: ${props[key]};`;
        })
        .join(' ');
};
