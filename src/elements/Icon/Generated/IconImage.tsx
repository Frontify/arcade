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

function IconImage(props: IconProps): React.ReactElement<IconProps> {
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
            name="IconImage"
            {...props}
        >
            <path d="M20.467 13.16V5.988c0-.41-.15-.761-.45-1.054-.301-.293-.662-.44-1.083-.44H5.066c-.421 0-.782.147-1.082.44-.3.293-.451.644-.451 1.054v7.752L9.05 11.21l6.763 4.482 4.653-2.53zm0 1.547l-4.851 2.496-6.565-4.447-5.518 2.443v2.813c0 .41.15.761.45 1.054.301.293.662.44 1.083.44h13.868c.421 0 .782-.147 1.082-.44.3-.293.451-.644.451-1.054v-3.305zM2 5.25c0-.621.225-1.151.676-1.59.451-.44.995-.66 1.632-.66h15.384c.637 0 1.18.22 1.632.66.45.439.676.969.676 1.59v13.5a2.14 2.14 0 01-.676 1.59c-.451.44-.995.66-1.632.66H4.308c-.637 0-1.18-.22-1.632-.66A2.14 2.14 0 012 18.75V5.25zM15.85 12c-.853 0-1.58-.293-2.182-.879a2.86 2.86 0 01-.902-2.127c0-.82.301-1.523.902-2.11.601-.585 1.329-.878 2.182-.878.854 0 1.581.293 2.182.879.602.586.902 1.289.902 2.11 0 .831-.3 1.54-.902 2.126-.6.586-1.328.879-2.182.879zm0-1.494c.421 0 .782-.147 1.082-.44.3-.293.451-.65.451-1.072 0-.41-.15-.762-.45-1.055-.301-.293-.662-.439-1.083-.439-.42 0-.781.146-1.082.44-.3.292-.45.644-.45 1.054 0 .422.15.78.45 1.072.3.293.662.44 1.082.44z" />
        </svg>
    );
}

const MemoIconImage = React.memo(IconImage);
export default MemoIconImage;
