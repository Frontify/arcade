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

function IconAssets(props: IconProps): React.ReactElement<IconProps> {
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
                d="M12.3710938,16.1978781 L18.1523438,16.1978781 C18.7903678,16.1978781 19.3339821,15.964253 19.7832031,15.4969956 C20.2324241,15.0297382 20.4570312,14.4690378 20.4570312,13.8148774 L20.4570312,5.94496755 C20.4570312,5.29080722 20.2324241,4.73344429 19.7832031,4.27286202 C19.3339821,3.81227974 18.7903678,3.58199206 18.1523438,3.58199206 L5.84765625,3.58199206 C5.20963223,3.58199206 4.66601787,3.81227974 4.21679688,4.27286202 C3.76757588,4.73344429 3.54296875,5.29080722 3.54296875,5.94496755 L3.54296875,13.8148774 C3.54296875,14.482388 3.76757588,15.0464259 4.21679688,15.5070082 C4.66601787,15.9675905 5.20963223,16.1978781 5.84765625,16.1978781 L8.15234375,16.1978781 L8.15234375,19.1215597 C8.15234375,19.3351631 8.21093691,19.4686632 8.328125,19.522064 C8.44531309,19.5754648 8.58203047,19.5287398 8.73828125,19.3818875 L12.3710938,16.1978781 Z M6.609375,17.7798702 L5.84765625,17.7798702 C5.31379941,17.7798702 4.81250234,17.6764076 4.34375,17.4694794 C3.87499766,17.2625511 3.46810068,16.9788634 3.12304688,16.6184077 C2.77799307,16.257952 2.5045583,15.8407642 2.30273438,15.3668317 C2.10091045,14.8928992 2,14.3822613 2,13.8349027 L2,5.94496755 C2,5.39760891 2.10091045,4.88363351 2.30273438,4.40302592 C2.5045583,3.92241833 2.77799307,3.5052305 3.12304688,3.15144992 C3.46810068,2.79766934 3.87499766,2.51731911 4.34375,2.31039085 C4.81250234,2.10346258 5.31379941,2 5.84765625,2 L18.1523438,2 C18.6862006,2 19.1874977,2.10346258 19.65625,2.31039085 C20.1250023,2.51731911 20.5318993,2.79766934 20.8769531,3.15144992 C21.2220069,3.5052305 21.4954417,3.92241833 21.6972656,4.40302592 C21.8990896,4.88363351 22,5.39760891 22,5.94496755 L22,13.8349027 C22,14.3822613 21.8990896,14.8928992 21.6972656,15.3668317 C21.4954417,15.8407642 21.2220069,16.257952 20.8769531,16.6184077 C20.5318993,16.9788634 20.1250023,17.2625511 19.65625,17.4694794 C19.1874977,17.6764076 18.6862006,17.7798702 18.1523438,17.7798702 L13.1914062,17.7798702 L8.796875,21.46451 C8.19791367,21.971818 7.6835959,22.1186681 7.25390625,21.9050647 C6.8242166,21.6914613 6.609375,21.1841609 6.609375,20.3831483 L6.609375,17.7798702 Z M7.390625,11.4719272 C6.96093535,11.4719272 6.59635566,11.3150645 6.296875,11.0013346 C5.99739434,10.6876046 5.84765625,10.3171418 5.84765625,9.8899351 C5.84765625,9.44937815 5.99739434,9.07557785 6.296875,8.76852301 C6.59635566,8.46146816 6.96093535,8.30794304 7.390625,8.30794304 C7.80729375,8.30794304 8.16536309,8.46146816 8.46484375,8.76852301 C8.76432441,9.07557785 8.9140625,9.44937815 8.9140625,9.8899351 C8.9140625,10.3171418 8.76432441,10.6876046 8.46484375,11.0013346 C8.16536309,11.3150645 7.80729375,11.4719272 7.390625,11.4719272 Z M12,11.4719272 C11.5703104,11.4719272 11.2057307,11.3150645 10.90625,11.0013346 C10.6067693,10.6876046 10.4570312,10.3171418 10.4570312,9.8899351 C10.4570312,9.44937815 10.6067693,9.07557785 10.90625,8.76852301 C11.2057307,8.46146816 11.5703104,8.30794304 12,8.30794304 C12.4296896,8.30794304 12.7942693,8.46146816 13.09375,8.76852301 C13.3932307,9.07557785 13.5429688,9.44937815 13.5429688,9.8899351 C13.5429688,10.3171418 13.3932307,10.6876046 13.09375,11.0013346 C12.7942693,11.3150645 12.4296896,11.4719272 12,11.4719272 Z M16.609375,11.4719272 C16.1927062,11.4719272 15.8346369,11.3150645 15.5351562,11.0013346 C15.2356756,10.6876046 15.0859375,10.3171418 15.0859375,9.8899351 C15.0859375,9.44937815 15.2356756,9.07557785 15.5351562,8.76852301 C15.8346369,8.46146816 16.1927062,8.30794304 16.609375,8.30794304 C17.0390646,8.30794304 17.4036443,8.46146816 17.703125,8.76852301 C18.0026057,9.07557785 18.1523437,9.44937815 18.1523437,9.8899351 C18.1523437,10.3171418 18.0026057,10.6876046 17.703125,11.0013346 C17.4036443,11.3150645 17.0390646,11.4719272 16.609375,11.4719272 Z"
                id="Icon_Assets"
            />
        </svg>
    );
}

const MemoIconAssets = React.memo(IconAssets);
export default MemoIconAssets;
