/* (c) Copyright Frontify Ltd., all rights reserved. */

import { expect, test } from '@playwright/experimental-ct-react';

import { Button } from '#/components/Button/Button';

import { Flyout } from '../Flyout';

const FLYOUT_TRIGGER_TEST_ID = 'fondue-flyout-trigger';
const FLYOUT_CONTENT_TEST_ID = 'fondue-flyout-content';
const FLYOUT_TRIGGER_TEXT = 'Flyout Trigger';
const FLYOUT_BODY_TEST_ID = 'fondue-flyout-body';
const FLYOUT_BODY_TEXT = 'Flyout Body';
const FLYOUT_HEADER_TEST_ID = 'fondue-flyout-header';
const FLYOUT_HEADER_TEXT = 'Flyout Header';
const FLYOUT_FOOTER_TEST_ID = 'fondue-flyout-footer';
const FLYOUT_FOOTER_TEXT = 'Flyout Footer';

test('should render trigger', async ({ mount, page }) => {
    const component = await mount(
        <Flyout.Root>
            <Flyout.Trigger>
                <Button>{FLYOUT_TRIGGER_TEXT}</Button>
            </Flyout.Trigger>
            <Flyout.Content>
                <Flyout.Header showCloseButton>{FLYOUT_HEADER_TEXT}</Flyout.Header>
                <Flyout.Body>{FLYOUT_BODY_TEXT}</Flyout.Body>
                <Flyout.Footer>
                    <div className="tw-flex tw-justify-end tw-gap-2">
                        <Button>{FLYOUT_FOOTER_TEXT}</Button>
                    </div>
                </Flyout.Footer>
            </Flyout.Content>
        </Flyout.Root>,
    );
    const tooltipTrigger = page.getByTestId(FLYOUT_TRIGGER_TEST_ID);
    const tooltipContent = page.getByTestId(FLYOUT_CONTENT_TEST_ID);
    await expect(component).toBeVisible();
    await expect(tooltipTrigger).toBeVisible();
    await expect(component).toContainText(FLYOUT_TRIGGER_TEXT);
    await expect(tooltipContent).not.toBeVisible();
});

test('should render content on click', async ({ mount, page }) => {
    const component = await mount(
        <Flyout.Root>
            <Flyout.Trigger>
                <Button>{FLYOUT_TRIGGER_TEXT}</Button>
            </Flyout.Trigger>
            <Flyout.Content>
                <Flyout.Header showCloseButton>{FLYOUT_HEADER_TEXT}</Flyout.Header>
                <Flyout.Body>{FLYOUT_BODY_TEXT}</Flyout.Body>
                <Flyout.Footer>
                    <div className="tw-flex tw-justify-end tw-gap-2">
                        <Button>{FLYOUT_FOOTER_TEXT}</Button>
                    </div>
                </Flyout.Footer>
            </Flyout.Content>
        </Flyout.Root>,
    );
    const tooltipTrigger = page.getByTestId(FLYOUT_TRIGGER_TEST_ID);
    const tooltipContent = page.getByTestId(FLYOUT_CONTENT_TEST_ID);
    await expect(component).toBeVisible();
    await expect(tooltipTrigger).toBeVisible();
    await expect(component).toContainText(FLYOUT_TRIGGER_TEXT);
    await expect(tooltipContent).not.toBeVisible();
    await tooltipTrigger.click();
    await expect(tooltipContent).toBeVisible();
});

test('should close on click outside', async ({ mount, page }) => {
    const component = await mount(
        <Flyout.Root>
            <Flyout.Trigger>
                <Button>{FLYOUT_TRIGGER_TEXT}</Button>
            </Flyout.Trigger>
            <Flyout.Content>
                <Flyout.Header showCloseButton>{FLYOUT_HEADER_TEXT}</Flyout.Header>
                <Flyout.Body>{FLYOUT_BODY_TEXT}</Flyout.Body>
                <Flyout.Footer>
                    <div className="tw-flex tw-justify-end tw-gap-2">
                        <Button>{FLYOUT_FOOTER_TEXT}</Button>
                    </div>
                </Flyout.Footer>
            </Flyout.Content>
        </Flyout.Root>,
    );
    const tooltipTrigger = page.getByTestId(FLYOUT_TRIGGER_TEST_ID);
    const tooltipContent = page.getByTestId(FLYOUT_CONTENT_TEST_ID);
    await expect(component).toBeVisible();
    await expect(tooltipTrigger).toBeVisible();
    await expect(component).toContainText(FLYOUT_TRIGGER_TEXT);
    await expect(tooltipContent).not.toBeVisible();
    await tooltipTrigger.click();
    await expect(tooltipContent).toBeVisible();
    await page.click('body');
    await expect(tooltipContent).not.toBeVisible();
});

