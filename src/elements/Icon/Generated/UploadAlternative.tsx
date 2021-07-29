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

function IconUploadAlternative(props: IconProps): React.ReactElement<IconProps> {
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
                d="M11.2857142,9.5766865 L11.2857142,15.7482814 C11.2857142,16.1416675 11.6055109,16.4594082 12,16.4594082 C12.3972394,16.4594082 12.7142857,16.1410259 12.7142857,15.7482814 L12.7142857,9.56689417 L14.5317775,11.3843859 C14.8065359,11.6591443 15.2614842,11.6618318 15.5404301,11.3828859 C15.8213207,11.1019952 15.8200476,10.6523509 15.5419301,10.3742334 L12.5084724,7.34077575 C12.3713392,7.20364258 12.1893199,7.13428375 12.0066995,7.13388808 C11.8216715,7.13211825 11.6401311,7.20196458 11.5013199,7.34077575 L8.46786225,10.3742334 C8.19310388,10.6489917 8.19041633,11.10394 8.46936226,11.3828859 C8.75025294,11.6637767 9.19989731,11.6625034 9.4780148,11.3843859 L11.2857142,9.5766865 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,20.5714286 C16.7338692,20.5714286 20.5714286,16.7338692 20.5714286,12 C20.5714286,7.26613072 16.7338692,3.42857142 12,3.42857142 C7.26613072,3.42857142 3.42857142,7.26613072 3.42857142,12 C3.42857142,16.7338692 7.26613072,20.5714286 12,20.5714286 Z"
                id="Icon_UploadAlternative"
            />
        </svg>
    );
}

const MemoIconUploadAlternative = React.memo(IconUploadAlternative);
export default MemoIconUploadAlternative;
