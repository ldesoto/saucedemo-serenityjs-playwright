# Automatización SauceDemo

Pruebas E2E para SauceDemo usando Serenity/JS + Playwright + Cucumber.

## Estructura

```
├── features/              # Archivos Gherkin
├── src/
│   ├── models/           # Datos de prueba
│   ├── pages/            # Page Objects
│   ├── screenplay/       # Tasks y Questions
│   │   ├── tasks/
│   │   └── questions/
│   └── utilities/        # Configuración
```

## Instalación y Ejecución

```bash
npm install
npm run verify
```

## Comandos

```bash
npm test                  # Todas las pruebas
npm run test:smoke        # Pruebas rápidas
npm run test:regression   # Suite completa
npm run verify            # Clean + test + reportes
```

## Cobertura

- ✅ Login exitoso/fallido
- ✅ Carrito de compras
- ✅ Proceso de checkout
- ✅ Regresión multi-usuario

## Reportes

- **Serenity**: `target/site/serenity/index.html`
- **Cucumber**: `reports/cucumber-report.html`