test('should close on cross icon click', async ({ mount, page }) => {
    const component = await mount(
        <Flyout.Root>
            <Flyout.Trigger>
                <Button>{FLYOUT_TRIGGER_TEXT}</Button>
            </Flyout.Trigger>
            <Flyout.Content>
                <Flyout.Header showCloseButton>{FLYOUT_HEADER_TEXT}</Flyout.Header>
                <Flyout.Body>{FLYOUT_BODY_TEXT}</Flyout.Body>
                <Flyout.Footer>
                    <div className="tw-flex tw-justify-end tw-gap-2">
                        <Button>{FLYOUT_FOOTER_TEXT}</Button>
                    </div>
                </Flyout.Footer>
            </Flyout.Content>
        </Flyout.Root>,
    );
    const tooltipTrigger = page.getByTestId(FLYOUT_TRIGGER_TEST_ID);
    const tooltipContent = page.getByTestId(FLYOUT_CONTENT_TEST_ID);
    await expect(component).toBeVisible();
    await expect(tooltipTrigger).toBeVisible();
    await expect(component).toContainText(FLYOUT_TRIGGER_TEXT);
    await expect(tooltipContent).not.toBeVisible();
    await tooltipTrigger.click();
    await expect(tooltipContent).toBeVisible();
    await page.getByTestId('fondue-icons-cross').click();
    await expect(tooltipContent).not.toBeVisible();
});

test('should not render close icon when prop is not passed', async ({ mount, page }) => {
    const component = await mount(
        <Flyout.Root>
            <Flyout.Trigger>
                <Button>{FLYOUT_TRIGGER_TEXT}</Button>
            </Flyout.Trigger>
            <Flyout.Content>
                <Flyout.Header>{FLYOUT_HEADER_TEXT}</Flyout.Header>
                <Flyout.Body>{FLYOUT_BODY_TEXT}</Flyout.Body>
                <Flyout.Footer>
                    <div className="tw-flex tw-justify-end tw-gap-2">
                        <Button>{FLYOUT_FOOTER_TEXT}</Button>
                    </div>
                </Flyout.Footer>
            </Flyout.Content>
        </Flyout.Root>,
    );
    const tooltipTrigger = page.getByTestId(FLYOUT_TRIGGER_TEST_ID);
    const tooltipContent = page.getByTestId(FLYOUT_CONTENT_TEST_ID);
    await expect(component).toBeVisible();
    await expect(tooltipTrigger).toBeVisible();
    await expect(component).toContainText(FLYOUT_TRIGGER_TEXT);
    await expect(tooltipContent).not.toBeVisible();
    await tooltipTrigger.click();
    await expect(tooltipContent).toBeVisible();
    await expect(page.getByTestId('fondue-icons-cross')).not.toBeVisible();
});

test('should not render close icon when prop is not passed', async ({ mount, page }) => {
    const component = await mount(
        <Flyout.Root>
            <Flyout.Trigger>
                <Button>{FLYOUT_TRIGGER_TEXT}</Button>
            </Flyout.Trigger>
            <Flyout.Content>
                <Flyout.Header>{FLYOUT_HEADER_TEXT}</Flyout.Header>
                <Flyout.Body>{FLYOUT_BODY_TEXT}</Flyout.Body>
                <Flyout.Footer>
                    <div className="tw-flex tw-justify-end tw-gap-2">
                        <Button>{FLYOUT_FOOTER_TEXT}</Button>
                    </div>
                </Flyout.Footer>
            </Flyout.Content>
        </Flyout.Root>,
    );
    const tooltipTrigger = page.getByTestId(FLYOUT_TRIGGER_TEST_ID);
    const tooltipContent = page.getByTestId(FLYOUT_CONTENT_TEST_ID);
    await expect(component).toBeVisible();
    await expect(tooltipTrigger).toBeVisible();
    await expect(component).toContainText(FLYOUT_TRIGGER_TEXT);
    await expect(tooltipContent).not.toBeVisible();
    await tooltipTrigger.click();
    await expect(tooltipContent).toBeVisible();
    await expect(page.getByTestId('fondue-icons-cross')).not.toBeVisible();
});

