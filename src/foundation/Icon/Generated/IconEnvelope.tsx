
    import React, { memo } from "react";
    import { GeneratedIconProps } from "@foundation/Icon/IconProps";
    import { IconSize } from "@foundation/Icon/IconSize";

    import IconEnvelope12 from './IconEnvelope12';import IconEnvelope16 from './IconEnvelope16';import IconEnvelope20 from './IconEnvelope20';import IconEnvelope24 from './IconEnvelope24';import IconEnvelope32 from './IconEnvelope32'
    
    function IconEnvelope(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
        const size = props.size || IconSize.Size16;
        return (
            <span>
                {size === IconSize.Size12 && !props.filled && (
                    <IconEnvelope12/>
                )}{size === IconSize.Size16 && !props.filled && (
                    <IconEnvelope16/>
                )}{size === IconSize.Size20 && !props.filled && (
                    <IconEnvelope20/>
                )}{size === IconSize.Size24 && !props.filled && (
                    <IconEnvelope24/>
                )}{size === IconSize.Size32 && !props.filled && (
                    <IconEnvelope32/>
                )}
            </span>
        );
    }
    
    const Memo = memo(IconEnvelope);
    export default Memo;
    