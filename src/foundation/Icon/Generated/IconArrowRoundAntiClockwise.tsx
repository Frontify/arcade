
    import React, { memo } from "react";
    import { GeneratedIconProps } from "@foundation/Icon/IconProps";
    import { IconSize } from "@foundation/Icon/IconSize";

    import IconArrowRoundAntiClockwise12 from './IconArrowRoundAntiClockwise12';import IconArrowRoundAntiClockwise16 from './IconArrowRoundAntiClockwise16';import IconArrowRoundAntiClockwise20 from './IconArrowRoundAntiClockwise20';import IconArrowRoundAntiClockwise24 from './IconArrowRoundAntiClockwise24';import IconArrowRoundAntiClockwise32 from './IconArrowRoundAntiClockwise32'
    
    function IconArrowRoundAntiClockwise(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
        const size = props.size || IconSize.Size16;
        return (
            <span>
                {size === IconSize.Size12 && !props.filled && (
                    <IconArrowRoundAntiClockwise12/>
                )}{size === IconSize.Size16 && !props.filled && (
                    <IconArrowRoundAntiClockwise16/>
                )}{size === IconSize.Size20 && !props.filled && (
                    <IconArrowRoundAntiClockwise20/>
                )}{size === IconSize.Size24 && !props.filled && (
                    <IconArrowRoundAntiClockwise24/>
                )}{size === IconSize.Size32 && !props.filled && (
                    <IconArrowRoundAntiClockwise32/>
                )}
            </span>
        );
    }
    
    const Memo = memo(IconArrowRoundAntiClockwise);
    export default Memo;
    