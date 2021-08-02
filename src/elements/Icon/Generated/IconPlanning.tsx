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

function IconPlanning(props: IconProps): React.ReactElement<IconProps> {
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
            <path d="M17.705 11.413v2.348c.979.17 1.798.64 2.456 1.41.66.769.989 1.663.989 2.68 0 .574-.108 1.112-.323 1.615a4.259 4.259 0 01-.88 1.32 4.033 4.033 0 01-1.322.891 4.077 4.077 0 01-1.604.323 4.125 4.125 0 01-2.946-1.213 4.259 4.259 0 01-.88-1.321 4.055 4.055 0 01-.323-1.615c0-1.017.33-1.911.988-2.68.659-.77 1.478-1.24 2.456-1.41v-2.348a1.093 1.093 0 01-.147-.088.587.587 0 01-.127-.127l-3.425-3.425a.587.587 0 01-.127-.127 1.093 1.093 0 01-.088-.147H10.74a4.02 4.02 0 01-1.155 2.23 4.032 4.032 0 01-2.25 1.156v2.837h2.074c.378 0 .705.134.978.401.274.268.411.59.411.969v5.519c0 .391-.137.72-.41.988-.274.267-.6.401-.979.401H3.889c-.378 0-.704-.134-.978-.401a1.327 1.327 0 01-.411-.988v-5.519c0-.378.137-.701.411-.969.274-.267.6-.4.978-.4h2.075v-2.838a3.982 3.982 0 01-2.476-1.39c-.659-.77-.988-1.67-.988-2.7 0-.561.108-1.096.323-1.605.215-.509.512-.95.89-1.321a4.259 4.259 0 011.321-.88 4.055 4.055 0 011.615-.324c1.03 0 1.927.33 2.69.989a4.078 4.078 0 011.4 2.456h1.663c.026-.053.056-.102.088-.147a.587.587 0 01.127-.127l3.425-3.425c.261-.274.584-.411.969-.411s.708.137.968.411l3.425 3.425c.274.26.411.583.411.968s-.137.708-.41.969l-3.426 3.425a.587.587 0 01-.127.127 1.093 1.093 0 01-.147.088zM3.89 15.777v4.149c0 .195.066.362.196.499s.294.205.49.205h4.148a.657.657 0 00.48-.205.68.68 0 00.205-.5v-4.148a.657.657 0 00-.205-.48.657.657 0 00-.48-.205H4.574a.648.648 0 00-.489.205.673.673 0 00-.196.48zM16.512 3.879l-2.427 2.426a.685.685 0 00-.215.5c0 .188.072.348.215.479l2.427 2.446a.685.685 0 00.998 0l2.426-2.446a.623.623 0 00.216-.48.685.685 0 00-.216-.499L17.51 3.88a.685.685 0 00-.998 0zm.509 16.751c.756 0 1.405-.27 1.947-.812a2.679 2.679 0 00.812-1.967c0-.756-.27-1.405-.812-1.947a2.656 2.656 0 00-1.947-.812c-.77 0-1.426.27-1.967.812a2.656 2.656 0 00-.812 1.947c0 .77.27 1.426.812 1.967a2.679 2.679 0 001.967.812zM6.649 9.573c.756 0 1.405-.27 1.947-.812a2.679 2.679 0 00.812-1.966c0-.757-.27-1.406-.812-1.948a2.656 2.656 0 00-1.947-.812c-.77 0-1.422.27-1.957.812a2.672 2.672 0 00-.803 1.948c0 .77.268 1.425.803 1.966a2.647 2.647 0 001.957.812z" />
        </svg>
    );
}

const MemoIconPlanning = React.memo(IconPlanning);
export default MemoIconPlanning;
