import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconGuidelines(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
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
            name="IconGuidelines"
            {...props}
        >
            <path d="M2.5 20.034V3.966c0-.408.142-.755.427-1.04.284-.284.63-.426 1.039-.426h4.379c.408 0 .754.142 1.039.427.284.284.427.63.427 1.039v.427l.222-.39c.198-.346.492-.572.882-.677.39-.105.757-.06 1.104.139l3.766 2.17c.347.211.572.511.677.9.106.39.06.758-.139 1.105l-.167.278.279-.167a1.406 1.406 0 011.104-.14c.39.106.683.332.88.678l2.172 3.767c.198.346.244.714.139 1.104-.105.39-.33.683-.677.881l-.241.148h.222c.408 0 .755.143 1.04.427.284.285.426.631.426 1.04v4.378c0 .408-.142.755-.427 1.04-.284.284-.63.426-1.039.426H3.966c-.21 0-.402-.037-.575-.111a1.47 1.47 0 01-.464-.316 1.47 1.47 0 01-.316-.464 1.445 1.445 0 01-.111-.575zm1.466-5.845h.185l4.194-7.273V4.689a.696.696 0 00-.214-.51.696.696 0 00-.51-.213H4.69a.696.696 0 00-.51.213.696.696 0 00-.213.51v9.5zm12.932 0l1.8-1.039a.68.68 0 00.334-.436.708.708 0 00-.074-.547l-1.447-2.523a.68.68 0 00-.436-.334.761.761 0 00-.566.074l-8.331 4.805h8.72zm-3.265-4.824l1.057-1.818a.727.727 0 00.075-.557.682.682 0 00-.334-.445l-2.524-1.447a.708.708 0 00-.547-.075.67.67 0 00-.436.353L6.1 13.726l7.533-4.36zm5.733 6.309H4.746a.696.696 0 00-.511.213.696.696 0 00-.214.51v2.895c0 .198.072.368.214.51a.696.696 0 00.51.214h14.621a.696.696 0 00.51-.214.696.696 0 00.214-.51v-2.895a.696.696 0 00-.214-.51.696.696 0 00-.51-.213z" />
        </svg>
    );
}

const MemoIconGuidelines = React.memo(IconGuidelines);
export default MemoIconGuidelines;
