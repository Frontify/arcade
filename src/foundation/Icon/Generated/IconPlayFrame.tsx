
    import React, { memo } from "react";
    import { GeneratedIconProps } from "@foundation/Icon/IconProps";
    import { IconSize } from "@foundation/Icon/IconSize";

    import IconPlayFrame12 from './IconPlayFrame12';import IconPlayFrame16 from './IconPlayFrame16';import IconPlayFrame20 from './IconPlayFrame20';import IconPlayFrame24 from './IconPlayFrame24';import IconPlayFrame32 from './IconPlayFrame32'
    
    function IconPlayFrame(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
        const size = props.size || IconSize.Size16;
        return (
            <span>
                {size === IconSize.Size12 && !props.filled && (
                    <IconPlayFrame12 {...props}/>
                )}{size === IconSize.Size16 && !props.filled && (
                    <IconPlayFrame16 {...props}/>
                )}{size === IconSize.Size20 && !props.filled && (
                    <IconPlayFrame20 {...props}/>
                )}{size === IconSize.Size24 && !props.filled && (
                    <IconPlayFrame24 {...props}/>
                )}{size === IconSize.Size32 && !props.filled && (
                    <IconPlayFrame32 {...props}/>
                )}
            </span>
        );
    }
    
    const Memo = memo(IconPlayFrame);
    export default Memo;
    