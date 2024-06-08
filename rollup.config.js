// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/js/index.js',
    output: {
        dir: 'dist',
        format: 'esm',
        preserveEntrySignatures: false
    },
    plugins: [resolve(), commonjs()]
};

