# SauceDemo - Serenity/JS con Playwright

Proyecto de pruebas automatizadas E2E para [SauceDemo### 🎯 **Pruebas Específicas**
```bash
# Todas las pruebas (inglés - estándar)
npm run test

# Solo regresión con tags
npm run test:regression

# Solo smoke tests críticos  
npm run test:smoke

# Modo headless para CI
npm run test:headless
```cedemo.com) usando TypeScript, Playwright, Cucumber y Serenity/JS con Screenplay Pattern.

## 🎯 Requerimientos Funcionales Automatizados

✅ **1. Login exitoso** - Verificación de acceso con credenciales válidas  
✅ **2. Login fallido** - Validación de errores con credenciales inválidas  
✅ **3. Agregar productos al carrito** - Gestión completa del carrito de compras  
✅ **4. Completar proceso de compra (checkout)** - Flujo completo de checkout  
✅ **5. Regresión** - Suite completa de pruebas de regresión  

## 🏗️ Arquitectura Técnica

- ✅ **Serenity BDD + Cucumber + Screenplay Pattern**
- ✅ **Separación clara de responsabilidades**:
  - `features/` - Historias en Gherkin (inglés)
  - `caracteristicas/` - Historias en Gherkin (español)  
  - `src/screenplay/tasks/` - Tasks (acciones de alto nivel)
  - `src/screenplay/questions/` - Questions (verificaciones)
  - `src/screenplay/actors/` - Actors (usuarios del sistema)
  - `src/pages/` - Page Objects (elementos de UI)
  - `src/models/` - Models para datos de prueba
  - `src/utilities/` - Utilities para lógica adicional

## 🏗️ Estructura del Proyecto

```
saucedemo-serenityjs-playwright/
├── features/                    # Features en inglés (estándar)
│   ├── login.feature           # Login exitoso/fallido
│   ├── cart.feature            # Gestión del carrito
│   ├── checkout.feature        # Proceso de checkout
│   ├── regression.feature      # Suite de regresión
│   └── step_definitions/       # Glue code en inglés
│       ├── login.steps.ts
│       ├── cart.steps.ts
│       ├── checkout.steps.ts
│       └── regression.steps.ts
├── src/
│   ├── models/                  # Modelos de datos
│   │   └── TestData.ts         # Usuarios, productos, checkout info
│   ├── utilities/               # Utilidades
│   │   └── TestUtils.ts        # Helpers y configuración
│   ├── pages/                   # Page Objects (POM)
│   │   ├── PaginaLogin.ts
│   │   ├── PaginaProductos.ts
│   │   ├── PaginaCarrito.ts
│   │   └── PaginaCheckout.ts
│   └── screenplay/              # Screenplay Pattern
│       ├── tasks/               # Acciones de alto nivel
│       │   ├── IniciarSesion.ts
│       │   ├── AgregarProductoAlCarrito.ts
│       │   ├── RemoverProductoDelCarrito.ts
│       │   └── CompletarCheckout.ts
│       ├── questions/           # Verificaciones
│       │   ├── EstaLogueado.ts
│       │   ├── CarritoTieneProducto.ts
│       │   └── OrdenConfirmada.ts
│       └── actors/              # Gestión de actores
│           └── Cast.ts
├── playwright.config.ts         # Configuración Playwright
├── cucumber.js                  # Configuración Cucumber
├── serenity.config.ts          # Configuración Serenity
├── package.json                # Scripts y dependencias
├── tsconfig.json              # Configuración TypeScript
├── .env.example               # Variables de entorno ejemplo
└── README.md                  # Documentación
```

## 🚀 Instalación

1. **Clonar el repositorio:**
```bash
git clone <tu-repositorio>
cd saucedemo-serenityjs-playwright
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Instalar navegadores de Playwright:**
```bash
npx playwright install
```

## 🧪 Ejecución de Pruebas

### ⚡ Comando Principal (estilo Maven)
```bash
npm run verify  # ✅ Equivalente a mvn clean verify
```

### 🎯 Pruebas Específicas
```bash
# Todas las pruebas (inglés - estándar)
npm run test

# Pruebas en español (legacy)
npm run test:español

# Solo regresión con tags
npm run test:regression

# Solo smoke tests críticos  
npm run test:smoke

# Modo headless para CI
npm run test:headless
```

### 🔧 Opciones de Debug
```bash
# Debug mode (para en primera falla)
npm run test:debug

# Ejecución en paralelo
npm run test:parallel

# Verificación de tipos
npm run type-check
```

### 📊 Reportes
```bash
# Generar reportes Serenity
npm run reporte

# Limpiar reportes anteriores
npm run clean
```

## ⚙️ **Configuración Avanzada**

### � Variables de Entorno
```bash
# Crear archivo de configuración personalizada
cp .env.example .env

