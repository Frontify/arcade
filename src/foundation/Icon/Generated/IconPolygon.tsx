import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';
import { IconSize } from '@foundation/Icon/IconSize';

import IconPolygon12 from './IconPolygon12';
import IconPolygon16 from './IconPolygon16';
import IconPolygon20 from './IconPolygon20';
import IconPolygon24 from './IconPolygon24';
import IconPolygon32 from './IconPolygon32'

function IconPolygon(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const size = props.size || IconSize.Size16;
    return (
        <span>
            {size === IconSize.Size12 && !props.filled && <IconPolygon12 {...props}/>}
            {size === IconSize.Size16 && !props.filled && <IconPolygon16 {...props}/>}
            {size === IconSize.Size20 && !props.filled && <IconPolygon20 {...props}/>}
            {size === IconSize.Size24 && !props.filled && <IconPolygon24 {...props}/>}
            {size === IconSize.Size32 && !props.filled && <IconPolygon32 {...props}/>}
        </span>
    );
}

export default memo(IconPolygon);