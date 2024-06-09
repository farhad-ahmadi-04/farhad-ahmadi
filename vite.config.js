import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    base: '/farhad-ahmadi/',
    build: {
        outDir: 'dist'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
});
