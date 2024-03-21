module.exports = {
    testEnvironment: "jsdom",
    setupFiles: ["./setup.jest.js"],
    globals: {
        Uint8Array
    },
    transformIgnorePatterns: [`/node_modules/(?!${module})`],
    transform: {
        "^.+.[tj]sx?$": [
            "babel-jest",
        ],
    },
};