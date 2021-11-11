import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconUnderline(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const { size } = props;
    const style =
        typeof size === "string"
            ? {
                  width: size,
                  height: size,
              }
            : {
                  width: IconSizeMap[size || IconSize.Size16],
                  height: IconSizeMap[size || IconSize.Size16],
              };
    const customClassName = "tw-flex tw-items-center tw-justify-center tw-fill-current";
    return (
        <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 28"
            width="100%"
            height="100%"
            className={customClassName}
            style={style}
            name="IconUnderline"
            {...props}
        >
            <path d="M.75 3.484c-.281-.016-.516-.016-.703-.063L0 2.046c.203-.016.406-.016.625-.016.547 0 1.141.016 1.75.063 1.469.078 2.344.109 2.594.109.891 0 1.766-.016 2.625-.047.844-.031 1.609-.063 2.281-.078.656 0 1.109-.016 1.344-.031l-.016.219.031 1v.141c-.625.094-1.266.141-1.937.141-.625 0-1.031.125-1.234.391-.141.156-.203.844-.203 2.063 0 .375.016.672.016.906l.016 3.578.219 4.375c.063 1.266.313 2.312.797 3.156a3.787 3.787 0 001.5 1.437c.938.5 1.859.734 2.766.734 1.062 0 2.063-.141 2.984-.438a4.871 4.871 0 001.547-.797c.484-.359.828-.688 1.016-1a6.641 6.641 0 00.828-1.781c.219-.766.328-1.953.328-3.578 0-2.797-.203-2.875-.438-6.406l-.063-.922c-.047-.672-.156-1.141-.375-1.375-.344-.359-.75-.547-1.203-.531l-1.563.031-.219-.047.031-1.344h1.313l3.203.156c1.062.047 2.078-.047 3.063-.156l.281.031c.063.391.094.656.094.797s-.031.297-.063.484a6.096 6.096 0 01-1.313.203c-.734.109-1.156.187-1.234.266-.141.141-.234.344-.234.641 0 .203.031.516.047.906 0 0 .125.281.344 6.188.078 2.359-.078 3.953-.234 4.75s-.375 1.437-.641 1.906c-.406.688-1 1.328-1.75 1.922-.766.578-1.703 1.047-2.844 1.391S13.61 22 12.095 22c-1.719 0-3.203-.234-4.438-.719s-2.172-1.125-2.797-1.906-1.062-1.797-1.297-3.047c-.172-.859-.25-2.094-.25-3.703V7.422c0-1.969-.094-3.078-.266-3.328-.25-.359-1.016-.578-2.297-.609zM24 25.5v-1c0-.281-.219-.5-.5-.5H.5c-.281 0-.5.219-.5.5v1c0 .281.219.5.5.5h23c.281 0 .5-.219.5-.5z" />
        </svg>
    );
}

const MemoIconUnderline = React.memo(IconUnderline);
export default MemoIconUnderline;
