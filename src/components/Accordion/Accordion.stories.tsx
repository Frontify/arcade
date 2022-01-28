/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Button } from "@components/Button/Button";
import { Dropdown } from "@components/Dropdown";
import { FieldsetHeaderType } from "@components/FieldsetHeader/FieldsetHeader";
import { FormControl } from "@components/FormControl/FormControl";
import { Slider } from "@components/Slider/Slider";
import { Switch, SwitchSize } from "@components/Switch/Switch";
import { TextInput, TextInputType } from "@components/TextInput/TextInput";
import IconIcons from "@foundation/Icon/Generated/IconIcons";
import IconTextAlignCenter from "@foundation/Icon/Generated/IconTextAlignCenter";
import IconTextAlignLeft from "@foundation/Icon/Generated/IconTextAlignLeft";
import IconTextAlignRight from "@foundation/Icon/Generated/IconTextAlignRight";
import { IconSize } from "@foundation/Icon/IconSize";
import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import { Color } from "../../types/colors";
import { ColorPickerFlyout as ColorPickerFlyoutComponent } from "../ColorInputFlyout/ColorPickerFlyout";
import { EXAMPLE_PALETTES } from "../ColorPicker/example-palettes";
import { Accordion as AccordionComponent, AccordionItem, AccordionProps } from "./Accordion";

// eslint-disable-next-line import/no-default-export
export default {
    title: "Components/Accordion",
    component: AccordionComponent,
} as Meta<AccordionProps>;

export const WithDifferentAccordionItems: Story<AccordionProps> = () => {
    const [showContent, setShowContent] = useState(true);
    const [input, setInput] = useState("");
    const [activeItemId, setActiveItemId] = useState<string | number | undefined>();
    const [temporaryColor, setTemporaryColor] = useState<Color | null>({ r: 0, g: 146, b: 120 });
    const [selectedColor, setSelectedColor] = useState<Color | null>(null);

    return (
        <AccordionComponent>
            <AccordionItem
                header={{
                    children: "Item with decorator, type Accordion and a FormControl child",
                    decorator: <IconIcons />,
                    type: FieldsetHeaderType.Accordion,
                    active: true,
                }}
            >
                <FormControl
                    label={{ children: "Width", htmlFor: "width", tooltip: { content: "Width of the future" } }}
                    extra="Some extra text."
                    helper={{ text: "This input should always equal to 42." }}
                >
                    <TextInput value={input} onChange={setInput} />
                </FormControl>
            </AccordionItem>
            <AccordionItem header={{ children: "Item with plain text child", type: FieldsetHeaderType.AddRemove }}>
                bar
            </AccordionItem>
            <AccordionItem
                header={{ children: "Item with dropdown child", type: FieldsetHeaderType.AddRemove, active: true }}
            >
                <Dropdown
                    onChange={(id) => setActiveItemId(id)}
                    activeItemId={activeItemId}
                    menuBlocks={[
                        {
                            id: "block1",
                            menuItems: [
                                { id: "1", title: "Item 1" },
                                { id: "2", title: "Item 2" },
                                { id: "3", title: "Item 3" },
                                { id: "4", title: "Item 4" },
                                { id: "5", title: "Item 5" },
                            ],
                        },
                    ]}
                />
            </AccordionItem>
            <AccordionItem header={{ children: "Item with color picker flyout", type: FieldsetHeaderType.Accordion }}>
                <ColorPickerFlyoutComponent
                    disabled={false}
                    currentColor={temporaryColor}
                    onClick={() => setSelectedColor(temporaryColor)}
                    onClose={() => setTemporaryColor(selectedColor)}
                    onSelect={(color) => setTemporaryColor(color)}
                    palettes={EXAMPLE_PALETTES}
                />
            </AccordionItem>
            <AccordionItem
                header={{
                    children: "Empty item with an onClick callback",
                    onClick: action("click"),
                }}
            />
            <AccordionItem header={{ children: "Item with resizable content", type: FieldsetHeaderType.AddRemove }}>
                <div className={!showContent ? "tw-hidden" : ""}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <Button onClick={() => setShowContent(!showContent)}>Toggle Content</Button>
            </AccordionItem>
            <AccordionItem
                header={{ children: "Item without padding", type: FieldsetHeaderType.AddRemove }}
                padding={false}
            >
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </AccordionItem>
        </AccordionComponent>
    );
};

export const WithAdvancedFormControls: Story<AccordionProps> = () => {
    const [spacing, setSpacing] = useState("1");
    const [showAdvancedSpacing, setShowAdvancedSpacing] = useState(false);
    const [alignment, setAlignmnent] = useState("l");

    return (
        <AccordionComponent>
            <AccordionItem header={{ children: "Layout", type: FieldsetHeaderType.Accordion }}>
                <FormControl
                    label={{ children: "Spacing", htmlFor: "spacing" }}
                    extra={
                        <Switch
                            label="advanced"
                            on={showAdvancedSpacing}
                            size={SwitchSize.Small}
                            onChange={() => setShowAdvancedSpacing(!showAdvancedSpacing)}
                        />
                    }
                    helper={{ text: "Defines the spacing between elements." }}
                >
                    <div className="flex items-center h-11 relative">
                        {showAdvancedSpacing ? (
                            <div className="w-full">
                                <TextInput id="spacing" decorator="px" type={TextInputType.Number} />
                            </div>
                        ) : (
                            <Slider
                                id="spacing"
                                onChange={setSpacing}
                                activeItemId={spacing}
                                items={[
                                    { id: "1", value: "S" },
                                    { id: "2", value: "M" },
                                    { id: "3", value: "L" },
                                ]}
                            />
                        )}
                    </div>
                </FormControl>
            </AccordionItem>
            <AccordionItem header={{ children: "Alignment", type: FieldsetHeaderType.Accordion }}>
                <FormControl label={{ children: "Text", htmlFor: "text-alignment" }}>
                    <Slider
                        onChange={setAlignmnent}
                        activeItemId={alignment}
                        items={[
                            {
                                id: "l",
                                icon: <IconTextAlignLeft size={IconSize.Size16} />,
                                ariaLabel: "Text Align Left",
                            },
                            {
                                id: "c",
                                icon: <IconTextAlignCenter size={IconSize.Size16} />,
                                ariaLabel: "Text Align Center",
                            },
                            {
                                id: "r",
                                icon: <IconTextAlignRight size={IconSize.Size16} />,
                                ariaLabel: "Text Align Right",
                            },
                        ]}
                    />
                </FormControl>
            </AccordionItem>
        </AccordionComponent>
    );
};
