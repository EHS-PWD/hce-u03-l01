module.exports = {
  testEnvironment: 'jsdom',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  testMatch: ['**/__test__/**/*.test.js'],
  moduleFileExtensions: ['js', 'json'],
  testTimeout: 10000
};
