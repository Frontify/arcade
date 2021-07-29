import * as React from "react";
import { IconProps, IconSize } from "@elements/Icon/Icon";
const iconSizeMap = {
    [IconSize.Size8]: "h-2 w-2",
    [IconSize.Size12]: "h-3 w-3",
    [IconSize.Size16]: "h-4 w-4",
    [IconSize.Size20]: "h-5 w-5",
    [IconSize.Size24]: "h-6 w-6",
    [IconSize.Size32]: "h-8 w-8",
};

function IconAlignCenter(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="100%"
            className={customClassName}
            {...props}
        >
            <path
                d="M5.03930376,12.7692155 C4.63099757,12.7692155 4.3,12.4248197 4.3,11.9999858 C4.3,11.575152 4.63099757,11.2307562 5.03930376,11.2307562 L18.9452898,11.2307562 C19.353596,11.2307562 19.6845936,11.575152 19.6845936,11.9999858 C19.6845936,12.4248197 19.353596,12.7692155 18.9452898,12.7692155 L5.03930376,12.7692155 Z M12.7615548,15.905558 L12.7615548,21.2307703 C12.7615548,21.6556041 12.4171306,22 11.9922968,22 C11.567463,22 11.2230671,21.6556041 11.2230671,21.2307703 L11.2230671,15.9081816 L8.62668237,17.9852894 C8.29494289,18.250681 7.81087252,18.1968954 7.54548093,17.8651559 C7.28008935,17.5334164 7.33387495,17.049346 7.66561443,16.7839545 L11.4227364,13.7782568 C11.6932297,13.4830172 12.1494982,13.4443862 12.4663883,13.6985906 L16.3020623,16.7755095 C16.6328983,17.0409011 16.6865374,17.5249714 16.4218686,17.8567109 C16.1571998,18.1884504 15.6744477,18.242236 15.3436117,17.9768444 L12.7615548,15.905558 Z M11.6134635,10.3619055 C11.5783303,10.3419721 11.5443133,10.3190046 11.5117628,10.2929643 L7.66561443,7.21604554 C7.33387495,6.95065396 7.28008935,6.46658359 7.54548093,6.13484411 C7.81087252,5.80310463 8.29494289,5.74931903 8.62668237,6.01471061 L11.2230671,8.09181841 L11.2230671,2.76922968 C11.2230671,2.34439586 11.567463,2 11.9922968,2 C12.4171306,2 12.7615548,2.34439586 12.7615548,2.76922968 L12.7615548,8.10124464 L15.3648724,6.01859054 C15.6966119,5.75319896 16.1806823,5.80698455 16.4460739,6.13872403 C16.7114655,6.47046351 16.6576799,6.95453389 16.3259404,7.21992547 L12.479792,10.2968442 C12.2248511,10.5007969 11.8799456,10.5162474 11.6134635,10.3619055 Z"
                id="Icon_Align_Middle"
                fillRule="nonzero"
                transform="translate(11.992297, 12.000000) rotate(90.000000) translate(-11.992297, -12.000000) "
            />
        </svg>
    );
}

const MemoIconAlignCenter = React.memo(IconAlignCenter);
export default MemoIconAlignCenter;
