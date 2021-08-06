import * as React from "react";
import { IconProps } from "@elements/Icon/IconProps";
import { IconSize, IconSizeMap } from "@elements/Icon/IconSize";

function IconSettings(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "tw-flex tw-items-center tw-justify-center tw-fill-current",
        IconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            className={customClassName}
            name="IconSettings"
            {...props}
        >
            <path d="M5.156 13.631a.478.478 0 01.408.334 6.7 6.7 0 00.5 1.188.478.478 0 01-.055.537c-.26.297-.482.557-.686.798a.751.751 0 00.055 1.039l1.095 1.095c.278.278.742.315 1.039.055.241-.204.52-.427.798-.686a.475.475 0 01.537-.056c.371.204.78.371 1.188.482a.478.478 0 01.334.409c.018.37.055.723.074 1.038a.77.77 0 00.779.705h1.558a.77.77 0 00.78-.705c.036-.315.055-.667.074-1.038a.478.478 0 01.333-.409 5.498 5.498 0 001.188-.482.478.478 0 01.538.056c.278.24.556.482.797.686.316.26.761.241 1.04-.055l1.094-1.095c.278-.278.315-.742.055-1.039-.204-.241-.426-.5-.686-.798a.481.481 0 01-.056-.537c.204-.371.371-.78.483-1.188a.478.478 0 01.408-.334c.37-.018.723-.055 1.039-.074a.77.77 0 00.705-.779V11.22a.77.77 0 00-.705-.78 16.072 16.072 0 00-1.04-.074.478.478 0 01-.407-.333 5.498 5.498 0 00-.483-1.188.478.478 0 01.056-.538c.26-.297.482-.556.686-.797a.751.751 0 00-.055-1.04l-1.095-1.094c-.278-.278-.742-.315-1.039-.055-.24.204-.5.426-.797.686a.481.481 0 01-.538.056 5.498 5.498 0 00-1.188-.483.478.478 0 01-.333-.408c-.019-.37-.056-.723-.075-1.039a.77.77 0 00-.779-.705h-1.558a.77.77 0 00-.78.705c-.036.316-.055.668-.073 1.04a.478.478 0 01-.334.407 5.498 5.498 0 00-1.188.483.478.478 0 01-.537-.056c-.297-.26-.557-.482-.798-.686a.751.751 0 00-1.039.055L5.378 6.471c-.278.278-.315.742-.055 1.039.204.24.427.5.686.797.13.149.149.353.056.538-.204.371-.371.78-.482 1.188a.478.478 0 01-.409.333c-.37.019-.723.056-1.038.075a.77.77 0 00-.705.779v1.558a.742.742 0 00.686.78c.315.036.668.055 1.039.073zm-3.154-.853V11.22c0-1.145.858-2.098 2.05-2.205.111-.007.142-.01.468-.035.248-.02.407-.031.512-.035-.38.038-.704.3-.828.712.14-.515.35-1.028.583-1.45a.954.954 0 00.147 1.041 61.005 61.005 0 01-.686-.798c-.763-.872-.682-2.187.12-2.99L5.431 4.4c.798-.852 2.097-.917 3.004-.17.27.23.533.455.815.702a.948.948 0 00-1.09-.121c.471-.26.984-.468 1.464-.599-.378.113-.639.437-.682.889.028-.552.046-.825.078-1.097A2.199 2.199 0 0111.222 2h1.558c1.145 0 2.098.858 2.205 2.05.007.111.01.141.035.468.02.247.031.407.035.512-.038-.38-.3-.705-.712-.828.515.14 1.028.35 1.505.612a.948.948 0 00-1.032.065l.877 1.128-.941-1.075c.282-.247.545-.472.798-.686.872-.763 2.187-.682 2.99.12L19.6 5.43c.852.798.917 2.097.17 3.003-.23.271-.455.534-.702.816a.948.948 0 00.121-1.091c.26.472.468.985.599 1.465-.113-.378-.437-.639-.889-.682.552.027.825.046 1.097.078A2.199 2.199 0 0122 11.22v1.558c0 1.145-.858 2.098-2.05 2.205-.111.007-.141.01-.468.035-.247.02-.407.031-.512.035.38-.038.705-.3.828-.712a6.938 6.938 0 01-.612 1.505.948.948 0 00-.065-1.033l-1.128.877 1.075-.94c.247.282.472.544.686.798.763.872.682 2.187-.12 2.99l-1.063 1.06c-.798.852-2.097.917-3.003.17a85.246 85.246 0 01-.805-.693c.3.263.732.305 1.08.112-.472.26-.985.468-1.465.599.378-.114.639-.437.682-.89-.027.552-.046.826-.078 1.098a2.199 2.199 0 01-2.202 2.004h-1.558c-1.145 0-2.098-.858-2.205-2.05a18.612 18.612 0 00-.035-.468c-.02-.248-.031-.407-.035-.512.038.38.3.704.712.828a6.754 6.754 0 01-1.45-.583c.318.159.74.117 1.1-.2-.169.157-.315.285-.49.433l-.367.306c-.872.763-2.187.682-2.99-.12l-1.06-1.063c-.852-.798-.917-2.097-.17-3.004.23-.27.456-.533.702-.815a.948.948 0 00-.12 1.09 8.162 8.162 0 01-.618-1.464c.113.378.437.639.889.682a15.99 15.99 0 01-1.135-.082c-1.128-.102-2-1.089-1.948-2.198zm9.999 3.507a4.285 4.285 0 110-8.571 4.285 4.285 0 010 8.57zm0-1.429a2.857 2.857 0 100-5.714 2.857 2.857 0 000 5.714z" />
        </svg>
    );
}

const MemoIconSettings = React.memo(IconSettings);
export default MemoIconSettings;
