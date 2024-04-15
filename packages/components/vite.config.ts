/* (c) Copyright Frontify Ltd., all rights reserved. */

import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import vitePluginExternal from 'vite-plugin-external';
import tsConfigPaths from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';

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
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'FondueComponents',
            formats: ['es'],
        },
        sourcemap: true,
        minify: true,
    },
    test: {
        environment: 'happy-dom',
        setupFiles: ['./src/setupTests.ts'],
        css: true,
        include: ['./src/**/*.test.ts', './src/**/*.test.tsx'],
        coverage: {
            exclude: [...configDefaults.exclude, '**.**', 'scripts/templates/**/*'],
            enabled: true,
            provider: 'v8',
            reporter: ['text', 'lcov', 'html'],
        },
    },
});
