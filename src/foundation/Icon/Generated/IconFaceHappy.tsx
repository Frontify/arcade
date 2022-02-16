
    import React, { memo } from "react";
    import { GeneratedIconProps } from "@foundation/Icon/IconProps";
    import { IconSize } from "@foundation/Icon/IconSize";

    import IconFaceHappy12Filled from './IconFaceHappy12Filled';import IconFaceHappy12 from './IconFaceHappy12';import IconFaceHappy16Filled from './IconFaceHappy16Filled';import IconFaceHappy16 from './IconFaceHappy16';import IconFaceHappy20Filled from './IconFaceHappy20Filled';import IconFaceHappy20 from './IconFaceHappy20';import IconFaceHappy24Filled from './IconFaceHappy24Filled';import IconFaceHappy24 from './IconFaceHappy24';import IconFaceHappy32Filled from './IconFaceHappy32Filled';import IconFaceHappy32 from './IconFaceHappy32'
    
    function IconFaceHappy(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
        const size = props.size || IconSize.Size16;
        return (
            <span>
                {size === IconSize.Size12 && props.filled && (
                    <IconFaceHappy12Filled/>
                )}{size === IconSize.Size12 && !props.filled && (
                    <IconFaceHappy12/>
                )}{size === IconSize.Size16 && props.filled && (
                    <IconFaceHappy16Filled/>
                )}{size === IconSize.Size16 && !props.filled && (
                    <IconFaceHappy16/>
                )}{size === IconSize.Size20 && props.filled && (
                    <IconFaceHappy20Filled/>
                )}{size === IconSize.Size20 && !props.filled && (
                    <IconFaceHappy20/>
                )}{size === IconSize.Size24 && props.filled && (
                    <IconFaceHappy24Filled/>
                )}{size === IconSize.Size24 && !props.filled && (
                    <IconFaceHappy24/>
                )}{size === IconSize.Size32 && props.filled && (
                    <IconFaceHappy32Filled/>
                )}{size === IconSize.Size32 && !props.filled && (
                    <IconFaceHappy32/>
                )}
            </span>
        );
    }
    
    const Memo = memo(IconFaceHappy);
    export default Memo;
    