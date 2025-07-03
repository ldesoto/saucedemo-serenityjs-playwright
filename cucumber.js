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
    tags: 'not @ignore',
    timeout: 60000  // 60 segundos para usuarios lentos como performance_glitch_user
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
    tags: '@regression',
    timeout: 90000  // 90 segundos para regresión con performance_glitch_user
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
    tags: '@smoke',
    timeout: 30000  // 30 segundos para smoke tests rápidos
  }
};
