const { defineConfig, build } = require("vite");
// const { babel } = require('@rollup/plugin-babel');
const path = require("path");
const fs = require("fs");
const vue = require("@vitejs/plugin-vue");

const log = (message) => {
    console.log("-".repeat(process.stdout.columns - 1));
    console.log(" ".repeat(process.stdout.columns / 2 - message.length / 2) + message);
    console.log("-".repeat(process.stdout.columns - 1));
};

const runBuild = async () => {
    await build({
        configFile: false,
        build: {
            lib: {
                entry: './src/package.js',
                name: "hjb-ui",
            },
            rollupOptions: {
                external: [
                    "vue",
                ],
                output: {
                    exports: "named", // suppress warning about default and named export used in same file
                    globals: {
                        vue: "Vue",
                    },
                    assetFileNames: `hjb-ui.[ext]`,
                    entryFileNames: () => `hjb-ui.[format].js`,
                },
            },
        },
        plugins: [vue() /*, babel({ babelHelpers: "bundled" }) */],
    });
};

runBuild();
