/* (c) Copyright Frontify Ltd., all rights reserved. */

import { MenuBlock } from '@components/Dropdown/SelectMenu/SelectMenu';
import { mount } from '@cypress/react';
import { MenuItemContentSize } from '@components/MenuItem/MenuItemContent';
import { FOCUS_STYLE } from '@utilities/focusStyle';
import React, { FC, ReactElement, useState } from 'react';
import { Dropdown } from './Dropdown';
import { IconIcon } from '@foundation/Icon';

const DROPDOWN_TRIGGER_ID = '[data-test-id=dropdown-trigger]';
const DROPDOWN_MENU_ID = '[data-test-id=dropdown-menu]';
const DROPDOWN_CLEAR_BUTTON_ID = '[data-test-id=dropdown-clear-button]';
const MENU_ITEM_LIST_ID = '[data-test-id=menu-item-list]';
const MENU_ITEM_DECORATOR_ID = '[data-test-id=menu-item-decorator]';
const TRIGGER_ID = '[data-test-id=trigger]';
const MENU_ITEM_ID = '[data-test-id=menu-item]';
const MENU_ITEM_ACTIVE_ID = '[data-test-id=menu-item-active]';
const MENU_ITEM_TITLE_ID = '[data-test-id=menu-item-title]';

const ITEMS = [
    {
        id: 'small-block',
        menuItems: [
            {
                id: '1',
                title: 'Small',
                size: MenuItemContentSize.Small,
            },
            {
                id: '2',
                title: 'Small second',
                size: MenuItemContentSize.Small,
            },
            {
                id: '3',
                title: 'Small third',
                size: MenuItemContentSize.Small,
            },
            {
                id: '4',
                title: 'Small fourth',
                size: MenuItemContentSize.Small,
            },
            {
                id: '5',
                title: 'Small fifth',
                size: MenuItemContentSize.Small,
            },
        ],
    },
];

const FIRST_ITEM_ID = ITEMS[0].menuItems[0].id;

type Props = {
    menuBlocks: MenuBlock[];
    placeholder?: string;
    initialActiveId?: string | number;
    clearable?: boolean;
    disabled?: boolean;
    decorator?: ReactElement;
    autoResize?: boolean;
};

const Component: FC<Props> = ({
    menuBlocks,
    placeholder,
    initialActiveId,
    clearable = false,
    disabled = false,
    decorator,
    autoResize = true,
}) => {
    const [activeItemId, setActiveItemId] = useState(initialActiveId);
    return (
        <Dropdown
            activeItemId={activeItemId}
            onChange={setActiveItemId}
            menuBlocks={menuBlocks}
            placeholder={placeholder}
            clearable={clearable}
            disabled={disabled}
            decorator={decorator}
            autoResize={autoResize}
        />
    );
};

