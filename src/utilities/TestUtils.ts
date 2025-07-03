/**
 * Configuración del entorno de pruebas
 */
export class EnvironmentUtils {
    static getBaseUrl(): string {
        return process.env.BASE_URL || 'https://www.saucedemo.com/';
    }

    static getBrowserConfig() {
        return {
            headless: process.env.HEADLESS === 'true',
            slowMo: parseInt(process.env.SLOW_MO || '0')
        };
    }

    static getTimeout(): number {
        return parseInt(process.env.TIMEOUT || '30000');
    }
}
