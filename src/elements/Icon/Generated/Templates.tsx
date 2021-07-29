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

function IconTemplates(props: IconProps): React.ReactElement<IconProps> {
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
                d="M5.40678998,8.39763706 L12.018861,11.7865764 L18.6001449,8.40021446 L12.0032937,4.89835039 L5.40678998,8.39763706 Z M11.9999994,19.1070564 L20.7396136,14.5932745 C21.1686605,14.371683 21.6913712,14.5492771 21.9071205,14.9899421 C22.1228698,15.430607 21.9499579,15.9674719 21.520911,16.1890634 L12.3999954,20.8997775 C12.1609751,21.026692 11.8681268,21.0382562 11.6093513,20.9046054 C11.6062386,20.9030624 11.6031597,20.9014517 11.6000896,20.899822 L2.47908898,16.1890634 C2.05004204,15.9674719 1.87713018,15.4306069 2.09287952,14.989942 C2.30862887,14.5492771 2.83133953,14.371683 3.26038646,14.5932745 L11.9999994,19.1070564 Z M11.9999994,15.5346765 L20.7396136,11.0208947 C21.1686605,10.7993032 21.6913712,10.9768973 21.9071205,11.4175622 C22.1228698,11.8582272 21.9499579,12.3950921 21.520911,12.6166836 L12.3999954,17.3273977 C12.1609751,17.4543121 11.8681268,17.4658764 11.6093513,17.3322256 C11.6062386,17.3306825 11.6031597,17.3290719 11.6000896,17.3274422 L2.47908898,12.6166836 C2.05004204,12.395092 1.87713018,11.8582271 2.09287952,11.4175622 C2.30862887,10.9768972 2.83133953,10.7993032 3.26038646,11.0208947 L11.9999994,15.5346765 Z M12.4026781,3.09970342 L20.9166132,7.61922984 C21.3432388,7.84569924 21.5103378,8.38450245 21.2898392,8.82268049 C21.2053876,8.99050389 21.0712976,9.12650023 20.9068477,9.21111703 L12.409103,13.5835829 C12.1643963,13.7094953 11.8762512,13.7097265 11.6313533,13.584207 L3.097835,9.2104524 C2.6681292,8.99021174 2.49361699,8.45389332 2.70805108,8.01255168 C2.79042424,7.84301378 2.92316111,7.70477636 3.08706958,7.61782686 L11.6043974,3.09958914 C11.8547874,2.96676329 12.1523242,2.96680588 12.4026781,3.09970342 Z"
                id="Icon_Templates"
            />
        </svg>
    );
}

const MemoIconTemplates = React.memo(IconTemplates);
export default MemoIconTemplates;
