
    import React, { memo } from "react";
    import { GeneratedIconProps } from "@foundation/Icon/IconProps";
    import { IconSize } from "@foundation/Icon/IconSize";

    import IconPointout12 from './IconPointout12';import IconPointout16 from './IconPointout16';import IconPointout20 from './IconPointout20';import IconPointout24 from './IconPointout24';import IconPointout32 from './IconPointout32'
    
    function IconPointout(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
        const size = props.size || IconSize.Size16;
        return (
            <span>
                {size === IconSize.Size12 && !props.filled && (
                    <IconPointout12/>
                )}{size === IconSize.Size16 && !props.filled && (
                    <IconPointout16/>
                )}{size === IconSize.Size20 && !props.filled && (
                    <IconPointout20/>
                )}{size === IconSize.Size24 && !props.filled && (
                    <IconPointout24/>
                )}{size === IconSize.Size32 && !props.filled && (
                    <IconPointout32/>
                )}
            </span>
        );
    }
    
    const Memo = memo(IconPointout);
    export default Memo;
    