import { defineConfig } from "vitest/config"

export default defineConfig({
    include: [
        "**/vitest/tests/**/*.js"
    ],
    cacheDirectory: "./.cache",
    pool: "vmThreads",
    poolOptions: {
        vmThreads: {
            memotryLimit: "8G"
        }
    },
    useAtomics: true,
    maxThreads: 4
});