import * as React from "react";
import IconProps from "@elements/Icon/IconProps";
import IconSize from "@elements/Icon/IconSize";
const iconSizeMap = {
    [IconSize.Size8]: "h-2 w-2",
    [IconSize.Size12]: "h-3 w-3",
    [IconSize.Size16]: "h-4 w-4",
    [IconSize.Size20]: "h-5 w-5",
    [IconSize.Size24]: "h-6 w-6",
    [IconSize.Size32]: "h-8 w-8",
};

function IconAnnotations(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            {...props}
        >
            <path d="M16.643 22a5.357 5.357 0 110-10.714 5.357 5.357 0 010 10.714zm0-1.429a3.929 3.929 0 100-7.857 3.929 3.929 0 000 7.857zm-.656-4.996h-1.29v-.077c0-.802.58-1.684 1.923-1.684 1.178 0 1.937.648 1.937 1.5 0 .783-.525 1.232-.944 1.665l-.985 1.028v.058h2.01v1.078h-3.86v-.844l1.861-1.884c.272-.272.572-.575.572-.963 0-.314-.261-.575-.618-.575-.38 0-.61.287-.61.61 0 .03.004.069.004.088zm-8.63-2.86A5.357 5.357 0 117.357 2a5.357 5.357 0 010 10.714zm0-1.43a3.929 3.929 0 100-7.856 3.929 3.929 0 000 7.857zM8.44 9.858H7.077V5.86h-.065l-1.166.813V5.48l1.231-.86H8.44v5.237z" />
        </svg>
    );
}

const MemoIconAnnotations = React.memo(IconAnnotations);
export default MemoIconAnnotations;
