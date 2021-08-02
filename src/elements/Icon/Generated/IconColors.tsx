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

function IconColors(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            className={customClassName}
            {...props}
        >
            <path d="M11.924 4.16c-.368.394-.74.807-1.113 1.238-.385.443-.752.912-1.104 1.407-.495.677-.94 1.354-1.338 2.03-.397.678-.729 1.349-.996 2.013a12.48 12.48 0 00-.615 1.972 8.893 8.893 0 00-.215 1.914c0 .743.133 1.459.4 2.149s.638 1.299 1.114 1.826c.475.527 1.041.95 1.699 1.27a4.878 4.878 0 002.158.478c.794 0 1.52-.16 2.178-.478a5.604 5.604 0 001.709-1.27 5.76 5.76 0 001.123-1.826c.267-.69.394-1.406.38-2.149 0-.625-.074-1.26-.224-1.904a13.392 13.392 0 00-.625-1.963 15.897 15.897 0 00-.986-2.012 22.528 22.528 0 00-1.328-2.03c-.352-.496-.72-.968-1.104-1.417a38.55 38.55 0 00-1.113-1.248zm6.924 10.574c0 .795-.147 1.618-.44 2.471A7.567 7.567 0 0117.1 19.55a7.037 7.037 0 01-2.168 1.758c-.866.462-1.872.693-3.018.693-1.133 0-2.129-.231-2.988-.693a7.193 7.193 0 01-2.168-1.758 7.465 7.465 0 01-1.319-2.344C5.146 16.352 5 15.53 5 14.735c0-1.654.361-3.246 1.084-4.776.723-1.53 1.517-2.884 2.383-4.063.866-1.178 1.657-2.122 2.373-2.832L11.914 2l1.074 1.064c.716.71 1.507 1.654 2.373 2.832.866 1.179 1.66 2.533 2.383 4.063a11.267 11.267 0 011.104 4.775zm-6.934 1.114c0 .43-.15.794-.45 1.093-.299.3-.657.45-1.073.45-.43 0-.795-.15-1.094-.45-.3-.3-.45-.664-.45-1.093 0-.43.15-.795.45-1.094.3-.3.664-.45 1.094-.45.416 0 .774.15 1.074.45.3.3.45.664.45 1.094z" />
        </svg>
    );
}

const MemoIconColors = React.memo(IconColors);
export default MemoIconColors;
