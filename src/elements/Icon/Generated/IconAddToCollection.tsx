import * as React from "react";
import IconProps from "@elements/Icon/IconProps";
import IconSize from "@elements/Icon/IconSize";
const iconSizeMap = {
    [IconSize.Size8]: "h-2 w-2",
    [IconSize.Size12]: "h-3 w-3",
    [IconSize.Size16]: "h-4 w-4",
    [IconSize.Size20]: "h-5 w-5",
    [IconSize.Size24]: "h-6 w-6",
    [IconSize.Size32]: "h-8 w-8",
};

function IconAddToCollection(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            {...props}
        >
            <path d="M13.5 7.458a4.524 4.524 0 01-.026-.495c0-.77.19-1.482.573-2.136.382-.654.9-1.172 1.554-1.554a4.127 4.127 0 012.136-.573c.77 0 1.482.191 2.136.573.654.382 1.172.9 1.554 1.554A4.16 4.16 0 0122 6.963c0 .777-.191 1.492-.573 2.146a4.28 4.28 0 01-1.554 1.544 4.16 4.16 0 01-2.136.573c-.284 0-.559-.025-.826-.076v6.07c0 .465-.168.867-.504 1.203a1.658 1.658 0 01-1.217.504h-.564v.578c0 .475-.168.88-.505 1.217a1.658 1.658 0 01-1.216.504H3.72c-.475 0-.88-.168-1.217-.504A1.658 1.658 0 012 19.505v-8.04c0-.467.168-.868.504-1.204a1.658 1.658 0 011.217-.504H4.3v-.578c0-.475.168-.881.504-1.217a1.658 1.658 0 011.217-.504h7.48zm2.269 3.29A4.28 4.28 0 0113.794 8.6H6.584a1.1 1.1 0 00-.807.336 1.1 1.1 0 00-.336.806l7.463.014c.475 0 .88.168 1.216.504.337.336.505.737.505 1.203v6.32a1.1 1.1 0 00.806-.336 1.1 1.1 0 00.337-.807v-5.894zm-4.115 9.335h.672a1.1 1.1 0 00.807-.336 1.1 1.1 0 00.336-.807v-6.897a1.1 1.1 0 00-.336-.807 1.1 1.1 0 00-.807-.336h-8.04a1.1 1.1 0 00-.807.336 1.1 1.1 0 00-.336.807v5.835l3.16-1.842 5.351 4.047zm-2.084 0L6.276 17.53l-3.093 1.667a1.1 1.1 0 00.39.632c.206.17.444.255.713.255H9.57zm.457-3.442a2.2 2.2 0 01-1.613-.672 2.216 2.216 0 01-.673-1.627c0-.637.224-1.179.673-1.627a2.2 2.2 0 011.613-.672c.637 0 1.179.224 1.627.672.448.448.672.99.672 1.627 0 .636-.224 1.179-.672 1.627-.448.448-.99.672-1.627.672zm0-1.156c.323 0 .596-.112.82-.336a1.1 1.1 0 00.337-.807 1.1 1.1 0 00-.337-.807 1.116 1.116 0 00-.82-.336 1.1 1.1 0 00-.807.336 1.1 1.1 0 00-.336.807c0 .314.112.583.336.807a1.1 1.1 0 00.807.336zm10.196-8.163v-.709a.345.345 0 00-.107-.252.345.345 0 00-.252-.107h-1.418V4.836a.345.345 0 00-.107-.252.345.345 0 00-.252-.107h-.71a.314.314 0 00-.242.107.345.345 0 00-.107.252v1.418h-1.427a.335.335 0 00-.243.107.345.345 0 00-.107.252v.71a.345.345 0 00.35.349h1.427v1.427c0 .098.036.179.107.243a.314.314 0 00.243.107h.709a.345.345 0 00.252-.107.314.314 0 00.107-.243V7.672h1.418a.363.363 0 00.252-.097.345.345 0 00.107-.253z" />
        </svg>
    );
}

const MemoIconAddToCollection = React.memo(IconAddToCollection);
export default MemoIconAddToCollection;
