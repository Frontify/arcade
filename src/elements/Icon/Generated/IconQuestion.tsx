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

function IconQuestion(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            name="IconQuestion"
            {...props}
        >
            <path
                clipRule="evenodd"
                d="M5.403 14.146c.812.348 1.678.521 2.598.521.92 0 1.786-.173 2.597-.52a6.69 6.69 0 002.123-1.426 6.69 6.69 0 001.425-2.123c.348-.811.521-1.677.521-2.597 0-.92-.173-1.786-.52-2.598a6.69 6.69 0 00-1.426-2.122 6.69 6.69 0 00-2.123-1.426 6.534 6.534 0 00-2.597-.521c-.92 0-1.786.174-2.598.52a6.69 6.69 0 00-2.122 1.427 6.69 6.69 0 00-1.426 2.122 6.534 6.534 0 00-.521 2.598c0 .92.174 1.786.52 2.597a6.69 6.69 0 001.427 2.123 6.69 6.69 0 002.122 1.425zm4.824-.878c-.694.3-1.436.449-2.226.449s-1.532-.15-2.227-.45c-.694-.299-1.3-.707-1.816-1.223a5.775 5.775 0 01-1.224-1.817 5.562 5.562 0 01-.45-2.226c0-.79.15-1.532.45-2.227.3-.694.707-1.3 1.224-1.816a5.775 5.775 0 011.816-1.224c.695-.3 1.437-.45 2.227-.45.79 0 1.532.15 2.226.45.695.3 1.3.707 1.817 1.224a5.776 5.776 0 011.224 1.816c.3.695.449 1.437.449 2.227 0 .79-.15 1.532-.45 2.226-.299.695-.707 1.3-1.223 1.817a5.775 5.775 0 01-1.817 1.224zM7.39 10.266c0-.182.063-.336.188-.462a.629.629 0 01.463-.189c.173 0 .323.063.449.189s.189.28.189.462a.65.65 0 01-.19.469.604.604 0 01-.448.195.618.618 0 01-.463-.195.65.65 0 01-.188-.469zm2.207-2.734c.212-.26.319-.569.319-.925 0-.52-.165-.933-.495-1.237-.33-.303-.786-.455-1.367-.455-.547 0-.996.171-1.348.514-.351.343-.558.788-.618 1.335h1.028c.026-.278.115-.51.267-.697.152-.187.376-.28.67-.28.279 0 .496.078.652.234a.811.811 0 01.234.6.88.88 0 01-.254.637c-.169.174-.336.352-.501.534a2.718 2.718 0 00-.436.586 1.545 1.545 0 00-.137.638h.925c0-.095.026-.202.078-.319.052-.117.16-.262.325-.436.226-.226.445-.469.658-.73z"
            />
        </svg>
    );
}

const MemoIconQuestion = React.memo(IconQuestion);
export default MemoIconQuestion;
