import React from "react";
import { IconProps } from "@elements/Icon/IconProps";
import { IconSize, IconSizeMap } from "@elements/Icon/IconSize";

function IconCalendar(props: IconProps): React.ReactElement<IconProps> {
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
            name="IconCalendar"
            {...props}
        >
            <path d="M16.09 4.928H7.91v.74a.913.913 0 01-.91.918.913.913 0 01-.91-.918v-.74H4.309a.773.773 0 00-.77.776V9.09h16.924V5.704a.773.773 0 00-.77-.776H17.91v.74a.913.913 0 01-.909.918.913.913 0 01-.91-.918v-.74zm1.82-1.552h1.782A2.318 2.318 0 0122 5.704v13.968A2.318 2.318 0 0119.692 22H4.308A2.318 2.318 0 012 19.672V5.704a2.318 2.318 0 012.308-2.328H6.09v-.459C6.09 2.411 6.498 2 7 2s.91.41.91.917v.459h8.18v-.459c0-.506.408-.917.91-.917s.91.41.91.917v.459zm2.552 7.266H3.538v9.03c0 .429.345.776.77.776h15.384c.425 0 .77-.347.77-.776v-9.03z" />
        </svg>
    );
}

const MemoIconCalendar = React.memo(IconCalendar);
export default MemoIconCalendar;
