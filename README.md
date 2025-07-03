# Suite de Automatización SauceDemo

Framework de pruebas end-to-end para [SauceDemo](https://www.saucedemo.com/) construido con Serenity/JS, Playwright y Cucumber.

## Descripción General

Este proyecto proporciona cobertura completa de pruebas para la aplicación SauceDemo, implementando el patrón Screenplay para automatización de pruebas mantenible y escalable. El framework soporta múltiples tipos de usuario incluyendo pruebas de rendimiento con `performance_glitch_user`.

## Stack Tecnológico

- **Serenity/JS** - Framework BDD con reportes ricos
- **Playwright** - Automatización cross-browser
- **Cucumber** - Especificaciones basadas en Gherkin
- **TypeScript** - Desarrollo type-safe
- **Patrón Screenplay** - Arquitectura de pruebas basada en actores

## Estructura del Proyecto

```
├── features/                    # Archivos feature de Gherkin
│   ├── login.feature           # Escenarios de autenticación
│   ├── cart.feature            # Funcionalidad del carrito de compras
│   ├── checkout.feature        # Flujo de compra
│   └── regression.feature      # Suite de regresión multi-usuario
├── src/
│   ├── models/                 # Modelos de datos de prueba
│   ├── pages/                  # Clases de page objects
│   ├── screenplay/             # Componentes Screenplay
│   │   ├── tasks/             # Acciones de usuario de alto nivel
│   │   ├── questions/         # Consultas de verificación
│   │   └── actors/            # Personas de usuario
│   └── utilities/             # Funciones auxiliares
└── target/site/serenity/       # Reportes de pruebas
```

## Cobertura de Pruebas

### Autenticación
- Flujo de login de usuario válido
- Manejo de credenciales inválidas
- Escenarios de usuario bloqueado
- Pruebas de usuario con limitaciones de rendimiento

### Carrito de Compras
- Adición/eliminación de productos
- Persistencia del estado del carrito
- Gestión de cantidades

### Proceso de Checkout
- Flujo completo de compra
- Validación de formularios
- Confirmación de pedido

### Suite de Regresión
- Pruebas de compatibilidad entre usuarios
- Validación de flujos end-to-end
- Escenarios de pruebas de rendimiento

## Inicio Rápido

### Prerrequisitos
- Node.js 18+
- npm o yarn

### Instalación
```bash
npm install
```

### Ejecutar Pruebas
```bash
# Suite completa de pruebas
npm test

# Solo pruebas de regresión
npm run test:regression

# Smoke tests
npm run test:smoke

# Generar reportes
npm run verify
```

### Configuración del Entorno
Copia `.env.example` a `.env` y configura:
```bash
BASE_URL=https://www.saucedemo.com/
HEADLESS=false
TIMEOUT=30000
```

## Datos de Prueba

El framework soporta múltiples tipos de usuario:
- `standard_user` - Flujo de usuario regular
- `locked_out_user` - Pruebas de acceso denegado
- `problem_user` - Simulación de problemas de UI
- `performance_glitch_user` - Pruebas de respuesta lenta
- `error_user` - Pruebas de condiciones de error
- `visual_user` - Pruebas de regresión visual

## Reportes

La ejecución de pruebas genera reportes completos:
- **Reportes Serenity**: `target/site/serenity/index.html`
- **Reportes Cucumber**: `reports/cucumber-report.html`

## Configuración

### Configuración del Navegador
Configura el comportamiento del navegador en `playwright.config.ts`:
- Tamaño del viewport
- Configuración de timeouts
- Opciones de capturas de pantalla
- Grabación de video

### Timeouts de Pruebas
Ajustados para diferentes tipos de usuario en `cucumber.js`:
- Por defecto: 60s
- Regresión: 90s (acomoda performance_glitch_user)
- Smoke: 30s

## Desarrollo

### Agregar Nuevas Pruebas
1. Crear archivo feature en `features/`
2. Implementar step definitions en `features/step_definitions/`
3. Agregar tasks/questions en `src/screenplay/`
4. Actualizar page objects si es necesario

### Calidad de Código
```bash
npm run lint        # ESLint
npm run format      # Prettier
npm run type-check  # TypeScript
```

## Integración CI/CD

Para entornos de CI:
```bash
HEADLESS=true npm run verify
```

## Problemas Conocidos

### Usuario Performance Glitch
El `performance_glitch_user` requiere timeouts extendidos debido a demoras simuladas. La configuración actual maneja esto automáticamente.

## Contribuciones

1. Seguir convenciones de TypeScript y ESLint
2. Actualizar pruebas para nuevas funcionalidades
3. Asegurar que todas las pruebas pasen antes de hacer commit
4. Actualizar documentación según sea necesario

## Licencia

MIT
