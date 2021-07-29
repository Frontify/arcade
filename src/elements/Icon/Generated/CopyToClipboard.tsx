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

function IconCopyToClipboard(props: IconProps): React.ReactElement<IconProps> {
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
            {">\n\t"}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.3387 2.73315H10.1246C9.13927 2.73315 8.30128 3.3641 7.99261 4.24402H7C5.48122 4.24402 4.25 5.47524 4.25 6.99402V18.494C4.25 20.0128 5.48122 21.244 7 21.244H17.4634C18.9822 21.244 20.2134 20.0128 20.2134 18.494V6.99402C20.2134 5.47524 18.9822 4.24402 17.4634 4.24402H16.4708C16.1621 3.3641 15.3241 2.73315 14.3387 2.73315ZM7.99407 5.74402C8.30391 6.62177 9.14082 7.25073 10.1246 7.25073H14.3387C15.3226 7.25073 16.1595 6.62177 16.4693 5.74402H17.4634C18.1537 5.74402 18.7134 6.30366 18.7134 6.99402V18.494C18.7134 19.1844 18.1537 19.744 17.4634 19.744H7C6.30964 19.744 5.75 19.1844 5.75 18.494V6.99402C5.75 6.30366 6.30964 5.74402 7 5.74402H7.99407ZM10.1246 4.23315C9.70557 4.23315 9.36584 4.57288 9.36584 4.99194C9.36584 5.41101 9.70557 5.75073 10.1246 5.75073H14.3387C14.7578 5.75073 15.0975 5.41101 15.0975 4.99194C15.0975 4.57288 14.7578 4.23315 14.3387 4.23315H10.1246ZM11.25 10.8604V12.6697H9.5C9.08579 12.6697 8.75 13.0055 8.75 13.4197C8.75 13.8339 9.08579 14.1697 9.5 14.1697H11.25V15.979C11.25 16.3932 11.5858 16.729 12 16.729C12.4142 16.729 12.75 16.3932 12.75 15.979V14.1697H14.5C14.9142 14.1697 15.25 13.8339 15.25 13.4197C15.25 13.0055 14.9142 12.6697 14.5 12.6697H12.75V10.8604C12.75 10.4461 12.4142 10.1104 12 10.1104C11.5858 10.1104 11.25 10.4461 11.25 10.8604Z"
            />
        </svg>
    );
}

const MemoIconCopyToClipboard = React.memo(IconCopyToClipboard);
export default MemoIconCopyToClipboard;
