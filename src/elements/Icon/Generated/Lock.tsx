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

function IconLock(props: IconProps): React.ReactElement<IconProps> {
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
                d="M12.8666667,17 C12.8666667,17.4602373 12.4935706,17.8333333 12.0333333,17.8333333 C11.573096,17.8333333 11.2,17.4602373 11.2,17 L11.2,15.9436963 C10.7018322,15.6555218 10.3666667,15.116902 10.3666667,14.5 C10.3666667,13.5795254 11.1128588,12.8333333 12.0333333,12.8333333 C12.9538079,12.8333333 13.7,13.5795254 13.7,14.5 C13.7,15.116902 13.3648345,15.6555218 12.8666667,15.9436963 L12.8666667,17 Z M7.03333333,8.66666667 L7.03333333,7 C7.03333333,4.23857625 9.27190958,2 12.0333333,2 C14.7947571,2 17.0333333,4.23857625 17.0333333,7 L17.0333333,8.66666667 L17.8666667,8.66666667 C19.2473785,8.66666667 20.3666667,9.78595479 20.3666667,11.1666667 L20.3666667,19.5 C20.3666667,20.8807119 19.2473785,22 17.8666667,22 L6.2,22 C4.81928813,22 3.7,20.8807119 3.7,19.5 L3.7,11.1666667 C3.7,9.78595479 4.81928813,8.66666667 6.2,8.66666667 L7.03333333,8.66666667 Z M7.03333333,10.3333333 L6.2,10.3333333 C5.73976271,10.3333333 5.36666667,10.7064294 5.36666667,11.1666667 L5.36666667,19.5 C5.36666667,19.9602373 5.73976271,20.3333333 6.2,20.3333333 L17.8666667,20.3333333 C18.326904,20.3333333 18.7,19.9602373 18.7,19.5 L18.7,11.1666667 C18.7,10.7064294 18.326904,10.3333333 17.8666667,10.3333333 L17.0333333,10.3333333 L7.03333333,10.3333333 Z M8.7,8.66666667 L15.3666667,8.66666667 L15.3666667,7 C15.3666667,5.15905083 13.8742825,3.66666667 12.0333333,3.66666667 C10.1923842,3.66666667 8.7,5.15905083 8.7,7 L8.7,8.66666667 Z"
                id="icon_lock"
            />
        </svg>
    );
}

const MemoIconLock = React.memo(IconLock);
export default MemoIconLock;
