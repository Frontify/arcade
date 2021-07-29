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

function IconFigureTextBottom(props: IconProps): React.ReactElement<IconProps> {
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
            <path
                id="Icon_FigureTextBottom"
                d="M6.79553223,4.50299072 C6.10517629,4.50299072 5.54553223,5.06263479 5.54553223,5.75299072 L5.54553223,12.2470093 C5.54553223,12.9373652 6.10517629,13.4970093 6.79553223,13.4970093 L17.2589111,13.4970093 C17.9492671,13.4970093 18.5089111,12.9373652 18.5089111,12.2470093 L18.5089111,5.75299072 C18.5089111,5.06263479 17.9492671,4.50299072 17.2589111,4.50299072 L6.79553223,4.50299072 Z M6.79553223,3.00299072 L17.2589111,3.00299072 C18.7776942,3.00299072 20.0089111,4.23420766 20.0089111,5.75299072 L20.0089111,12.2470093 C20.0089111,13.7657923 18.7776942,14.9970093 17.2589111,14.9970093 L6.79553223,14.9970093 C5.27674916,14.9970093 4.04553223,13.7657923 4.04553223,12.2470093 L4.04553223,5.75299072 C4.04553223,4.23420766 5.27674916,3.00299072 6.79553223,3.00299072 Z M8.75650024,18.2093506 C8.34228668,18.2093506 8.00650024,17.8735641 8.00650024,17.4593506 C8.00650024,17.045137 8.34228668,16.7093506 8.75650024,16.7093506 L15.2565002,16.7093506 C15.6707138,16.7093506 16.0065002,17.045137 16.0065002,17.4593506 C16.0065002,17.8735641 15.6707138,18.2093506 15.2565002,18.2093506 L8.75650024,18.2093506 Z M9.70205688,20.9660645 C9.28784332,20.9660645 8.95205688,20.630278 8.95205688,20.2160645 C8.95205688,19.8018509 9.28784332,19.4660645 9.70205688,19.4660645 L14.2020569,19.4660645 C14.6162704,19.4660645 14.9520569,19.8018509 14.9520569,20.2160645 C14.9520569,20.630278 14.6162704,20.9660645 14.2020569,20.9660645 L9.70205688,20.9660645 Z"
            />
        </svg>
    );
}

const MemoIconFigureTextBottom = React.memo(IconFigureTextBottom);
export default MemoIconFigureTextBottom;
