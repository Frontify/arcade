
    import React, { memo } from "react";
    import { GeneratedIconProps } from "@foundation/Icon/IconProps";
    import { IconSize } from "@foundation/Icon/IconSize";

    import IconDrops12 from './IconDrops12';import IconDrops16 from './IconDrops16';import IconDrops20 from './IconDrops20';import IconDrops24 from './IconDrops24';import IconDrops32 from './IconDrops32'
    
    function IconDrops(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
        const size = props.size || IconSize.Size16;
        return (
            <span>
                {size === IconSize.Size12 && !props.filled && (
                    <IconDrops12/>
                )}{size === IconSize.Size16 && !props.filled && (
                    <IconDrops16/>
                )}{size === IconSize.Size20 && !props.filled && (
                    <IconDrops20/>
                )}{size === IconSize.Size24 && !props.filled && (
                    <IconDrops24/>
                )}{size === IconSize.Size32 && !props.filled && (
                    <IconDrops32/>
                )}
            </span>
        );
    }
    
    const Memo = memo(IconDrops);
    export default Memo;
    