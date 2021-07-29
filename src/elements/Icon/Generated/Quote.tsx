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

function IconQuote(props: IconProps): React.ReactElement<IconProps> {
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
                d="M12.3718058,16.3461538 L17.7425534,16.3461538 C19.2444725,16.3461538 20.4615385,15.1232305 20.4615385,13.614678 L20.4615385,6.76993737 C20.4615385,5.26356624 19.2442074,4.03846154 17.7425534,4.03846154 L6.25744662,4.03846154 C4.7555275,4.03846154 3.53846154,5.26138493 3.53846154,6.76993737 L3.53846154,13.614678 C3.53846154,15.1210492 4.75579263,16.3461538 6.25744662,16.3461538 L8.15384618,16.3461538 L8.15384618,19.0530507 C8.15384618,19.5547998 8.45877445,19.7001807 8.84676709,19.3676156 L12.3718058,16.3461538 Z M13.1965812,17.8846154 L8.80544518,21.4773631 C7.59429673,22.4683026 6.61538464,21.9995749 6.61538464,20.433375 L6.61538464,17.8846154 L6.53830957,17.8846154 C4.03187041,17.8846154 2,15.8416573 2,13.3311676 L2,7.05344773 C2,4.538648 4.02776998,2.5 6.53830957,2.5 L17.4616905,2.5 C19.9681296,2.5 22,4.54295814 22,7.05344773 L22,13.3311676 C22,15.8459674 19.97223,17.8846154 17.4616905,17.8846154 L13.1965812,17.8846154 Z M11.2938462,7.38307691 C10.5923042,7.84461773 10.0661556,8.33384355 9.71538464,8.85076927 C9.36461364,9.36769491 9.18923073,10.0230729 9.18923073,10.8169231 C9.24461564,10.7984615 9.32769173,10.7892307 9.43846155,10.7892307 C9.80769418,10.7892307 10.1446138,10.9092295 10.4492307,11.1492307 C10.7538476,11.389232 10.9061538,11.7399977 10.9061538,12.2015385 C10.9061538,12.6815408 10.7676937,13.0553833 10.4907693,13.3230769 C10.2138447,13.5907705 9.86307909,13.7246154 9.43846155,13.7246154 C8.88461264,13.7246154 8.45538618,13.5123098 8.15076927,13.0876923 C7.84615236,12.6630748 7.69384618,12.0446195 7.69384618,11.2323077 C7.69384618,10.1246098 7.94307445,9.16461945 8.44153845,8.35230773 C8.94000245,7.53999591 9.669226,6.85692585 10.6292307,6.30307693 L11.2938462,7.38307691 Z M16.1676923,7.38307691 C15.4661504,7.84461773 14.9400017,8.33384355 14.5892307,8.85076927 C14.2384598,9.36769491 14.0630769,10.0230729 14.0630769,10.8169231 C14.1184618,10.7984615 14.2015379,10.7892307 14.3123077,10.7892307 C14.6815403,10.7892307 15.01846,10.9092295 15.3230769,11.1492307 C15.6276938,11.389232 15.78,11.7399977 15.78,12.2015385 C15.78,12.6815408 15.6415398,13.0553833 15.3646154,13.3230769 C15.0876909,13.5907705 14.7369252,13.7246154 14.3123077,13.7246154 C13.7584587,13.7246154 13.3292323,13.5123098 13.0246154,13.0876923 C12.7199985,12.6630748 12.5676923,12.0446195 12.5676923,11.2323077 C12.5676923,10.1246098 12.8169205,9.16461945 13.3153846,8.35230773 C13.8138486,7.53999591 14.5430721,6.85692585 15.5030769,6.30307693 L16.1676923,7.38307691 Z"
                id="quote_icon"
            />
        </svg>
    );
}

const MemoIconQuote = React.memo(IconQuote);
export default MemoIconQuote;
