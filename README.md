# SauceDemo Automation Suite

**Serenity/JS** • **Playwright** • **Cucumber** • **TypeScript**

Suite de pruebas E2E para SauceDemo implementando el patrón Screenplay con Serenity/JS, Playwright y Cucumber.

## Estructura del Proyecto

```
saucedemo-serenityjs-playwright/
├── features/               # Escenarios Gherkin en español
│   ├── login.feature       # Autenticación de usuarios  
│   ├── cart.feature        # Gestión del carrito
│   ├── checkout.feature    # Proceso de compra
│   └── regression.feature  # Suite de regresión
├── src/
│   ├── models/             # Datos y objetos de prueba
│   │   └── TestData.ts     # Usuarios y datos predefinidos
│   ├── pages/              # Page Object Model
│   │   ├── PaginaLogin.ts
│   │   ├── PaginaProductos.ts
│   │   ├── PaginaCarrito.ts
│   │   └── PaginaCheckout.ts
│   ├── screenplay/         # Patrón Screenplay
│   │   ├── tasks/          # Acciones que puede realizar el actor
│   │   │   ├── IniciarSesion.ts
│   │   │   ├── AgregarProductoAlCarrito.ts
│   │   │   ├── RemoverProductoDelCarrito.ts
│   │   │   └── CompletarCheckout.ts
│   │   └── questions/      # Verificaciones sobre el estado
│   │       ├── EstaLogueado.ts
│   │       ├── CarritoTieneProducto.ts
│   │       └── OrdenConfirmada.ts
│   └── utilities/          # Configuración y helpers
│       └── TestUtils.ts
├── step_definitions/       # Implementación de los steps Gherkin
└── target/                 # Reportes generados
```

## Instalación

Requisitos previos:
- Node.js 18+
- npm o yarn

```bash
# Clonar repositorio
git clone <repository-url>
cd saucedemo-serenityjs-playwright

# Instalar dependencias
npm install

# Instalar navegadores de Playwright
npx playwright install
```

## Ejecución de Pruebas

### Comandos principales
```bash
npm test                    # Ejecutar todas las pruebas
npm run test:smoke          # Pruebas críticas rápidas
npm run test:regression     # Suite completa de regresión
npm run test:headless       # Modo sin interfaz gráfica
npm run verify              # Limpiar + ejecutar + reportes
```

### Ejecución selectiva
```bash
# Por tags
npx cucumber-js --tags "@smoke"
npx cucumber-js --tags "@regression and not @slow"

# Por archivos específicos
npx cucumber-js features/login.feature
npx cucumber-js features/cart.feature

# Con configuraciones específicas
HEADLESS=true BROWSER=firefox npm test
BASE_URL=https://staging.saucedemo.com npm test
```

## Cobertura de Pruebas

| Funcionalidad | Escenarios | Estado |
|---------------|------------|--------|
| Autenticación | 7 casos | ✅ |
| Carrito | 4 casos | ✅ |
| Checkout | 3 casos | ✅ |
| Multi-usuario | 6 usuarios | ✅ |
| Regresión | 15 casos | ✅ |

### Casos implementados:
- Login exitoso con diferentes usuarios
- Login fallido y manejo de errores
- Usuario bloqueado (locked_out_user)
- Gestión completa del carrito (agregar/remover)
- Proceso de checkout end-to-end
- Validaciones de campos obligatorios
- Confirmación de pedidos

### Usuarios de prueba:
- `standard_user` - Usuario estándar
- `locked_out_user` - Usuario bloqueado
- `problem_user` - Usuario con problemas de UI
- `performance_glitch_user` - Usuario con lag
- `error_user` - Usuario con errores intermitentes
- `visual_user` - Usuario con diferencias visuales

## Reportes

### Generar reportes Serenity
```bash
npm run report
```

Los reportes se generan en `target/site/serenity/index.html` con:
- Dashboard ejecutivo con métricas
- Screenshots automáticos en failures
- Trazabilidad completa de cada paso
- Filtros por features y tags
- Tiempos de ejecución detallados

### Reportes Cucumber
Los reportes JSON de Cucumber se generan en `reports/cucumber-report.json`

## Patrón Screenplay

### Tasks (Qué hacer)
Las Tasks representan acciones de alto nivel que puede realizar un usuario:

```typescript
export class IniciarSesion implements Task {
  static conCredenciales(usuario: string, contraseña: string) {
    return Task.where(`iniciar sesión con ${usuario}`,
      Enter.theValue(usuario).into(PaginaLogin.campoUsuario),
      Enter.theValue(contraseña).into(PaginaLogin.campoContrasena),
      Click.on(PaginaLogin.botonIniciarSesion)
    );
  }
}
```

### Questions (Qué validar)
Las Questions permiten verificar el estado actual de la aplicación:

```typescript
export class EstaLogueado implements Question<boolean> {
  static enLaPaginaDeProductos() {
    return Question.about('está logueado en productos',
      actor => isVisible(PaginaProductos.contenedorProductos)
    );
  }
}
```

## Configuración

### Variables de entorno
```bash
BASE_URL=https://www.saucedemo.com    # URL base de la aplicación
HEADLESS=false                        # Ejecutar con interfaz gráfica
BROWSER=chromium                      # Navegador (chromium, firefox, webkit)
SLOWMO=100                           # Delay entre acciones (ms)
TIMEOUT=30000                        # Timeout por defecto (ms)
```

### Configuración Playwright
```typescript
// playwright.config.ts
export default {
  use: {
    headless: process.env.HEADLESS === 'true',
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
}
```

## CI/CD

### GitHub Actions
```yaml
name: E2E Tests
on: [push, pull_request]

jobs:
  e2e-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npx playwright install
      - run: npm run test:headless
      - uses: actions/upload-artifact@v4
        if: always()
        with:
          name: test-results
          path: target/site/serenity/
```

## Desarrollo

### Estructura de un test típico
1. **Feature file** - Escenario en Gherkin (español)
2. **Step definitions** - Mapeo de steps a código
3. **Tasks** - Acciones de negocio
4. **Questions** - Verificaciones
5. **Page Objects** - Selectores y elementos
