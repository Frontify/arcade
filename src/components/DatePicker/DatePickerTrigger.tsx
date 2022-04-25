import { TextInput } from "@components/TextInput";
import IconCalendar from "@foundation/Icon/Generated/IconCalendar";
import { IconCaretDown, IconCaretUp, IconSize } from "@foundation/Icon/index";
import { merge } from "@utilities/merge";
import React, { forwardRef, PropsWithChildren } from "react";

type DatePickerTriggerProps = PropsWithChildren<{
    placeHolder?: string;
    value?: string;
    isClearable?: boolean;
    isCalendarOpen?: boolean;
    onClick?: () => void;
}>;

export const DatePickerTrigger = forwardRef<HTMLDivElement, DatePickerTriggerProps>(
    ({ value, onClick, isClearable, placeHolder, isCalendarOpen }, ref) => (
        <div onClick={onClick} ref={ref} aria-hidden="true">
            <div
                className={merge([
                    "tw-absolute tw-top-2 tw-text-black-60 tw-right-8 tw-z-10",
                    value === "" ? "tw-right-4" : "tw-right-8",
                ])}
            >
                {isCalendarOpen ? <IconCaretUp size={IconSize.Size20} /> : <IconCaretDown size={IconSize.Size20} />}
            </div>
            <TextInput decorator={<IconCalendar />} placeholder={placeHolder} value={value} clearable={isClearable} />
        </div>
    ),
);

DatePickerTrigger.displayName = "DatePickerTrigger";
