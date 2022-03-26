/** @type {import('@jest/types').Config} */
const config = {
    transform: {
        '^.+\\.svelte$': [
            'svelte-jester',
            {
                preprocess: true
            }
        ],
        '^.+\\.ts$': '@swc/jest',
    },
    moduleFileExtensions: ['ts', 'js', 'svelte'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/tests/']
};

export default config;
