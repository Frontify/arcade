
    import React, { memo } from "react";
    import { GeneratedIconProps } from "@foundation/Icon/IconProps";
    import { IconSize } from "@foundation/Icon/IconSize";

    import IconArrowStretchBox12 from './IconArrowStretchBox12';import IconArrowStretchBox16 from './IconArrowStretchBox16';import IconArrowStretchBox20 from './IconArrowStretchBox20';import IconArrowStretchBox24 from './IconArrowStretchBox24';import IconArrowStretchBox32 from './IconArrowStretchBox32'
    
    function IconArrowStretchBox(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
        const size = props.size || IconSize.Size16;
        return (
            <span>
                {size === IconSize.Size12 && !props.filled && (
                    <IconArrowStretchBox12/>
                )}{size === IconSize.Size16 && !props.filled && (
                    <IconArrowStretchBox16/>
                )}{size === IconSize.Size20 && !props.filled && (
                    <IconArrowStretchBox20/>
                )}{size === IconSize.Size24 && !props.filled && (
                    <IconArrowStretchBox24/>
                )}{size === IconSize.Size32 && !props.filled && (
                    <IconArrowStretchBox32/>
                )}
            </span>
        );
    }
    
    const Memo = memo(IconArrowStretchBox);
    export default Memo;
    