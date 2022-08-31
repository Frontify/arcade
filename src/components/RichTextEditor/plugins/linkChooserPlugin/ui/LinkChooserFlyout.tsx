/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ButtonStyle } from '@components/Button';
import { Checkbox, CheckboxState } from '@components/Checkbox';
import { Flyout, FlyoutFooter } from '@components/Flyout';
import { FormControl } from '@components/FormControl';
import { TextInput } from '@components/TextInput';
import { IconCheckMark } from '@foundation/Icon';
import React, { HTMLAttributes, MutableRefObject, ReactNode } from 'react';
import { LINK_CHANGE_CANCELED, LINK_CHANGE_CONFIRMED } from '../events';
import { ChosenLink } from '../types';

type LinkChooserFlyoutProps = {
    isFlyoutOpen: boolean;
    setIsFlyoutOpen: (open: boolean) => void;
    chosenLink: ChosenLink;
    setChosenLink: (chosenLink: ChosenLink) => void;
    trigger:
        | ReactNode
        | ((
              triggerProps: HTMLAttributes<HTMLElement>,
              ref: MutableRefObject<HTMLElement | null>,
              triggerState: { isFocusVisible: boolean; isPressed: boolean },
          ) => JSX.Element);
};

export const LinkChooserFlyout = ({
    isFlyoutOpen,
    setIsFlyoutOpen,
    chosenLink,
    setChosenLink,
    trigger,
}: LinkChooserFlyoutProps) => {
    const onConfirm = () => {
        document.dispatchEvent(new CustomEvent(LINK_CHANGE_CONFIRMED, { detail: { chosenLink } }));
        setIsFlyoutOpen(false);
    };

    const onCancel = () => {
        document.dispatchEvent(new CustomEvent(LINK_CHANGE_CANCELED));
        setIsFlyoutOpen(false);
    };

    const openInNewTab = chosenLink?.openInNewTab;
    const searchResult = chosenLink?.searchResult;

    return (
        <Flyout
            isOpen={isFlyoutOpen}
            onOpenChange={(open: boolean) => open && onCancel()}
            onConfirm={onConfirm}
            trigger={trigger}
            legacyFooter={false}
            contentMinHeight={152}
            fixedFooter={
                <FlyoutFooter
                    buttons={[
                        {
                            children: 'Cancel',
                            style: ButtonStyle.Secondary,
                            onClick: () => onCancel(),
                        },
                        {
                            children: 'Save',
                            onClick: onConfirm,
                            style: ButtonStyle.Primary,
                            icon: <IconCheckMark />,
                            disabled: !searchResult?.link || !searchResult?.title,
                        },
                    ]}
                />
            }
        >
            <div
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        onConfirm();
                    }
                }}
                className="tw-flex tw-flex-col tw-gap-y-5 tw-p-7"
                data-test-id={'link-chooser-flyout'}
            >
                {/* Todo: Until we have moved the search logic, a 'simple link chooser' is rendered instead of the real link chooser */}

                <FormControl
                    label={{
                        children: 'Text',
                        htmlFor: 'linkText',
                        required: true,
                    }}
                >
                    <TextInput
                        required={true}
                        id={'linkText'}
                        placeholder="Link Text"
                        value={searchResult?.title}
                        onChange={(value) => {
                            setChosenLink({
                                searchResult: {
                                    id: value,
                                    title: value,
                                    link: searchResult?.link ?? '',
                                    icon: 'LINK',
                                },
                                openInNewTab,
                            });
                        }}
                    />
                </FormControl>
                <FormControl
                    label={{
                        children: 'URL',
                        htmlFor: 'url',
                        required: true,
                    }}
                >
                    <TextInput
                        required={true}
                        id={'url'}
                        placeholder="https://example.com"
                        value={searchResult?.link}
                        onChange={(value) => {
                            setChosenLink({
                                searchResult: {
                                    id: value,
                                    title: searchResult?.title ?? '',
                                    link: value,
                                    icon: 'LINK',
                                },
                                openInNewTab,
                            });
                        }}
                    />
                </FormControl>
                <Checkbox
                    value="new-tab"
                    label="Open in New Tab"
                    state={openInNewTab ? CheckboxState.Checked : CheckboxState.Unchecked}
                    onChange={() => {
                        setChosenLink({
                            searchResult,
                            openInNewTab: !openInNewTab,
                        });
                    }}
                />
            </div>
        </Flyout>
    );
};
