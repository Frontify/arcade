import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';
import { IconSize } from '@foundation/Icon/IconSize';

import IconArrowHook12 from './IconArrowHook12';
import IconArrowHook16 from './IconArrowHook16';
import IconArrowHook20 from './IconArrowHook20';
import IconArrowHook24 from './IconArrowHook24';
import IconArrowHook32 from './IconArrowHook32'

function IconArrowHook(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const size = props.size || IconSize.Size16;
    return (
        <span>
            {size === IconSize.Size12 && !props.filled && <IconArrowHook12 {...props}/>}
            {size === IconSize.Size16 && !props.filled && <IconArrowHook16 {...props}/>}
            {size === IconSize.Size20 && !props.filled && <IconArrowHook20 {...props}/>}
            {size === IconSize.Size24 && !props.filled && <IconArrowHook24 {...props}/>}
            {size === IconSize.Size32 && !props.filled && <IconArrowHook32 {...props}/>}
        </span>
    );
}

const Memo = memo(IconArrowHook);
export default Memo;