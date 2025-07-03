import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,                      // Mostrar interfaz del navegador (true para CI)
    viewport: { width: 1280, height: 720 }, // Tamaño por defecto de ventana del navegador
    ignoreHTTPSErrors: true,              // Aceptar certificados auto-firmados si es necesario
    video: 'retain-on-failure',           // Conservar videos solo cuando las pruebas fallan
    screenshot: 'only-on-failure',        // Tomar capturas solo en fallos
    trace: 'retain-on-failure',           // Recolectar trace solo en fallos
    actionTimeout: 90000,                 // Tiempo máximo para acciones (90s para performance_glitch_user)
    navigationTimeout: 90000,             // Tiempo máximo para carga de páginas  
  },
  timeout: 120000,                        // Tiempo máximo para un paso de prueba (2 minutos)
  expect: {
    timeout: 90000,                       // Tiempo máximo para aserciones expect
  },
});
