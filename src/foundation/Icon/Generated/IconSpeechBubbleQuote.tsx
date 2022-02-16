
    import React, { memo } from "react";
    import { GeneratedIconProps } from "@foundation/Icon/IconProps";
    import { IconSize } from "@foundation/Icon/IconSize";

    import IconSpeechBubbleQuote12 from './IconSpeechBubbleQuote12';import IconSpeechBubbleQuote16 from './IconSpeechBubbleQuote16';import IconSpeechBubbleQuote20 from './IconSpeechBubbleQuote20';import IconSpeechBubbleQuote24 from './IconSpeechBubbleQuote24';import IconSpeechBubbleQuote32 from './IconSpeechBubbleQuote32'
    
    function IconSpeechBubbleQuote(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
        const size = props.size || IconSize.Size16;
        return (
            <span>
                {size === IconSize.Size12 && !props.filled && (
                    <IconSpeechBubbleQuote12/>
                )}{size === IconSize.Size16 && !props.filled && (
                    <IconSpeechBubbleQuote16/>
                )}{size === IconSize.Size20 && !props.filled && (
                    <IconSpeechBubbleQuote20/>
                )}{size === IconSize.Size24 && !props.filled && (
                    <IconSpeechBubbleQuote24/>
                )}{size === IconSize.Size32 && !props.filled && (
                    <IconSpeechBubbleQuote32/>
                )}
            </span>
        );
    }
    
    const Memo = memo(IconSpeechBubbleQuote);
    export default Memo;
    