
    import React, { memo } from "react";
    import { GeneratedIconProps } from "@foundation/Icon/IconProps";
    import { IconSize } from "@foundation/Icon/IconSize";

    import IconCardLayoutMedium12 from './IconCardLayoutMedium12';import IconCardLayoutMedium16 from './IconCardLayoutMedium16';import IconCardLayoutMedium20 from './IconCardLayoutMedium20';import IconCardLayoutMedium24 from './IconCardLayoutMedium24';import IconCardLayoutMedium32 from './IconCardLayoutMedium32'
    
    function IconCardLayoutMedium(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
        const size = props.size || IconSize.Size16;
        return (
            <span>
                {size === IconSize.Size12 && !props.filled && (
                    <IconCardLayoutMedium12/>
                )}{size === IconSize.Size16 && !props.filled && (
                    <IconCardLayoutMedium16/>
                )}{size === IconSize.Size20 && !props.filled && (
                    <IconCardLayoutMedium20/>
                )}{size === IconSize.Size24 && !props.filled && (
                    <IconCardLayoutMedium24/>
                )}{size === IconSize.Size32 && !props.filled && (
                    <IconCardLayoutMedium32/>
                )}
            </span>
        );
    }
    
    const Memo = memo(IconCardLayoutMedium);
    export default Memo;
    