# Editar configuraciones según necesidades
nano .env
```

### 📸 Configuración de Capturas
```bash
# Solo en fallos (recomendado)
TAKE_PHOTOS=failures

# Todas las interacciones (debug)
TAKE_PHOTOS=all

# Timeout personalizado de Serenity
SERENITY_TIMEOUT=15000
```

### 🔧 Configuración de Browser
```bash
# Modo headless para CI
HEADLESS=true

# URL personalizada
BASE_URL=https://staging.saucedemo.com

# Viewport personalizado
VIEWPORT_WIDTH=1920
VIEWPORT_HEIGHT=1080
```

### 📋 **Tags de Cucumber**
- `@regression` - Suite completa de regresión
- `@smoke` - Pruebas críticas rápidas
- `@login` - Pruebas de autenticación
- `@cart` - Pruebas del carrito
- `@checkout` - Pruebas de compra

### 🎭 **Screenplay Pattern**
- **Tasks**: `IniciarSesion`, `AgregarProductoAlCarrito`, `CompletarCheckout`
- **Questions**: `EstaLogueado`, `CarritoTieneProducto`, `OrdenConfirmada`
- **Actors**: Gestión automática con `Cast.ts`

### 📦 **Models Reutilizables**
```typescript
// Usar datos predefinidos
IniciarSesion.conCredencialesEstandar()
AgregarProductoAlCarrito.backpack()

// O datos personalizados
CompletarCheckout.conInformacionAleatoria()
```

## 📊 Reportes

### Generar reporte de Serenity
```bash
npm run reporte
```

Los reportes se generarán en la carpeta `target/site/serenity/`.

## 🛠️ Herramientas de Desarrollo

### Linter
```bash
npm run lint
```

### Formatear código
```bash
npm run format
```

### Limpiar archivos generados
```bash
npm run clean
```

## 📝 Escribir Nuevas Pruebas

### 1. Crear Feature en Gherkin (español)
```gherkin
# caracteristicas/nueva_funcionalidad.feature
Característica: Nueva funcionalidad
  Como usuario
  Quiero hacer algo
  Para lograr un objetivo

  Escenario: Caso de prueba exitoso
    Dado que el usuario está en algún lugar
    Cuando realiza una acción
    Entonces debería ver un resultado
```

### 2. Implementar Step Definitions
```typescript
// caracteristicas/step_definitions/nueva_funcionalidad.steps.ts
import { Given, When, Then } from '@cucumber/cucumber';

Given('que el usuario está en algún lugar', async function () {
    // Implementación
});
```

### 3. Crear Page Objects si es necesario
```typescript
// src/paginas/NuevaPagina.ts
export class NuevaPagina {
    static readonly elemento = PageElement
        .locatedBy('#selector')
        .describedAs('descripción del elemento');
}
```

### 4. Implementar Tasks y Questions
```typescript
// src/screenplay/tareas/NuevaTarea.ts
export const NuevaTarea = {
    hacer: () => Task.where(
        '#actor hace algo',
        // Acciones aquí
    ),
};
```

## 🎯 Patrones Utilizados

### Screenplay Pattern
- **Tasks**: Acciones que el actor puede realizar
- **Questions**: Preguntas sobre el estado del sistema
- **Actors**: Usuarios que interactúan con el sistema

### Page Object Model (POM)
- Encapsula elementos de la interfaz de usuario
- Separa la lógica de prueba de los detalles de implementación
- Facilita el mantenimiento

## 🔧 Configuración

### Playwright
La configuración está en `playwright.config.ts`. Puedes modificar:
- Navegadores a usar
- Configuración de viewport
- Timeouts
- Modo headless/headed

### Cucumber
Los features están en español usando:
- `Dado` para precondiciones
- `Cuando` para acciones
- `Entonces` para verificaciones

## 🐛 Resolución de Problemas

### Errores comunes:

1. **Timeouts**: Aumentar timeouts en `playwright.config.ts`
2. **Selectores**: Verificar que los selectores en Page Objects sean correctos
3. **Dependencias**: Ejecutar `npm install` si faltan paquetes

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🌟 Características Destacadas

- **Integración Continua**: Soporte completo para Jenkins, GitHub Actions y GitLab CI.
- **Pruebas en Paralelo**: Ejecución de pruebas en múltiples navegadores y dispositivos simultáneamente.
- **Reportes Avanzados**: Informes detallados y gráficos de tendencias de pruebas.
- **Soporte Multilenguaje**: Pruebas en múltiples idiomas y localizaciones.
- **Extensibilidad**: Fácil integración de nuevas bibliotecas y herramientas.