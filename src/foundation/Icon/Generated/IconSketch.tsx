import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconSketch(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = [
        "tw-flex tw-items-center tw-justify-center tw-fill-current",
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
            name="IconSketch"
            {...props}
        >
            <path d="m15.02 2 .032.002L15 2a.755.755 0 0 1 .507.197l-.073-.059a.753.753 0 0 1 .061.049l.012.01 6 5.5a.68.68 0 0 1 .012.012l.011.01.057.064a.743.743 0 0 1 .068.101l.036.074a.745.745 0 0 1 .008.02l.002.006.006.015c.01.026.017.054.024.082l.003.015.004.02a.749.749 0 0 1 .011.096v.016l.001.022v.017a.75.75 0 0 1-.002.04l-.001.01.003-.067a.756.756 0 0 1-.01.127l-.007.033a.744.744 0 0 1-.02.07l-.007.023a.745.745 0 0 1-.09.174l.045-.073a.75.75 0 0 1-.108.153l.067-.088-.003.008-9 13-.006.008a.745.745 0 0 1-.052.065l-.012.013-.008.009a.75.75 0 0 1-.072.065l-.011.009a.754.754 0 0 1-.03.02l-.016.012a.746.746 0 0 1-.042.026l-.023.012.082-.05a.754.754 0 0 1-.221.105l-.02.006a.728.728 0 0 1-.085.016l-.019.002h-.012l-.012.003A.642.642 0 0 1 12 22h-.033a.744.744 0 0 1-.094-.01l-.017-.004a.746.746 0 0 1-.023-.005l-.01-.002a.734.734 0 0 1-.054-.015l-.012-.004a.75.75 0 0 1-.184-.093l.083.05a.754.754 0 0 1-.066-.039l-.017-.011a.377.377 0 0 1-.013-.01l-.016-.011a.634.634 0 0 1-.09-.083l-.013-.013a.753.753 0 0 1-.021-.025l-.01-.011a.746.746 0 0 1-.02-.029l-.007-.008-9-13-.004-.008-.007-.01a.747.747 0 0 1-.033-.055l.044.073a.755.755 0 0 1-.122-.3l-.002-.01a.75.75 0 0 1-.009-.095V8.237a.755.755 0 0 1 .005-.07V8.16l.002-.012a.748.748 0 0 1 .009-.052l.003-.015a.744.744 0 0 1 .024-.082l.006-.015a.769.769 0 0 1 .01-.026l.036-.074a.744.744 0 0 1 .068-.101l.057-.063a.755.755 0 0 1 .017-.017l.006-.006 6-5.5.012-.01a.753.753 0 0 1 .06-.049l-.072.06a.755.755 0 0 1 .405-.191l.05-.005L8.98 2Zm-.963 7H9.942l2.057 8.915L14.057 9Zm5.511 0h-3.972l-1.987 8.608L19.568 9ZM8.403 9H4.431l5.959 8.607L8.403 9Zm5.847-5.5h-4.5v4h4.5v-4Zm-6 .953L4.926 7.5H8.25V4.453Zm7.5.001V7.5h3.323L15.75 4.454Z" />
        </svg>
    );
}

const Memo = memo(IconSketch);
export default Memo;
