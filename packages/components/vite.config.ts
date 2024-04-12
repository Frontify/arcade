/* (c) Copyright Frontify Ltd., all rights reserved. */

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';
import vitePluginExternal from 'vite-plugin-external';
import tsConfigPaths from 'vite-tsconfig-paths';

import { peerDependencies as peerDependenciesMap } from './package.json';

export default defineConfig({
    plugins: [
        react(),
        tsConfigPaths(),
        vitePluginExternal({
            nodeBuiltins: true,
            externalizeDeps: Object.keys(peerDependenciesMap),
        }),
        dts({ insertTypesEntry: true, rollupTypes: true, exclude: ['**/*.stories.tsx'] }),
    ],
    test: {
        environment: 'happy-dom',
        setupFiles: ['./src/setupTests.ts'],
        css: true,
        coverage: {
            enabled: true,
            provider: 'v8',
            reporter: ['text', 'lcov', 'html'],
        },
    },
});
