import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from "rollup-plugin-terser";
import filesize from 'rollup-plugin-filesize';
import babel from 'rollup-plugin-babel'
import progress from 'rollup-plugin-progress'
import pkg from './package.json';

const env = process.env.NODE_ENV
const isProd = (env === 'production')

let external = Object.keys(pkg.dependencies);
let plugins = [];

let input = 'src/index.js'

let outputBrowser = {
    file: pkg.browser,
    format: 'umd',
    name: 'utils',
    sourceMap: true,
    globals: {
        'lodash-es': '_'
    }
}

let output = [
    {
        file: pkg.main,
        format: 'cjs',
        sourceMap: true
    },
    {
        file: pkg.module,
        format: 'es',
        sourceMap: true
    },
    outputBrowser
]

plugins = plugins.concat([
    progress(),
    resolve(), // tells Rollup how to find date-fns in node_modules
    babel({
        exclude: 'node_modules/**', // only transpile our source code
        runtimeHelpers: true,
    }), //Place babel before commonjs plugin.
    commonjs(), // converts date-fns to ES modules
    filesize(),
])

const module = {
    input,
    output,
    plugins,
    external
}

export default [
    module,
    {
        ...module,
        output: [
            {
                ...outputBrowser,
                file: 'dist/utils.umd.min.js'
            }
        ],
        plugins: plugins.concat([terser()]),
    }
];