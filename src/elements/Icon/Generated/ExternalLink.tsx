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

function IconExternalLink(props: IconProps): React.ReactElement<IconProps> {
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
                d="M18.8430967,4.31818182 L15.6363636,4.31818182 C15.1342866,4.31818182 14.7272727,3.91116795 14.7272727,3.40909091 C14.7272727,2.90701386 15.1342866,2.5 15.6363636,2.5 L21.0909091,2.5 C21.5929861,2.5 22,2.90701386 22,3.40909091 L22,8.86363636 C22,9.36571341 21.5929861,9.77272727 21.0909091,9.77272727 C20.588832,9.77272727 20.1818182,9.36571341 20.1818182,8.86363636 L20.1818182,5.55075777 L13.5519153,12.1806607 C13.1968932,12.5356828 12.6212886,12.5356828 12.2662666,12.1806607 C11.9112445,11.8256386 11.9112445,11.2500341 12.2662666,10.895012 L18.8430967,4.31818182 Z M11.1087528,4.31818182 C11.6108298,4.31818182 12.0178437,4.72519568 12.0178437,5.22727273 C12.0178437,5.72934977 11.6108298,6.13636364 11.1087528,6.13636364 L4.72727273,6.13636364 C4.22519568,6.13636364 3.81818182,6.5433775 3.81818182,7.04545455 L3.81818182,18.8636364 C3.81818182,19.3657134 4.22519568,19.7727273 4.72727273,19.7727273 L17.4545455,19.7727273 C17.9566225,19.7727273 18.3636364,19.3657134 18.3636364,18.8636364 L18.3636364,13.4178648 C18.3636364,12.9157877 18.7706502,12.5087739 19.2727273,12.5087739 C19.7748043,12.5087739 20.1818182,12.9157877 20.1818182,13.4178648 L20.1818182,18.8636364 C20.1818182,20.3698675 18.9607766,21.5909091 17.4545455,21.5909091 L4.72727273,21.5909091 C3.22104159,21.5909091 2,20.3698675 2,18.8636364 L2,7.04545455 C2,5.53922341 3.22104159,4.31818182 4.72727273,4.31818182 L11.1087528,4.31818182 Z"
                id="Icon_ExternalLink"
            />
        </svg>
    );
}

const MemoIconExternalLink = React.memo(IconExternalLink);
export default MemoIconExternalLink;