describe('Dropdown Component', () => {
    it('renders with placeholder', () => {
        mount(<Component menuBlocks={ITEMS} placeholder="Select item" />);
        cy.get(MENU_ITEM_TITLE_ID).contains('Select item');
        cy.get(DROPDOWN_TRIGGER_ID).click();
        cy.get(MENU_ITEM_LIST_ID).children().should('have.length', 5);
    });

    it('renders with initial active item', () => {
        mount(<Component menuBlocks={ITEMS} initialActiveId={FIRST_ITEM_ID} />);
        cy.get(MENU_ITEM_TITLE_ID).contains('Small');
        cy.get(DROPDOWN_TRIGGER_ID).click();
        cy.get(MENU_ITEM_ACTIVE_ID).should('exist').and('have.length', 1);
    });

    it('changes selection on click', () => {
        mount(<Component menuBlocks={ITEMS} initialActiveId={FIRST_ITEM_ID} />);
        cy.get(DROPDOWN_TRIGGER_ID).click();
        cy.get(MENU_ITEM_ID).first().as('firstListItem');
        cy.get(MENU_ITEM_ID).eq(1).as('secondListItem');
        cy.get(MENU_ITEM_ID).eq(2).as('thirdListItem');

        cy.get('@secondListItem').click();
        cy.get(MENU_ITEM_TITLE_ID).contains('Small second');

        cy.get(DROPDOWN_TRIGGER_ID).click();
        cy.get('@firstListItem').should('have.attr', 'aria-selected', 'false');
        cy.get('@secondListItem').should('have.attr', 'aria-selected', 'true');
        cy.get('@thirdListItem').click();
        cy.get(MENU_ITEM_TITLE_ID).contains('Small third');
        cy.get(DROPDOWN_TRIGGER_ID).click();
        cy.get('@thirdListItem').should('have.attr', 'aria-selected', 'true');
        cy.get('@secondListItem').should('have.attr', 'aria-selected', 'false');
    });

    it('renders with clearable option', () => {
        mount(<Component menuBlocks={ITEMS} placeholder="Select item" clearable />);
        cy.get(DROPDOWN_TRIGGER_ID).click();
        cy.get(MENU_ITEM_ID).first().as('firstListItem');

        cy.get('@firstListItem').click();
        cy.get(MENU_ITEM_TITLE_ID).contains('Small');
        cy.get(DROPDOWN_TRIGGER_ID).click();
        cy.get('@firstListItem').should('have.attr', 'aria-selected', 'true');
        cy.get(DROPDOWN_CLEAR_BUTTON_ID).click();
        cy.get(MENU_ITEM_TITLE_ID).contains('Select item');
        cy.get(DROPDOWN_TRIGGER_ID).click();
        cy.get('@firstListItem').should('have.attr', 'aria-selected', 'false');
    });

    it('should not focus the dropdown when disabled', () => {
        mount(<Component menuBlocks={ITEMS} disabled={true} />);

        cy.window().focus();
        cy.get('body').realPress('Tab');
        for (const style of FOCUS_STYLE.split(' ')) {
            cy.get(TRIGGER_ID).should('not.have.class', style);
        }
    });

    it('should not display persisted icon if omitted', () => {
        mount(<Component menuBlocks={ITEMS} />);

        cy.get(`${MENU_ITEM_DECORATOR_ID} > svg`).should('not.exist');
    });

    it('should display persisted icon if provided', () => {
        mount(<Component menuBlocks={ITEMS} decorator={<IconIcon />} />);

        cy.get(`${MENU_ITEM_DECORATOR_ID} > svg`).invoke('attr', 'name').should('eq', 'IconIcons');
    });

    it('should have a maximum height calculated based on viewport and dropdown position', () => {
        cy.viewport(550, 220);
        mount(<Component menuBlocks={ITEMS} decorator={<IconIcon />} />);
        cy.get(DROPDOWN_TRIGGER_ID).click();
        cy.get(DROPDOWN_MENU_ID).then(($el) => {
            const { bottom } = $el[0].getBoundingClientRect();
            expect(Number(bottom.toFixed(0))).to.equal(220 - 33);
        });
    });

    it('should prevent height adjusting if autoResize is false', () => {
        cy.viewport(550, 220);
        mount(<Component menuBlocks={ITEMS} decorator={<IconIcon />} autoResize={false} />);
        cy.get(DROPDOWN_TRIGGER_ID).click();
        cy.get(DROPDOWN_MENU_ID).then(($el) => {
            const { bottom } = $el[0].getBoundingClientRect();
            cy.viewport(550, 250);
            cy.get(DROPDOWN_MENU_ID).then(($updatedEl) => {
                const { bottom: newBottom } = $updatedEl[0].getBoundingClientRect();
                expect(bottom).to.equal(newBottom);
            });
        });
    });

    it('should have a minimum height of 130px', () => {
        cy.viewport(550, 160);
        mount(<Component menuBlocks={ITEMS} decorator={<IconIcon />} />);
        cy.get(DROPDOWN_TRIGGER_ID).click();
        cy.get(DROPDOWN_MENU_ID).then(($el) => {
            const height = $el[0].clientHeight;
            expect(height).to.equal(130);
        });
    });

    it('should open dropdown on click next to the caret icon', () => {
        const MARGIN_RIGHT = 6;
        const MARGIN_TOP = 17;
        mount(<Component menuBlocks={ITEMS} placeholder="Select item" />);
        cy.get(MENU_ITEM_TITLE_ID).contains('Select item');
        cy.get(TRIGGER_ID)
            .invoke('css', 'width')
            .then((width) => cy.get(TRIGGER_ID).click(parseInt(width.toString()) - MARGIN_RIGHT, MARGIN_TOP));
        cy.get(MENU_ITEM_LIST_ID).children().should('have.length', 5);
    });
});
