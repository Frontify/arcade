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

function IconOrderedList(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28 28"
            width="100%"
            height="100%"
            className={customClassName}
            {...props}
        >
            <path d="M5.953 25.312q0 1.25-0.852 1.969t-2.117 0.719q-1.656 0-2.688-1.031l0.891-1.375q0.766 0.703 1.656 0.703 0.453 0 0.789-0.227t0.336-0.664q0-1-1.641-0.875l-0.406-0.875q0.125-0.156 0.508-0.68t0.664-0.844 0.578-0.602v-0.016q-0.25 0-0.758 0.016t-0.758 0.016v0.828h-1.656v-2.375h5.203v1.375l-1.484 1.797q0.797 0.187 1.266 0.766t0.469 1.375zM5.984 15.516v2.484h-5.656q-0.094-0.562-0.094-0.844 0-0.797 0.367-1.453t0.883-1.062 1.031-0.742 0.883-0.68 0.367-0.703q0-0.391-0.227-0.602t-0.617-0.211q-0.719 0-1.266 0.906l-1.328-0.922q0.375-0.797 1.117-1.242t1.648-0.445q1.141 0 1.922 0.648t0.781 1.758q0 0.781-0.531 1.43t-1.172 1.008-1.18 0.789-0.555 0.82h1.984v-0.938h1.641zM28 20.5v3q0 0.203-0.148 0.352t-0.352 0.148h-19q-0.203 0-0.352-0.148t-0.148-0.352v-3q0-0.219 0.141-0.359t0.359-0.141h19q0.203 0 0.352 0.148t0.148 0.352zM6 6.453v1.547h-5.234v-1.547h1.672q0-0.641 0.008-1.906t0.008-1.891v-0.187h-0.031q-0.125 0.266-0.781 0.844l-1.109-1.188 2.125-1.984h1.656v6.312h1.687zM28 12.5v3q0 0.203-0.148 0.352t-0.352 0.148h-19q-0.203 0-0.352-0.148t-0.148-0.352v-3q0-0.219 0.141-0.359t0.359-0.141h19q0.203 0 0.352 0.148t0.148 0.352zM28 4.5v3q0 0.203-0.148 0.352t-0.352 0.148h-19q-0.203 0-0.352-0.148t-0.148-0.352v-3q0-0.203 0.148-0.352t0.352-0.148h19q0.203 0 0.352 0.148t0.148 0.352z" />
        </svg>
    );
}

const MemoIconOrderedList = React.memo(IconOrderedList);
export default MemoIconOrderedList;
