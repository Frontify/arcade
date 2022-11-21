/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { DatePicker, DatePickerProps } from './DatePicker';
import { FormControl } from '@components/FormControl';
import { Slider } from '@components/Slider';

export default {
    title: 'Components/DatePicker',
    component: DatePicker,
} as Meta<DatePickerProps>;

const Template: Story<DatePickerProps> = (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>();

    return <DatePicker {...args} value={selectedDate as Date} onChange={setSelectedDate} />;
};

const TemplateWithFormControl: Story<DatePickerProps> = (args) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>();

    return (
        <div className="tw-flex tw-flex-col">
            <div className="tw-px-5 tw-py-3 tw-flex tw-flex-col tw-gap-3">
                <FormControl>
                    <DatePicker {...args} value={selectedDate as Date} onChange={setSelectedDate} />
                </FormControl>
            </div>
            <div className="tw-px-5 tw-py-3 tw-flex tw-flex-col tw-gap-3">
                <FormControl>
                    <Slider
                        activeItemId="a"
                        items={[
                            { id: 'a', value: 'abc' },
                            { id: 'b', value: 'def' },
                            { id: 'c', value: 'ghi' },
                        ]}
                        onChange={() => void 0}
                    />
                </FormControl>
            </div>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    placeHolder: 'Select a date',
    isClearable: true,
    shouldCloseOnSelect: true,
    dateFormat: 'dd MMM yyyy',
};

Default.storyName = 'Date Picker';

export const InsideFormControlAndOverSlider = TemplateWithFormControl.bind({});
InsideFormControlAndOverSlider.args = {
    placeHolder: 'Select a date',
    isClearable: true,
    shouldCloseOnSelect: true,
    dateFormat: 'dd MMM yyyy',
};
