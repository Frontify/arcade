import * as React from "react";
import { IconProps } from "@elements/Icon/IconProps";
import { IconSize, IconSizeMap } from "@elements/Icon/IconSize";

function IconMeasurements(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "tw-flex tw-items-center tw-justify-center tw-fill-current",
        IconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            className={customClassName}
            name="IconMeasurements"
            {...props}
        >
            <path d="M17.39 13.543h-1.542v1.523a.756.756 0 01-.225.557.733.733 0 01-.537.225.756.756 0 01-.557-.225.756.756 0 01-.224-.557v-1.523h-1.543v1.523a.756.756 0 01-.225.557.733.733 0 01-.537.225.733.733 0 01-.537-.225.756.756 0 01-.225-.557v-1.523H9.695v1.523a.756.756 0 01-.224.557.756.756 0 01-.557.225.733.733 0 01-.537-.225.756.756 0 01-.225-.557v-1.523H6.61v1.523a.756.756 0 01-.224.557.733.733 0 01-.537.225.733.733 0 01-.537-.225.756.756 0 01-.225-.557v-1.523h-.781a.733.733 0 00-.537.225.733.733 0 00-.225.537v2.304c0 .222.075.407.225.557.15.15.328.225.537.225h15.39a.733.733 0 00.537-.225.756.756 0 00.225-.557v-2.304a.733.733 0 00-.225-.537.733.733 0 00-.537-.225h-.78v1.523a.774.774 0 01-.216.557.724.724 0 01-.547.225.733.733 0 01-.537-.225.756.756 0 01-.224-.557v-1.523zm-6.933-5.39V6.608H8.914a.733.733 0 01-.537-.224.733.733 0 01-.225-.537c0-.209.075-.388.225-.537a.733.733 0 01.537-.225h1.543v-.781a.733.733 0 00-.225-.537.733.733 0 00-.537-.225H7.391a.756.756 0 00-.557.225.733.733 0 00-.225.537V12h3.848V9.695H8.914a.733.733 0 01-.537-.224.756.756 0 01-.225-.557c0-.208.075-.387.225-.537a.733.733 0 01.537-.225h1.543zM12 12h8.457c.43 0 .794.15 1.094.45.3.299.449.663.449 1.093v3.848c0 .416-.15.774-.45 1.074-.299.3-.663.45-1.093.45H12v1.542c0 .43-.15.794-.45 1.094-.299.3-.663.449-1.093.449H6.609c-.416 0-.774-.15-1.074-.45-.3-.299-.45-.663-.45-1.093v-1.543H3.544c-.43 0-.794-.15-1.094-.45-.3-.299-.449-.657-.449-1.073v-3.848c0-.43.15-.794.45-1.094.299-.3.663-.449 1.093-.449h1.543V3.543c0-.43.15-.794.45-1.094.299-.3.657-.449 1.073-.449h3.848c.43 0 .794.15 1.094.45.3.299.449.663.449 1.093V12zm-1.543 6.914H6.609v.781c0 .209.075.388.225.537.15.15.335.225.557.225h2.304a.733.733 0 00.537-.225.733.733 0 00.225-.537v-.78z" />
        </svg>
    );
}

const MemoIconMeasurements = React.memo(IconMeasurements);
export default MemoIconMeasurements;
