# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2025-01-15

### Added
- Extended timeout support for performance_glitch_user scenarios
- Comprehensive Serenity BDD reporting integration
- Enhanced error handling for locked_out_user cases
- Regression test suite with multiple user types

### Changed
- Updated Playwright configuration for better stability
- Improved step definition timeout handling
- Enhanced page object selectors for reliability

### Fixed
- Performance_glitch_user timeout issues resolved
- Cart state management improvements
- Checkout flow error handling

## [1.1.0] - 2024-12-20

### Added
- Complete checkout process automation
- Shopping cart management functionality
- Multi-user regression testing capabilities
- Smoke test suite for critical paths

### Changed
- Migrated from basic Cucumber to Serenity/JS integration
- Implemented Screenplay pattern architecture
- Enhanced test data management

## [1.0.0] - 2024-11-15

### Added
- Initial project setup with Serenity/JS and Playwright
- Basic login functionality testing
- Page Object Model implementation
- Cucumber feature files for BDD approach
- TypeScript configuration and linting setup
- CI/CD pipeline configuration

### Dependencies
- @serenity-js/core: 3.10.0
- @serenity-js/playwright: 3.10.0
- @cucumber/cucumber: 9.5.0
- playwright: 1.40.0
