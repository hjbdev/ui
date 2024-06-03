import { build } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';

const runBuild = async () => {
    await build({
        configFile: false,
        build: {
            lib: {
                entry: './src/package.js',
                name: "hjb-ui",
                formats: ['es'],
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
        plugins: [vue(), dts({ rollupTypes: true }) /*, babel({ babelHelpers: "bundled" }) */],
    });
};

runBuild();
