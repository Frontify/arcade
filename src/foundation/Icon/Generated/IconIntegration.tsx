import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconIntegration(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
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
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            style={style}
            name="IconIntegration"
            {...props}
        >
            <path d="M15.6 20.4v-4.04a.8.8 0 011.371-.56 2 2 0 100-2.8.8.8 0 01-1.371-.56V8.4h-4.04A.8.8 0 0111 7.029a2 2 0 10-2.8 0A.8.8 0 017.64 8.4H3.6v12h2.605a3.6 3.6 0 116.79 0H15.6zm2.8-9.6a3.6 3.6 0 11-1.2 6.995V20.4a1.6 1.6 0 01-1.6 1.6h-4.04a.8.8 0 01-.56-1.371 2 2 0 10-2.8 0A.8.8 0 017.64 22H3.6A1.6 1.6 0 012 20.4v-12a1.6 1.6 0 011.6-1.6h2.605a3.6 3.6 0 116.79 0H15.6a1.6 1.6 0 011.6 1.6v2.605c.38-.134.784-.205 1.2-.205z" />
        </svg>
    );
}

const MemoIconIntegration = React.memo(IconIntegration);
export default MemoIconIntegration;
