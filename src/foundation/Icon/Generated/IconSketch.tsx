import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconSketch(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
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
            name="IconSketch"
            {...props}
        >
            <path d="M15.02 2l.032.002L15 2a.755.755 0 01.507.197l-.073-.059a.753.753 0 01.061.049l.012.01 6 5.5a.68.68 0 01.012.012l.011.01.057.064a.743.743 0 01.068.101l.036.074a.745.745 0 01.008.02l.002.006.006.015c.01.026.017.054.024.082l.003.015.004.02a.749.749 0 01.011.096v.016l.001.022v.017a.75.75 0 01-.002.04l-.001.01.003-.067a.756.756 0 01-.01.127l-.007.033a.744.744 0 01-.02.07l-.007.023a.745.745 0 01-.09.174l.045-.073a.75.75 0 01-.108.153l.067-.088-.003.008-9 13-.006.008a.745.745 0 01-.052.065l-.012.013-.008.009a.75.75 0 01-.072.065l-.011.009a.754.754 0 01-.03.02l-.016.012a.746.746 0 01-.042.026l-.023.012.082-.05a.754.754 0 01-.221.105l-.02.006a.728.728 0 01-.085.016l-.019.002h-.012l-.012.003A.642.642 0 0112 22h-.033a.744.744 0 01-.094-.01l-.017-.004a.746.746 0 01-.023-.005l-.01-.002a.734.734 0 01-.054-.015l-.012-.004a.75.75 0 01-.184-.093l.083.05a.754.754 0 01-.066-.039l-.017-.011a.377.377 0 01-.013-.01l-.016-.011a.634.634 0 01-.09-.083l-.013-.013a.753.753 0 01-.021-.025l-.01-.011a.746.746 0 01-.02-.029l-.007-.008-9-13-.004-.008-.007-.01a.747.747 0 01-.033-.055l.044.073a.755.755 0 01-.122-.3l-.002-.01a.75.75 0 01-.009-.095V8.237a.755.755 0 01.005-.07V8.16l.002-.012a.748.748 0 01.009-.052l.003-.015a.744.744 0 01.024-.082l.006-.015a.769.769 0 01.01-.026l.036-.074a.744.744 0 01.068-.101l.057-.063a.755.755 0 01.017-.017l.006-.006 6-5.5.012-.01a.753.753 0 01.06-.049l-.072.06a.755.755 0 01.405-.191l.05-.005L8.98 2zm-.963 7H9.942l2.057 8.915L14.057 9zm5.511 0h-3.972l-1.987 8.608L19.568 9zM8.403 9H4.431l5.959 8.607L8.403 9zm5.847-5.5h-4.5v4h4.5v-4zm-6 .953L4.926 7.5H8.25V4.453zm7.5.001V7.5h3.323L15.75 4.454z" />
        </svg>
    );
}

const MemoIconSketch = React.memo(IconSketch);
export default MemoIconSketch;
