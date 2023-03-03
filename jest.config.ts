export default {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: ['text', 'json', 'json-summary', 'html', 'lcov'],
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/', 'dist/', 'test/mocks/'],
  detectOpenHandles: true,
  forceExit: true,
  logHeapUsage: true,
  testEnvironment: 'node',
  verbose: true,
  // setupFiles: ['./jest.env.js'],
  roots: ['test', 'src'],
  testTimeout: 30000,
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        includeFailureMsg: true,
        includeConsoleLog: true,
      },
    ],
  ],
};
