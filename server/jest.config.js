module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: './(src|tests)/.*\\.(spec|test)?\\.(ts|js)$',
  moduleFileExtensions: ['ts', 'js', 'json'],
  testEnvironment: 'node',
  collectCoverage: false,
  coverageReporters: ["json", "lcov", "text", "clover"] // "text-summary"
};
