import * as React from "react";
import { IconProps, IconSize } from "@elements/Icon/Icon";
const iconSizeMap = {
    [IconSize.Size8]: "h-2 w-2",
    [IconSize.Size12]: "h-3 w-3",
    [IconSize.Size16]: "h-4 w-4",
    [IconSize.Size20]: "h-5 w-5",
    [IconSize.Size24]: "h-6 w-6",
    [IconSize.Size32]: "h-8 w-8",
};

function IconFocalPoint(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="100%"
            className={customClassName}
            {...props}
        >
            <g transform="translate(3.000000, 2.000000)">
                <path d="M16.4682617,17.4420166 L16.4682617,13.1920166 C16.4682617,12.777803 16.8040482,12.4420166 17.2182617,12.4420166 C17.6324753,12.4420166 17.9682617,12.777803 17.9682617,13.1920166 L17.9682617,18.1920166 C17.9682617,18.6062302 17.6324753,18.9420166 17.2182617,18.9420166 L12.2182617,18.9420166 C11.8040482,18.9420166 11.4682617,18.6062302 11.4682617,18.1920166 C11.4682617,17.777803 11.8040482,17.4420166 12.2182617,17.4420166 L16.4682617,17.4420166 Z M1.55456543,17.4420166 L5.80456543,17.4420166 C6.21877899,17.4420166 6.55456543,17.777803 6.55456543,18.1920166 C6.55456543,18.6062302 6.21877899,18.9420166 5.80456543,18.9420166 L0.80456543,18.9420166 C0.390351867,18.9420166 0.0545654297,18.6062302 0.0545654297,18.1920166 L0.0545654297,13.1920166 C0.0545654297,12.777803 0.390351867,12.4420166 0.80456543,12.4420166 C1.21877899,12.4420166 1.55456543,12.777803 1.55456543,13.1920166 L1.55456543,17.4420166 Z M16.4568481,2.49755859 L12.2068481,2.49755859 C11.7926346,2.49755859 11.4568481,2.16177216 11.4568481,1.74755859 C11.4568481,1.33334503 11.7926346,0.997558594 12.2068481,0.997558594 L17.2068481,0.997558594 C17.6210617,0.997558594 17.9568481,1.33334503 17.9568481,1.74755859 L17.9568481,6.74755859 C17.9568481,7.16177216 17.6210617,7.49755859 17.2068481,7.49755859 C16.7926346,7.49755859 16.4568481,7.16177216 16.4568481,6.74755859 L16.4568481,2.49755859 Z M1.54315186,2.49755859 L1.54315186,6.74755859 C1.54315186,7.16177216 1.20736542,7.49755859 0.793151855,7.49755859 C0.378938293,7.49755859 0.0431518555,7.16177216 0.0431518555,6.74755859 L0.0431518555,1.74755859 C0.0431518555,1.33334503 0.378938293,0.997558594 0.793151855,0.997558594 L5.79315186,0.997558594 C6.20736542,0.997558594 6.54315186,1.33334503 6.54315186,1.74755859 C6.54315186,2.16177216 6.20736542,2.49755859 5.79315186,2.49755859 L1.54315186,2.49755859 Z M9,11 C8.44771525,11 8,10.5522847 8,10 C8,9.44771525 8.44771525,9 9,9 C9.55228475,9 10,9.44771525 10,10 C10,10.5522847 9.55228475,11 9,11 Z" />
            </g>
        </svg>
    );
}

const MemoIconFocalPoint = React.memo(IconFocalPoint);
export default MemoIconFocalPoint;
