import { defineConfig } from "vitest/config"

export default defineConfig({
    include: [
        "**/vitest/tests/**/*.js"
    ],
    cacheDirectory: "./.cache"
});