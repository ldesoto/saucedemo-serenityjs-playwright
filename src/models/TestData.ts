/**
 * Modelos de datos de prueba y credenciales de usuario para SauceDemo
 * Contiene todos los tipos de usuario soportados por la plataforma
 */

export interface UserCredentials {
    username: string;
    password: string;
    description?: string;
}

export interface CheckoutInformation {
    firstName: string;
    lastName: string;
    postalCode: string;
}

export interface Product {
    name: string;
    description: string;
    price: string;
}

/**
 * Usuarios de prueba estándar proporcionados por SauceDemo
 * Cada tipo de usuario simula diferentes escenarios y comportamientos
 */
export const TestUsers = {
    STANDARD_USER: {
        username: 'standard_user',
        password: 'secret_sauce',
        description: 'Usuario estándar con comportamiento normal'
    } as UserCredentials,

    LOCKED_OUT_USER: {
        username: 'locked_out_user', 
        password: 'secret_sauce',
        description: 'Usuario que se bloquea después del intento de login'
    } as UserCredentials,

    PROBLEM_USER: {
        username: 'problem_user',
        password: 'secret_sauce', 
        description: 'Usuario que encuentra varios problemas de UI'
    } as UserCredentials,

    PERFORMANCE_GLITCH_USER: {
        username: 'performance_glitch_user',
        password: 'secret_sauce',
        description: 'Usuario que experimenta tiempos de carga lentos'
    } as UserCredentials,

    ERROR_USER: {
        username: 'error_user',
        password: 'secret_sauce',
        description: 'Usuario que encuentra errores durante el checkout'
    } as UserCredentials,

    VISUAL_USER: {
        username: 'visual_user', 
        password: 'secret_sauce',
        description: 'Usuario para pruebas de regresión visual'
    } as UserCredentials,

    INVALID_USER: {
        username: 'invalid_user',
        password: 'wrong_password',
        description: 'Credenciales inválidas para pruebas negativas'
    } as UserCredentials
};

/**
 * Productos de prueba disponibles en SauceDemo
 */
export const TestProducts = {
    BACKPACK: { 
        name: 'Sauce Labs Backpack', 
        description: 'carry.allTheThings()', 
        price: '$29.99' 
    } as Product,
    
    BIKE_LIGHT: { 
        name: 'Sauce Labs Bike Light', 
        description: 'A red light isn\'t the desired state', 
        price: '$9.99' 
    } as Product,
    
    BOLT_TSHIRT: { 
        name: 'Sauce Labs Bolt T-Shirt', 
        description: 'Get your testing superhero on', 
        price: '$15.99' 
    } as Product,

    FLEECE_JACKET: {
        name: 'Sauce Labs Fleece Jacket',
        description: 'It\'s not every day that you come across a midweight quarter-zip fleece jacket',
        price: '$49.99'
    } as Product,

    ONESIE: {
        name: 'Sauce Labs Onesie',
        description: 'Rib snap infant onesie for the junior automation engineer in development',
        price: '$7.99'
    } as Product,

    RED_TSHIRT: {
        name: 'Test.allTheThings() T-Shirt (Red)',
        description: 'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard',
        price: '$15.99'
    } as Product
};

/**
 * Información de checkout para pruebas
 */
export const CheckoutTestData = {
    VALID_CUSTOMER: {
        firstName: 'Juan',
        lastName: 'Pérez', 
        postalCode: '28001'
    } as CheckoutInformation,

    MINIMAL_DATA: {
        firstName: 'A',
        lastName: 'B',
        postalCode: '1'
    } as CheckoutInformation
};