test('should render only flyout header', async ({ mount, page }) => {
    const component = await mount(
        <Flyout.Root>
            <Flyout.Trigger>
                <Button>{FLYOUT_TRIGGER_TEXT}</Button>
            </Flyout.Trigger>
            <Flyout.Content>
                <Flyout.Header>{FLYOUT_HEADER_TEXT}</Flyout.Header>
            </Flyout.Content>
        </Flyout.Root>,
    );
    const tooltipTrigger = page.getByTestId(FLYOUT_TRIGGER_TEST_ID);
    const tooltipContent = page.getByTestId(FLYOUT_CONTENT_TEST_ID);
    await expect(component).toBeVisible();
    await expect(tooltipTrigger).toBeVisible();
    await expect(component).toContainText(FLYOUT_TRIGGER_TEXT);
    await expect(tooltipContent).not.toBeVisible();
    await tooltipTrigger.click();
    await expect(tooltipContent).toBeVisible();
    await expect(tooltipContent.getByTestId(FLYOUT_HEADER_TEST_ID)).toBeVisible();
    await expect(tooltipContent).toContainText(FLYOUT_HEADER_TEXT);
    await expect(tooltipContent.getByTestId(FLYOUT_BODY_TEST_ID)).not.toBeVisible();
    await expect(tooltipContent).not.toContainText(FLYOUT_BODY_TEXT);
    await expect(tooltipContent.getByTestId(FLYOUT_FOOTER_TEST_ID)).not.toBeVisible();
    await expect(tooltipContent).not.toContainText(FLYOUT_FOOTER_TEXT);
});

test('should render only flyout body', async ({ mount, page }) => {
    const component = await mount(
        <Flyout.Root>
            <Flyout.Trigger>
                <Button>{FLYOUT_TRIGGER_TEXT}</Button>
            </Flyout.Trigger>
            <Flyout.Content>
                <Flyout.Body>{FLYOUT_BODY_TEXT}</Flyout.Body>
            </Flyout.Content>
        </Flyout.Root>,
    );
    const tooltipTrigger = page.getByTestId(FLYOUT_TRIGGER_TEST_ID);
    const tooltipContent = page.getByTestId(FLYOUT_CONTENT_TEST_ID);
    await expect(component).toBeVisible();
    await expect(tooltipTrigger).toBeVisible();
    await expect(component).toContainText(FLYOUT_TRIGGER_TEXT);
    await expect(tooltipContent).not.toBeVisible();
    await tooltipTrigger.click();
    await expect(tooltipContent).toBeVisible();
    await expect(tooltipContent.getByTestId(FLYOUT_HEADER_TEST_ID)).not.toBeVisible();
    await expect(tooltipContent).not.toContainText(FLYOUT_HEADER_TEXT);
    await expect(tooltipContent.getByTestId(FLYOUT_BODY_TEST_ID)).toBeVisible();
    await expect(tooltipContent).toContainText(FLYOUT_BODY_TEXT);
    await expect(tooltipContent.getByTestId(FLYOUT_FOOTER_TEST_ID)).not.toBeVisible();
    await expect(tooltipContent).not.toContainText(FLYOUT_FOOTER_TEXT);
});

