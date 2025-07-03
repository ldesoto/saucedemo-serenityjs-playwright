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
    timeout: 60000  // Timeout estándar para la mayoría de escenarios
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
    timeout: 90000  // Timeout extendido para performance_glitch_user
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
    timeout: 30000  // Timeout rápido para pruebas de ruta crítica
  }
};
