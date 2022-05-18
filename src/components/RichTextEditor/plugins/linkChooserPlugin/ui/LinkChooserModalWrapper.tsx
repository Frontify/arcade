import { ButtonStyle } from "@components/Button";
import { Modal } from "@components/Modal";
import { EVENT_LINK_CHANGE_CONFIRMED } from "@components/RichTextEditor/Toolbar";
import React from "react";
import { ChosenLink } from "../types";
import { SimpleLinkChooser } from "./SimpleLinkChooser";

type LinkChooserModalWrapperProps = {
    isLinkChooserModalOpen: boolean;
    setIsLinkChooserModalOpen: (isOpen: boolean) => void;
    chosenLink: ChosenLink;
    setChosenLink: (chosenLink: ChosenLink) => void;
};

export const LinkChooserModalWrapper = ({
    isLinkChooserModalOpen,
    setIsLinkChooserModalOpen,
    chosenLink,
    setChosenLink,
}: LinkChooserModalWrapperProps) => {
    return (
        <Modal isOpen={isLinkChooserModalOpen} isDismissable>
            {/* Todo: Until we have moved the search logic, a 'simple link chooser' is rendered instead of the real link chooser */}

            <SimpleLinkChooser chosenLink={chosenLink} setChosenLink={setChosenLink}></SimpleLinkChooser>

            {/* <LinkChooser
                openInNewTab={chosenLink?.openInNewTab || false}
                onOpenInNewTabChange={() => {
                    setChosenLink({
                        searchResult: chosenLink.searchResult,
                        openInNewTab: !chosenLink.openInNewTab,
                    });
                }}
                onLinkChange={(value) =>
                    setChosenLink({
                        searchResult: value,
                        openInNewTab: chosenLink.openInNewTab,
                    })
                }
                selectedResult={chosenLink.searchResult}
            /> */}

            <Modal.Footer
                buttons={[
                    {
                        children: "Cancel",
                        onClick: () => {
                            setChosenLink({ searchResult: null, openInNewTab: false });
                            setIsLinkChooserModalOpen(false);
                        },
                        style: ButtonStyle.Secondary,
                    },
                    {
                        children: "Choose",
                        onClick: () => {
                            document.dispatchEvent(
                                new CustomEvent(EVENT_LINK_CHANGE_CONFIRMED, { detail: { chosenLink } }),
                            );
                            setIsLinkChooserModalOpen(false);
                        },
                        style: ButtonStyle.Primary,
                    },
                ]}
            />
        </Modal>
    );
};
