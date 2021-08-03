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

function IconUpload(props: IconProps): React.ReactElement<IconProps> {
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
            name="IconUpload"
            {...props}
        >
            <path d="M17.42 18.297c.448 0 .87-.085 1.264-.254a3.255 3.255 0 001.984-3.009c0-.62-.158-1.183-.472-1.692a3.3 3.3 0 00-1.235-1.183 5.082 5.082 0 00.18-1.347c0-.719-.135-1.392-.404-2.021a5.265 5.265 0 00-1.1-1.647 5.113 5.113 0 00-3.646-1.512c-.788 0-1.524.167-2.208.502a5.134 5.134 0 00-1.73 1.355 3.897 3.897 0 00-.583-.165c-.2-.04-.404-.06-.614-.06a3.165 3.165 0 00-2.29.958c-.29.3-.52.646-.689 1.04-.17.395-.254.816-.254 1.266 0 .24.022.466.067.68.045.215.112.427.202.637a3.124 3.124 0 00-1.826 1.115 3.164 3.164 0 00-.734 2.074c0 .439.083.855.247 1.25.165.394.39.736.674 1.025.284.29.616.524.996.704.379.18.788.274 1.227.284h10.943zm3.008-6.737c.48.43.86.944 1.145 1.542.285.6.427 1.243.427 1.932 0 .628-.117 1.217-.352 1.766a4.68 4.68 0 01-.958 1.445 4.712 4.712 0 01-1.422.995c-.544.25-1.125.38-1.744.39H6.566c-.629 0-1.22-.12-1.774-.36a4.57 4.57 0 01-1.452-.988 4.699 4.699 0 01-.98-1.467A4.474 4.474 0 012 15.034a4.582 4.582 0 01.636-2.343c.205-.345.45-.659.734-.943.284-.285.596-.522.935-.711 0-.09-.002-.175-.007-.255a4.474 4.474 0 01.352-2.036c.24-.559.564-1.048.973-1.467.409-.42.893-.748 1.452-.988a4.474 4.474 0 011.781-.36c.13 0 .26.006.39.016s.259.03.389.06c.29-.27.601-.51.935-.719a6.459 6.459 0 013.421-.988 6.406 6.406 0 014.588 1.909 6.712 6.712 0 011.385 2.073 6.331 6.331 0 01.494 2.912l-.03.366zm-7.77.36v3.712c0 .18-.064.335-.194.464a.634.634 0 01-.464.195.651.651 0 01-.479-.195.634.634 0 01-.195-.464v-3.727l-1.242 1.242a.642.642 0 01-.472.195.642.642 0 01-.471-.195.661.661 0 01-.202-.464.633.633 0 01.202-.479l2.35-2.35a.625.625 0 01.225-.165.693.693 0 01.59.015c.096.05.173.12.233.21l2.305 2.29c.13.13.195.287.195.472a.642.642 0 01-.195.471.67.67 0 01-.471.202.596.596 0 01-.472-.202L12.66 11.92z" />
        </svg>
    );
}

const MemoIconUpload = React.memo(IconUpload);
export default MemoIconUpload;
