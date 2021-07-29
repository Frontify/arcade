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

function IconLogo(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            className={customClassName}
            {...props}
        >
            <path d="M16.036652,12.5165781 C16.8608654,10.7055981 16.8487789,9.01815987 15.9768283,8.41609864 C14.9483457,7.7059558 13.8866564,8.08350099 12.5688507,9.81881799 C12.2830128,10.195216 11.7169872,10.195216 11.4311493,9.81881799 C10.1133436,8.08350099 9.0516543,7.7059558 8.0231717,8.41609864 C7.15122108,9.01815987 7.13913459,10.7055981 7.963348,12.5165781 C8.76382467,14.2754031 11.0559412,16.6108989 11.9816511,16.6428326 C12.9429094,16.6119299 15.2359281,14.2759462 16.036652,12.5165781 Z M16.7885294,7.24053169 C18.3961203,8.35053509 18.413259,10.7433311 17.3368939,13.1083443 C16.3346374,15.3105244 13.6774972,18.0174522 12.0316137,18.0707158 C12.0053766,18.0712284 12.0053766,18.0712284 11.9589531,18.0710445 C10.3223272,18.0173493 7.66524484,15.3102658 6.66310609,13.1083443 C5.58674098,10.7433311 5.60387969,8.35053509 7.21147061,7.24053169 C8.78849773,6.15163186 10.4372487,6.55827479 12,8.26935816 C13.5627513,6.55827479 15.2115023,6.15163186 16.7885294,7.24053169 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,20.5714286 C16.7338693,20.5714286 20.5714286,16.7338693 20.5714286,12 C20.5714286,7.26613072 16.7338693,3.42857143 12,3.42857143 C7.26613072,3.42857143 3.42857143,7.26613072 3.42857143,12 C3.42857143,16.7338693 7.26613072,20.5714286 12,20.5714286 Z" />
        </svg>
    );
}

const MemoIconLogo = React.memo(IconLogo);
export default MemoIconLogo;
