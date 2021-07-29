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

function IconBrand(props: IconProps): React.ReactElement<IconProps> {
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
                d="M5.41018258,9.35254458 L5.41018258,18.6081967 C5.41018258,19.1935637 5.88471628,19.6680974 6.47008328,19.6680974 L17.5299167,19.6680974 C18.1152837,19.6680974 18.5898174,19.1935637 18.5898174,18.6081967 L18.5898174,9.35254458 L12,4.73967238 L5.41018258,9.35254458 Z M20.1566272,10.4493114 L20.1566272,18.6081967 C20.1566272,20.0588888 18.9806088,21.2349071 17.5299167,21.2349071 L6.47008328,21.2349071 C5.01939116,21.2349071 3.84337284,20.0588888 3.84337284,18.6081967 L3.84337284,10.4493114 L3.23272533,10.8767647 C2.87827434,11.1248803 2.38979755,11.0386785 2.14168186,10.6842276 C1.89356617,10.3297766 1.97976796,9.84129979 2.33421894,9.5931841 L11.5507468,3.14161459 C11.8204889,2.95279514 12.1795111,2.95279514 12.4492532,3.14161459 L21.6657811,9.5931841 C22.020232,9.84129979 22.1064338,10.3297766 21.8583181,10.6842276 C21.6102025,11.0386785 21.1217257,11.1248803 20.7672747,10.8767647 L20.1566272,10.4493114 Z M15.403801,9.93827307 C16.5998027,10.7434764 16.6125535,12.4792253 15.8117686,14.1948205 C15.0661184,15.7922956 13.089282,17.7559177 11.8647917,17.7945554 C11.8452721,17.7949273 11.8452721,17.7949273 11.8107343,17.7947938 C10.5931314,17.7558431 8.61633809,15.7921079 7.8707755,14.1948205 C7.06999062,12.4792253 7.08274133,10.7434764 8.27874302,9.93827307 C9.45200613,9.14837842 10.6786297,9.4433597 11.841272,10.6845901 C13.0039143,9.4433597 14.2305379,9.14837842 15.403801,9.93827307 Z M14.4538592,13.8372997 C15.0019405,12.7071107 14.9939033,11.6540211 14.414078,11.2782891 C13.7301628,10.8351061 13.024166,11.0707229 12.1478583,12.1536925 C11.9577832,12.3885935 11.5813904,12.3885935 11.3913153,12.1536925 C10.5150076,11.0707229 9.8090108,10.8351061 9.12509565,11.2782891 C8.54527033,11.6540211 8.53723312,12.7071107 9.08531438,13.8372997 C9.61761131,14.9349401 11.1418113,16.3924668 11.7573852,16.4123959 C12.3965979,16.3931103 13.9213979,14.9352791 14.4538592,13.8372997 Z"
                id="Combined-Shape"
            />
        </svg>
    );
}

const MemoIconBrand = React.memo(IconBrand);
export default MemoIconBrand;
