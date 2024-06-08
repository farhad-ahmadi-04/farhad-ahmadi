// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input: 'src/js/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        name: 'MyBundle',
        inlineDynamicImports: true,
        preserveEntrySignatures: false
    },
    plugins: [resolve(), commonjs()]
};
