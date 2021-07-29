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

function IconGuidelines(props: IconProps): React.ReactElement<IconProps> {
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
                d="M2.5,20.0341797 L2.5,3.96582031 C2.5,3.55761515 2.64225118,3.21126444 2.92675781,2.92675781 C3.21126444,2.64225118 3.55761515,2.5 3.96582031,2.5 L8.34472656,2.5 C8.75293173,2.5 9.09928243,2.64225118 9.38378906,2.92675781 C9.66829569,3.21126444 9.81054688,3.55761515 9.81054688,3.96582031 L9.81054688,4.39257812 L10.0332031,4.00292969 C10.2311208,3.65657379 10.5249004,3.43082735 10.9145508,3.32568359 C11.3042012,3.22053984 11.6721988,3.26692609 12.0185547,3.46484375 L15.7851562,5.63574219 C16.1315121,5.8460297 16.3572586,6.14599415 16.4624023,6.53564453 C16.5675461,6.92529492 16.5211598,7.29329254 16.3232422,7.63964844 L16.15625,7.91796875 L16.4345703,7.75097656 C16.7809262,7.55305891 17.1489238,7.50667265 17.5385742,7.61181641 C17.9282246,7.71696016 18.2220042,7.9427066 18.4199219,8.2890625 L20.5908203,12.0556641 C20.788738,12.40202 20.8351242,12.7700176 20.7299805,13.159668 C20.6248367,13.5493184 20.3990903,13.843098 20.0527344,14.0410156 L19.8115234,14.1894531 L20.0341797,14.1894531 C20.4423849,14.1894531 20.7887356,14.3317043 21.0732422,14.6162109 C21.3577488,14.9007176 21.5,15.2470683 21.5,15.6552734 L21.5,20.0341797 C21.5,20.4423849 21.3577488,20.7887356 21.0732422,21.0732422 C20.7887356,21.3577488 20.4423849,21.5 20.0341797,21.5 L3.96582031,21.5 C3.7555328,21.5 3.56380295,21.462891 3.390625,21.3886719 C3.21744705,21.3144528 3.0628262,21.2093106 2.92675781,21.0732422 C2.79068942,20.9371738 2.68554725,20.7825529 2.61132812,20.609375 C2.537109,20.4361971 2.5,20.2444672 2.5,20.0341797 Z M3.96582031,14.1894531 L4.15136719,14.1894531 L8.34472656,6.91601562 L8.34472656,4.68945312 C8.34472656,4.49153547 8.27360097,4.32145253 8.13134766,4.17919922 C7.98909434,4.0369459 7.81901141,3.96582031 7.62109375,3.96582031 L4.68945312,3.96582031 C4.49153547,3.96582031 4.32145253,4.0369459 4.17919922,4.17919922 C4.0369459,4.32145253 3.96582031,4.49153547 3.96582031,4.68945312 L3.96582031,14.1894531 Z M16.8984375,14.1894531 L18.6982422,13.1503906 C18.8714201,13.0514318 18.9827471,12.9060882 19.0322266,12.7143555 C19.081706,12.5226227 19.0569666,12.3401701 18.9580078,12.1669922 L17.5107422,9.64355469 C17.4117834,9.47037674 17.2664398,9.35904973 17.074707,9.30957031 C16.8829743,9.2600909 16.6943369,9.28483023 16.5087891,9.38378906 L8.17773438,14.1894531 L16.8984375,14.1894531 Z M13.6328125,9.36523438 L14.6904297,7.546875 C14.7893885,7.37369705 14.8141279,7.18815203 14.7646484,6.99023438 C14.715169,6.79231672 14.603842,6.6438807 14.4306641,6.54492188 L11.9072266,5.09765625 C11.7340486,4.99869742 11.551596,4.97395809 11.3598633,5.0234375 C11.1681306,5.07291691 11.022787,5.19042876 10.9238281,5.37597656 L6.09960938,13.7255859 L13.6328125,9.36523438 Z M19.3662109,15.6738281 L4.74511719,15.6738281 C4.54719953,15.6738281 4.3771166,15.7449537 4.23486328,15.887207 C4.09260997,16.0294603 4.02148438,16.1995433 4.02148438,16.3974609 L4.02148438,19.2919922 C4.02148438,19.4899098 4.09260997,19.6599928 4.23486328,19.8022461 C4.3771166,19.9444994 4.54719953,20.015625 4.74511719,20.015625 L19.3662109,20.015625 C19.5641286,20.015625 19.7342115,19.9444994 19.8764648,19.8022461 C20.0187182,19.6599928 20.0898438,19.4899098 20.0898438,19.2919922 L20.0898438,16.3974609 C20.0898438,16.1995433 20.0187182,16.0294603 19.8764648,15.887207 C19.7342115,15.7449537 19.5641286,15.6738281 19.3662109,15.6738281 Z"
                id="Icon_Guidelines"
            />
        </svg>
    );
}

const MemoIconGuidelines = React.memo(IconGuidelines);
export default MemoIconGuidelines;
