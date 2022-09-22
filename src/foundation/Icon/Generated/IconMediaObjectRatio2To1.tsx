import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';
import { IconSize } from '@foundation/Icon/IconSize';

import IconMediaObjectRatio2To112 from './IconMediaObjectRatio2To112';
import IconMediaObjectRatio2To116 from './IconMediaObjectRatio2To116';
import IconMediaObjectRatio2To120 from './IconMediaObjectRatio2To120';
import IconMediaObjectRatio2To124 from './IconMediaObjectRatio2To124';
import IconMediaObjectRatio2To132 from './IconMediaObjectRatio2To132'

function IconMediaObjectRatio2To1(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const size = props.size || IconSize.Size16;
    return (
        <span>
            {size === IconSize.Size12 && !props.filled && <IconMediaObjectRatio2To112 {...props}/>}
            {size === IconSize.Size16 && !props.filled && <IconMediaObjectRatio2To116 {...props}/>}
            {size === IconSize.Size20 && !props.filled && <IconMediaObjectRatio2To120 {...props}/>}
            {size === IconSize.Size24 && !props.filled && <IconMediaObjectRatio2To124 {...props}/>}
            {size === IconSize.Size32 && !props.filled && <IconMediaObjectRatio2To132 {...props}/>}
        </span>
    );
}

export default memo(IconMediaObjectRatio2To1);