module.exports = {
  default: {
    require: [
      'features/step_definitions/**/*.ts'
    ],
    requireModule: [
      'ts-node/register'
    ],
    format: [
      'progress-bar',
      'json:reports/cucumber-report.json',
      'html:reports/cucumber-report.html'
    ],
    formatOptions: {
      snippetInterface: 'async-await'
    },
    tags: 'not @ignore'
  },
  regression: {
    require: [
      'features/step_definitions/**/*.ts'
    ],
    requireModule: [
      'ts-node/register'
    ],
    format: [
      'progress-bar',
      'json:reports/regression-report.json'
    ],
    tags: '@regression'
  },
  smoke: {
    require: [
      'features/step_definitions/**/*.ts'
    ],
    requireModule: [
      'ts-node/register'
    ],
    format: [
      'progress-bar', 
      'json:reports/smoke-report.json'
    ],
    tags: '@smoke'
  }
};
