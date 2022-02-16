
    import React, { memo } from "react";
    import { GeneratedIconProps } from "@foundation/Icon/IconProps";
    import { IconSize } from "@foundation/Icon/IconSize";

    import IconListBullet12 from './IconListBullet12';import IconListBullet16 from './IconListBullet16';import IconListBullet20 from './IconListBullet20';import IconListBullet24 from './IconListBullet24';import IconListBullet32 from './IconListBullet32'
    
    function IconListBullet(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
        const size = props.size || IconSize.Size16;
        return (
            <span>
                {size === IconSize.Size12 && !props.filled && (
                    <IconListBullet12/>
                )}{size === IconSize.Size16 && !props.filled && (
                    <IconListBullet16/>
                )}{size === IconSize.Size20 && !props.filled && (
                    <IconListBullet20/>
                )}{size === IconSize.Size24 && !props.filled && (
                    <IconListBullet24/>
                )}{size === IconSize.Size32 && !props.filled && (
                    <IconListBullet32/>
                )}
            </span>
        );
    }
    
    const Memo = memo(IconListBullet);
    export default Memo;
    