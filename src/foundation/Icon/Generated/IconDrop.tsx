import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconDrop(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = [
        "tw-flex tw-items-center tw-justify-center tw-fill-current",
        IconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 33 33"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            name="IconDrop"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.215 20.19c0 1.06-.196 2.157-.586 3.294a10.09 10.09 0 0 1-1.745 3.125c-.773.947-1.736 1.728-2.89 2.344-1.155.616-2.497.925-4.024.925-1.51 0-2.839-.309-3.985-.925a9.59 9.59 0 0 1-2.89-2.344 9.954 9.954 0 0 1-1.758-3.125c-.39-1.137-.586-2.235-.586-3.294 0-2.205.482-4.327 1.445-6.367.964-2.04 2.023-3.846 3.177-5.417 1.155-1.57 2.21-2.83 3.164-3.776l1.433-1.42 1.432 1.42c.955.946 2.01 2.205 3.164 3.776 1.155 1.571 2.214 3.377 3.177 5.417a15.023 15.023 0 0 1 1.472 6.367ZM15.983 6.091c-.49.526-.986 1.076-1.485 1.651a24.6 24.6 0 0 0-1.471 1.875 32.255 32.255 0 0 0-1.784 2.708c-.53.903-.972 1.797-1.328 2.683a16.64 16.64 0 0 0-.82 2.63 11.857 11.857 0 0 0-.287 2.552c0 .99.178 1.944.534 2.865.356.92.85 1.732 1.484 2.435a7.315 7.315 0 0 0 2.266 1.692c.877.426 1.836.638 2.878.638 1.059 0 2.027-.212 2.903-.638a7.473 7.473 0 0 0 2.279-1.692 7.68 7.68 0 0 0 1.497-2.435c.356-.92.526-1.875.508-2.865 0-.833-.1-1.68-.3-2.539-.199-.86-.477-1.732-.833-2.617a21.196 21.196 0 0 0-1.315-2.682 30.033 30.033 0 0 0-1.77-2.709c-.47-.66-.96-1.289-1.472-1.888a51.358 51.358 0 0 0-1.484-1.664Zm-.612 17.042c.4-.4.599-.886.599-1.459 0-.572-.2-1.058-.6-1.458-.398-.4-.876-.599-1.431-.599-.573 0-1.06.2-1.459.6-.4.399-.599.885-.599 1.457 0 .573.2 1.06.6 1.459.399.4.885.599 1.457.599.556 0 1.034-.2 1.433-.6Z"
            />
        </svg>
    );
}

const Memo = memo(IconDrop);
export default Memo;
