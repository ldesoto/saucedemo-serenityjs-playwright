/**
 * Utility functions for test data manipulation
 */
export class TestDataUtils {
    /**
     * Normalizes product names for data-test attributes
     * @param productName - The product name to normalize
     * @returns normalized name for selectors
     */
    static normalizeProductName(productName: string): string {
        return productName.toLowerCase().replace(/\s+/g, '-');
    }

    /**
     * Generates random test data
     */
    static generateRandomUser() {
        const timestamp = Date.now();
        return {
            firstName: `TestUser${timestamp}`,
            lastName: `LastName${timestamp}`,
            postalCode: Math.floor(10000 + Math.random() * 90000).toString()
        };
    }

    /**
     * Waits for a specified amount of time
     * @param ms - milliseconds to wait
     */
    static async wait(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Validates email format
     * @param email - email to validate
     */
    static isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

/**
 * Environment configuration utilities
 */
export class EnvironmentUtils {
    /**
     * Gets the base URL from environment or default
     */
    static getBaseUrl(): string {
        return process.env.BASE_URL || 'https://www.saucedemo.com/';
    }

    /**
     * Gets browser configuration
     */
    static getBrowserConfig() {
        return {
            headless: process.env.HEADLESS === 'true',
            slowMo: parseInt(process.env.SLOW_MO || '0'),
            timeout: parseInt(process.env.TIMEOUT || '90000'), // 90 segundos para performance_glitch_user
            viewport: {
                width: parseInt(process.env.VIEWPORT_WIDTH || '1280'),
                height: parseInt(process.env.VIEWPORT_HEIGHT || '720')
            }
        };
    }

    /**
     * Gets test environment
     */
    static getEnvironment(): string {
        return process.env.TEST_ENV || 'development';
    }

    /**
     * Checks if running in CI environment
     */
    static isCI(): boolean {
        return process.env.CI === 'true' || !!process.env.GITHUB_ACTIONS || !!process.env.JENKINS_URL;
    }
}
