import React, {
    ChangeEvent,
    FocusEvent,
    FocusEventHandler,
    KeyboardEvent,
    KeyboardEventHandler,
    useRef,
    useState,
} from "react";

export interface EditableNodeItem {
    name: string;
    onEditableSave: (value: string) => void;
}

export const EditableNodeItem = ({ name, onEditableSave }: EditableNodeItem) => {
    const [inputValue, setInputValue] = useState(name);
    const [showInput, setShowInput] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleKeyDown: KeyboardEventHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            setShowInput(false);
        }

        onEditableSave((event.target as HTMLInputElement).value);
    };

    const handleBlur: FocusEventHandler = (event: FocusEvent<HTMLTextAreaElement>) => {
        setShowInput(false);

        onEditableSave((event.target as HTMLTextAreaElement).value);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleDoubleClick = () => {
        setShowInput(true);

        setTimeout(() => inputRef.current?.focus(), 0);
    };

    return (
        <div>
            {showInput ? (
                <div
                    data-test-id="node-editable"
                    className="tw-flex tw-items-center tw-h-6 tw-gap-2 tw-px-3 tw-border tw-rounded tw-text-s tw-font-sans tw-relative tw-bg-white dark:tw-bg-transparent"
                >
                    <input
                        ref={inputRef}
                        type="text"
                        className="tw-w-full tw-grow tw-border-none tw-outline-none tw-bg-transparent tw-hide-input-arrows tw-text-black tw-placeholder-black-60 dark:tw-text-white"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        onBlur={handleBlur}
                    />
                </div>
            ) : (
                <div data-test-id="node-link-name" onDoubleClick={handleDoubleClick}>
                    {name}
                </div>
            )}
        </div>
    );
};
