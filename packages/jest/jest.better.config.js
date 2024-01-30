module.exports = {
    testMatch: [
        "**/jest/tests/**/*.js"
    ],
    cacheDirectory: "./.cache",
    maxWorkers: 4,
    workerIdleMemoryLimit: "8G"
};