test('should render only flyout footer', async ({ mount, page }) => {
    const component = await mount(
        <Flyout.Root>
            <Flyout.Trigger>
                <Button>{FLYOUT_TRIGGER_TEXT}</Button>
            </Flyout.Trigger>
            <Flyout.Content>
                <Flyout.Footer>
                    <div className="tw-flex tw-justify-end tw-gap-2">
                        <Button>{FLYOUT_FOOTER_TEXT}</Button>
                    </div>
                </Flyout.Footer>
            </Flyout.Content>
        </Flyout.Root>,
    );
    const tooltipTrigger = page.getByTestId(FLYOUT_TRIGGER_TEST_ID);
    const tooltipContent = page.getByTestId(FLYOUT_CONTENT_TEST_ID);
    await expect(component).toBeVisible();
    await expect(tooltipTrigger).toBeVisible();
    await expect(component).toContainText(FLYOUT_TRIGGER_TEXT);
    await expect(tooltipContent).not.toBeVisible();
    await tooltipTrigger.click();
    await expect(tooltipContent).toBeVisible();
    await expect(tooltipContent.getByTestId(FLYOUT_HEADER_TEST_ID)).not.toBeVisible();
    await expect(tooltipContent).not.toContainText(FLYOUT_HEADER_TEXT);
    await expect(tooltipContent.getByTestId(FLYOUT_BODY_TEST_ID)).not.toBeVisible();
    await expect(tooltipContent).not.toContainText(FLYOUT_BODY_TEXT);
    await expect(tooltipContent.getByTestId(FLYOUT_FOOTER_TEST_ID)).toBeVisible();
    await expect(tooltipContent).toContainText(FLYOUT_FOOTER_TEXT);
});

test('should render full flyout layout', async ({ mount, page }) => {
    const component = await mount(
        <Flyout.Root>
            <Flyout.Trigger>
                <Button>{FLYOUT_TRIGGER_TEXT}</Button>
            </Flyout.Trigger>
            <Flyout.Content>
                <Flyout.Header>{FLYOUT_HEADER_TEXT}</Flyout.Header>
                <Flyout.Body>{FLYOUT_BODY_TEXT}</Flyout.Body>
                <Flyout.Footer>
                    <div className="tw-flex tw-justify-end tw-gap-2">
                        <Button>{FLYOUT_FOOTER_TEXT}</Button>
                    </div>
                </Flyout.Footer>
            </Flyout.Content>
        </Flyout.Root>,
    );
    const tooltipTrigger = page.getByTestId(FLYOUT_TRIGGER_TEST_ID);
    const tooltipContent = page.getByTestId(FLYOUT_CONTENT_TEST_ID);
    await expect(component).toBeVisible();
    await expect(tooltipTrigger).toBeVisible();
    await expect(component).toContainText(FLYOUT_TRIGGER_TEXT);
    await expect(tooltipContent).not.toBeVisible();
    await tooltipTrigger.click();
    await expect(tooltipContent).toBeVisible();
    await expect(tooltipContent.getByTestId(FLYOUT_HEADER_TEST_ID)).toBeVisible();
    await expect(tooltipContent).toContainText(FLYOUT_HEADER_TEXT);
    await expect(tooltipContent.getByTestId(FLYOUT_BODY_TEST_ID)).toBeVisible();
    await expect(tooltipContent).toContainText(FLYOUT_BODY_TEXT);
    await expect(tooltipContent.getByTestId(FLYOUT_FOOTER_TEST_ID)).toBeVisible();
    await expect(tooltipContent).toContainText(FLYOUT_FOOTER_TEXT);
});

test('should render compact padding by default', async ({ mount, page }) => {
    const component = await mount(
        <Flyout.Root>
            <Flyout.Trigger>
                <Button>{FLYOUT_TRIGGER_TEXT}</Button>
            </Flyout.Trigger>
            <Flyout.Content>
                <Flyout.Header>{FLYOUT_HEADER_TEXT}</Flyout.Header>
                <Flyout.Body>{FLYOUT_BODY_TEXT}</Flyout.Body>
                <Flyout.Footer>
                    <div className="tw-flex tw-justify-end tw-gap-2">
                        <Button>{FLYOUT_FOOTER_TEXT}</Button>
                    </div>
                </Flyout.Footer>
            </Flyout.Content>
        </Flyout.Root>,
    );
    const tooltipTrigger = page.getByTestId(FLYOUT_TRIGGER_TEST_ID);
    const tooltipContent = page.getByTestId(FLYOUT_CONTENT_TEST_ID);
    await expect(component).toBeVisible();
    await expect(tooltipTrigger).toBeVisible();
    await expect(component).toContainText(FLYOUT_TRIGGER_TEXT);
    await expect(tooltipContent).not.toBeVisible();
    await tooltipTrigger.click();
    await expect(tooltipContent).toBeVisible();
    await expect(tooltipContent.getByTestId(FLYOUT_HEADER_TEST_ID)).toHaveClass(/tw-p-4/);
    await expect(tooltipContent.getByTestId(FLYOUT_BODY_TEST_ID)).toHaveClass(/tw-py-2/);
    await expect(tooltipContent.getByTestId(FLYOUT_BODY_TEST_ID)).toHaveClass(/tw-px-6/);
    await expect(tooltipContent.getByTestId(FLYOUT_FOOTER_TEST_ID)).toHaveClass(/tw-p-10/);
});

