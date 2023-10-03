import pkg from './package.json';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const external = [
    'fs/promises',
    'fs',
    'fast-glob',
    'util',
    'url',
    'path',
    'stream'
];
export default { // main lib
    input: './src/index.js',
    output: [{
        file: pkg.exports['.'],
        format: 'es',
    },{
        file: pkg.exports['./cjs'],
        format: 'cjs',
    }],
    plugins: [
        commonjs(),
        resolve({
            preferBuiltins: true,
        }), 
    ],
    external,
}