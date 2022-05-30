import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';
import { IconSize } from '@foundation/Icon/IconSize';

import IconDividerSolidInset12 from './IconDividerSolidInset12';
import IconDividerSolidInset16 from './IconDividerSolidInset16';
import IconDividerSolidInset20 from './IconDividerSolidInset20';
import IconDividerSolidInset24 from './IconDividerSolidInset24';
import IconDividerSolidInset32 from './IconDividerSolidInset32'

function IconDividerSolidInset(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const size = props.size || IconSize.Size16;
    return (
        <span>
            {size === IconSize.Size12 && !props.filled && <IconDividerSolidInset12 {...props}/>}
            {size === IconSize.Size16 && !props.filled && <IconDividerSolidInset16 {...props}/>}
            {size === IconSize.Size20 && !props.filled && <IconDividerSolidInset20 {...props}/>}
            {size === IconSize.Size24 && !props.filled && <IconDividerSolidInset24 {...props}/>}
            {size === IconSize.Size32 && !props.filled && <IconDividerSolidInset32 {...props}/>}
        </span>
    );
}

const Memo = memo(IconDividerSolidInset);
export default Memo;