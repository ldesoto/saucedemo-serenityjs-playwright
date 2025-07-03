# SauceDemo Automation Suite

An end-to-end test automation framework for [SauceDemo](https://www.saucedemo.com/) built with Serenity/JS, Playwright, and Cucumber.

## Overview

This project provides comprehensive test coverage for the SauceDemo application, implementing the Screenplay pattern for maintainable and scalable test automation. The framework supports multiple user types including performance testing with `performance_glitch_user`.

## Tech Stack

- **Serenity/JS** - BDD framework with rich reporting
- **Playwright** - Cross-browser automation 
- **Cucumber** - Gherkin-based test specifications
- **TypeScript** - Type-safe development
- **Screenplay Pattern** - Actor-based test architecture

## Project Structure

```
├── features/                    # Gherkin feature files
│   ├── login.feature           # Authentication scenarios
│   ├── cart.feature            # Shopping cart functionality  
│   ├── checkout.feature        # Purchase flow
│   └── regression.feature      # Multi-user regression suite
├── src/
│   ├── models/                 # Test data models
│   ├── pages/                  # Page object classes
│   ├── screenplay/             # Screenplay components
│   │   ├── tasks/             # High-level user actions
│   │   ├── questions/         # Verification queries
│   │   └── actors/            # User personas
│   └── utilities/             # Helper functions
└── target/site/serenity/       # Test reports
```

## Test Coverage

### Authentication
- Valid user login flow
- Invalid credentials handling
- Locked user scenarios
- Performance-constrained user testing

### Shopping Cart
- Product addition/removal
- Cart state persistence
- Quantity management

### Checkout Process
- Complete purchase flow
- Form validation
- Order confirmation

### Regression Suite
- Cross-user compatibility testing
- End-to-end workflow validation
- Performance testing scenarios

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Running Tests
```bash
# Full test suite
npm test

# Regression tests only
npm run test:regression

# Smoke tests
npm run test:smoke

# Generate reports
npm run verify
```

### Environment Setup
Copy `.env.example` to `.env` and configure:
```bash
BASE_URL=https://www.saucedemo.com/
HEADLESS=false
TIMEOUT=30000
```

## Test Data

The framework supports multiple user types:
- `standard_user` - Regular user flow
- `locked_out_user` - Access denied testing
- `problem_user` - UI issue simulation
- `performance_glitch_user` - Slow response testing
- `error_user` - Error condition testing
- `visual_user` - Visual regression testing

## Reports

Test execution generates comprehensive reports:
- **Serenity Reports**: `target/site/serenity/index.html`
- **Cucumber Reports**: `reports/cucumber-report.html`

## Configuration

### Browser Settings
Configure browser behavior in `playwright.config.ts`:
- Viewport size
- Timeout settings
- Screenshot options
- Video recording

### Test Timeouts
Adjusted for different user types in `cucumber.js`:
- Default: 60s
- Regression: 90s (accommodates performance_glitch_user)
- Smoke: 30s

## Development

### Adding New Tests
1. Create feature file in `features/`
2. Implement step definitions in `features/step_definitions/`
3. Add tasks/questions in `src/screenplay/`
4. Update page objects if needed

### Code Quality
```bash
npm run lint        # ESLint
npm run format      # Prettier
npm run type-check  # TypeScript
```

## CI/CD Integration

For CI environments:
```bash
HEADLESS=true npm run verify
```

## Known Issues

### Performance Glitch User
The `performance_glitch_user` requires extended timeouts due to simulated delays. Current configuration handles this automatically.

## Contributing

1. Follow TypeScript and ESLint conventions
2. Update tests for new features
3. Ensure all tests pass before committing
4. Update documentation as needed

## License

MIT
