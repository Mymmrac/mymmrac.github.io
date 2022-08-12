import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

import { fileURLToPath, URL } from "url"

/** @type {import("vite").UserConfig} */
export default defineConfig({
    plugins: [ vue() ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    define: {
        "BUILD_TIMESTAMP": "new Date().toDateString()",
    },
})
