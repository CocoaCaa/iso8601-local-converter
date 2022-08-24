import type { RollupOptions } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import {
    chromeExtension,
    simpleReloader,
} from 'rollup-plugin-chrome-extension';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

const config: RollupOptions = {
    input: './src/manifest.json',
    output: {
        dir: 'dist',
        format: 'esm',
    },
    plugins: [
        chromeExtension(),
        simpleReloader(),
        replace({
            'process.env.NODE_ENV': JSON.stringify(
                process.env.NODE_ENV ?? 'production',
            ),
            preventAssignment: true,
        }),
        typescript(),
        commonjs(),
        resolve(),
        terser(),
    ],
};

export default config;
