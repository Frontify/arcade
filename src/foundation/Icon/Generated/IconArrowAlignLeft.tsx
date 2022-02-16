
    import React, { memo } from "react";
    import { GeneratedIconProps } from "@foundation/Icon/IconProps";
    import { IconSize } from "@foundation/Icon/IconSize";

    import IconArrowAlignLeft12 from './IconArrowAlignLeft12';import IconArrowAlignLeft16 from './IconArrowAlignLeft16';import IconArrowAlignLeft20 from './IconArrowAlignLeft20';import IconArrowAlignLeft24 from './IconArrowAlignLeft24';import IconArrowAlignLeft32 from './IconArrowAlignLeft32'
    
    function IconArrowAlignLeft(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
        const size = props.size || IconSize.Size16;
        return (
            <span>
                {size === IconSize.Size12 && !props.filled && (
                    <IconArrowAlignLeft12 {...props}/>
                )}{size === IconSize.Size16 && !props.filled && (
                    <IconArrowAlignLeft16 {...props}/>
                )}{size === IconSize.Size20 && !props.filled && (
                    <IconArrowAlignLeft20 {...props}/>
                )}{size === IconSize.Size24 && !props.filled && (
                    <IconArrowAlignLeft24 {...props}/>
                )}{size === IconSize.Size32 && !props.filled && (
                    <IconArrowAlignLeft32 {...props}/>
                )}
            </span>
        );
    }
    
    const Memo = memo(IconArrowAlignLeft);
    export default Memo;
    