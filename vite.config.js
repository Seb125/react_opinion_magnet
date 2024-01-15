import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/component/opinion-magnet/OpinionMagnet.jsx'),
            name: 'React Opinion Magnet',
            fileName: (format) => `react-opinion-magnet.${format}.js`
        },
        rollupOptions: {
            // externalize deps that shouldn't be bundled
            // into your library
            external: ['react', 'react-dom'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    react: 'React'
                }
            }
        }
    },
    plugins: [react(), svgr()]
})