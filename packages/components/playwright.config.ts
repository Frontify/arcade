/* (c) Copyright Frontify Ltd., all rights reserved. */

import { defineConfig, devices } from '@playwright/experimental-ct-react';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://playwright.dev/docs/test-configuration
export default defineConfig({
    testDir: './src',
    snapshotDir: './__snapshots__',
    timeout: 10_000,
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    testMatch: '**/*.ct.{ts,tsx}',
    use: {
        trace: 'on-first-retry',
        ctPort: 3100,
        ctViteConfig: {
            plugins: [tsConfigPaths()],
        },
        testIdAttribute: 'data-test-id',
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
        { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    ],
});
