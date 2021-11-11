import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconHeader(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
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
            viewBox="0 0 28 28"
            width="100%"
            height="100%"
            className={customClassName}
            style={style}
            name="IconHeader"
            {...props}
        >
            <path d="M26.281 26c-1.375 0-2.766-.109-4.156-.109-1.375 0-2.75.109-4.125.109-.531 0-.781-.578-.781-1.031 0-1.391 1.563-.797 2.375-1.328.516-.328.516-1.641.516-2.188l-.016-6.109c0-.172 0-.328-.016-.484-.25-.078-.531-.063-.781-.063H8.75c-.266 0-.547-.016-.797.063-.016.156-.016.313-.016.484l-.016 5.797c0 .594 0 2.219.578 2.562.812.5 2.656-.203 2.656 1.203 0 .469-.219 1.094-.766 1.094-1.453 0-2.906-.109-4.344-.109-1.328 0-2.656.109-3.984.109-.516 0-.75-.594-.75-1.031 0-1.359 1.437-.797 2.203-1.328.5-.344.516-1.687.516-2.234l-.016-.891V7.813c0-.75.109-3.156-.594-3.578-.781-.484-2.453.266-2.453-1.141 0-.453.203-1.094.75-1.094 1.437 0 2.891.109 4.328.109C7.358 2.109 8.686 2 9.998 2c.562 0 .781.625.781 1.094 0 1.344-1.547.688-2.312 1.172-.547.328-.547 1.937-.547 2.5l.016 5c0 .172 0 .328.016.5.203.047.406.047.609.047h10.922c.187 0 .391 0 .594-.047.016-.172.016-.328.016-.5l.016-5c0-.578 0-2.172-.547-2.5-.781-.469-2.344.156-2.344-1.172 0-.469.219-1.094.781-1.094 1.375 0 2.75.109 4.125.109 1.344 0 2.688-.109 4.031-.109.562 0 .781.625.781 1.094 0 1.359-1.609.672-2.391 1.156-.531.344-.547 1.953-.547 2.516l.016 14.734c0 .516.031 1.875.531 2.188.797.5 2.484-.141 2.484 1.219 0 .453-.203 1.094-.75 1.094z" />
        </svg>
    );
}

const MemoIconHeader = React.memo(IconHeader);
export default MemoIconHeader;
