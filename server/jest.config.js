module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testRegex: './(src|tests)/.*\\.(spec|test)?\\.(ts|js)$',
  moduleFileExtensions: ['ts', 'js', 'json'],
  collectCoverage: true,
  testEnvironment: 'node',
  coverageReporters: ["json", "lcov", "text", "clover"] // "text-summary"
};
