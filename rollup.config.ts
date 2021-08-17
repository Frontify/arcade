/* eslint-disable @typescript-eslint/no-var-requires */
import alias from "@rollup/plugin-alias";
import commonJs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { resolve } from "path";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { main } from "./package.json";

const name = main.replace(/\.js$/, "");

const bundle = (config) => ({
    input: "src/index.ts",
    ...config,
    plugins: [
        alias({
            entries: [
                { find: "@elements", replacement: resolve(__dirname, "./src/elements") },
                { find: "@components", replacement: resolve(__dirname, "./src/components") },
                { find: "@compositions", replacement: resolve(__dirname, "./src/compositions") },
                { find: "@utilities", replacement: resolve(__dirname, "./src/utilities") },
                { find: "@hooks", replacement: resolve(__dirname, "./src/hooks") },
            ],
        }),
        ...config.plugins,
    ],
});

const rollupConfig = [
    bundle({
        plugins: [
            nodeResolve({
                extensions: [".js", ".ts", ".tsx", ".json"],
            }),
            esbuild({
                minify: process.env.NODE_ENV === "production",
            }),
            postcss({
                minimize: process.env.NODE_ENV === "production",
                extract: "index.css",
            }),
            peerDepsExternal(),
            commonJs(),
        ],
        output: [
            {
                file: `${name}.js`,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: `${name}.mjs`,
                format: "es",
                sourcemap: true,
            },
        ],
    }),
    bundle({
        plugins: [dts()],
        output: {
            file: `${name}.d.ts`,
            format: "es",
        },
    }),
    {
        input: "src/tailwind-config.ts",
        plugins: [
            nodeResolve({
                extensions: [".js", ".ts"],
            }),
            commonJs(),
            esbuild({
                include: /\.[jt]s?$/,
                exclude: /node_modules/,
                minify: process.env.NODE_ENV === "production",
            }),
            peerDepsExternal(),
        ],
        output: [
            {
                file: "dist/config.js",
                format: "cjs",
                sourcemap: true,
            },
            {
                file: "dist/config.mjs",
                format: "es",
                sourcemap: true,
            },
        ],
    },
];

module.exports = rollupConfig;
