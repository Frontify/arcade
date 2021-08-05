import * as React from "react";
import { IconProps } from "@elements/Icon/IconProps";
import { IconSize, IconSizeMap } from "@elements/Icon/IconSize";

function IconActivity(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        IconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            name="IconActivity"
            {...props}
        >
            <path d="M14.924 15.438l-1.53 1.386c.013.026.02.056.02.088V17c0 .39-.14.726-.417 1.006-.277.28-.61.42-.997.42-.374 0-.697-.127-.968-.381a1.382 1.382 0 01-.445-.947l-1.433-.996a1.818 1.818 0 01-.33.127 1.357 1.357 0 01-.367.048 1.37 1.37 0 01-.997-.41 1.369 1.369 0 01-.417-1.015c0-.391.139-.726.417-1.006.277-.28.61-.42.997-.42s.72.14.997.42c.277.28.416.615.416 1.006l1.356.957c.103-.079.222-.137.358-.176.135-.04.274-.059.416-.059.09 0 .18.01.271.03.09.019.18.042.271.068l1.588-1.445v-.079c0-.403.135-.742.406-1.015.272-.274.607-.41 1.007-.41.388 0 .72.136.997.41.278.273.417.612.417 1.015 0 .391-.139.726-.417 1.006-.277.28-.61.42-.997.42-.116 0-.226-.013-.329-.039a1.904 1.904 0 01-.29-.098zM3.5 4.148c0-.599.207-1.106.62-1.523C4.533 2.208 5.03 2 5.61 2h12.76c.594 0 1.097.208 1.51.625.413.417.62.924.62 1.523v15.704c0 .599-.207 1.106-.62 1.523a2.046 2.046 0 01-1.51.625H5.61c-.58 0-1.077-.208-1.49-.625a2.082 2.082 0 01-.62-1.523V4.148zm1.413.704v14.296c0 .391.14.726.417 1.006.277.28.61.42.997.42h11.346c.387 0 .72-.14.997-.42.278-.28.417-.615.417-1.006V4.852c0-.391-.14-.726-.417-1.006-.277-.28-.61-.42-.997-.42H6.327c-.387 0-.72.14-.997.42-.278.28-.417.615-.417 1.006zM7.043 7c0-.195.068-.365.204-.508a.676.676 0 01.513-.215h8.48c.194 0 .362.072.504.215a.697.697 0 01.213.508.697.697 0 01-.213.508.685.685 0 01-.504.215H7.76a.676.676 0 01-.513-.215A.714.714 0 017.043 7zm0 2.852c0-.196.068-.362.204-.498a.67.67 0 01.493-.206h5.673c.194 0 .362.069.504.206a.666.666 0 01.213.498.697.697 0 01-.213.507.685.685 0 01-.504.215H7.74a.67.67 0 01-.493-.205.705.705 0 01-.204-.517z" />
        </svg>
    );
}

const MemoIconActivity = React.memo(IconActivity);
export default MemoIconActivity;