test('should render compact padding', async ({ mount, page }) => {
    const component = await mount(
        <Flyout.Root>
            <Flyout.Trigger>
                <Button>{FLYOUT_TRIGGER_TEXT}</Button>
            </Flyout.Trigger>
            <Flyout.Content padding="compact">
                <Flyout.Header>{FLYOUT_HEADER_TEXT}</Flyout.Header>
                <Flyout.Body>{FLYOUT_BODY_TEXT}</Flyout.Body>
                <Flyout.Footer>
                    <div className="tw-flex tw-justify-end tw-gap-2">
                        <Button>{FLYOUT_FOOTER_TEXT}</Button>
                    </div>
                </Flyout.Footer>
            </Flyout.Content>
        </Flyout.Root>,
    );
    const tooltipTrigger = page.getByTestId(FLYOUT_TRIGGER_TEST_ID);
    const tooltipContent = page.getByTestId(FLYOUT_CONTENT_TEST_ID);
    await expect(component).toBeVisible();
    await expect(tooltipTrigger).toBeVisible();
    await expect(component).toContainText(FLYOUT_TRIGGER_TEXT);
    await expect(tooltipContent).not.toBeVisible();
    await tooltipTrigger.click();
    await expect(tooltipContent).toBeVisible();
    await expect(tooltipContent.getByTestId(FLYOUT_HEADER_TEST_ID)).toHaveClass(/tw-p-4/);
    await expect(tooltipContent.getByTestId(FLYOUT_BODY_TEST_ID)).toHaveClass(/tw-py-2/);
    await expect(tooltipContent.getByTestId(FLYOUT_BODY_TEST_ID)).toHaveClass(/tw-px-6/);
    await expect(tooltipContent.getByTestId(FLYOUT_FOOTER_TEST_ID)).toHaveClass(/tw-p-10/);
});

test('should render comfortable padding', async ({ mount, page }) => {
    const component = await mount(
        <Flyout.Root>
            <Flyout.Trigger>
                <Button>{FLYOUT_TRIGGER_TEXT}</Button>
            </Flyout.Trigger>
            <Flyout.Content padding="comfortable">
                <Flyout.Header>{FLYOUT_HEADER_TEXT}</Flyout.Header>
                <Flyout.Body>{FLYOUT_BODY_TEXT}</Flyout.Body>
                <Flyout.Footer>
                    <div className="tw-flex tw-justify-end tw-gap-2">
                        <Button>{FLYOUT_FOOTER_TEXT}</Button>
                    </div>
                </Flyout.Footer>
            </Flyout.Content>
        </Flyout.Root>,
    );
    const tooltipTrigger = page.getByTestId(FLYOUT_TRIGGER_TEST_ID);
    const tooltipContent = page.getByTestId(FLYOUT_CONTENT_TEST_ID);
    await expect(component).toBeVisible();
    await expect(tooltipTrigger).toBeVisible();
    await expect(component).toContainText(FLYOUT_TRIGGER_TEXT);
    await expect(tooltipContent).not.toBeVisible();
    await tooltipTrigger.click();
    await expect(tooltipContent).toBeVisible();
    await expect(tooltipContent.getByTestId(FLYOUT_HEADER_TEST_ID)).toHaveClass(/tw-p-6/);
    await expect(tooltipContent.getByTestId(FLYOUT_BODY_TEST_ID)).toHaveClass(/tw-py-4/);
    await expect(tooltipContent.getByTestId(FLYOUT_BODY_TEST_ID)).toHaveClass(/tw-px-6/);
    await expect(tooltipContent.getByTestId(FLYOUT_FOOTER_TEST_ID)).toHaveClass(/tw-p-6/);
});
