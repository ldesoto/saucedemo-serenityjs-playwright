/**
 * Datos de prueba
 */

export interface UserCredentials {
    username: string;
    password: string;
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

// Usuarios de prueba
export const TestUsers = {
    STANDARD_USER: {
        username: 'standard_user',
        password: 'secret_sauce'
    } as UserCredentials,

    LOCKED_OUT_USER: {
        username: 'locked_out_user', 
        password: 'secret_sauce'
    } as UserCredentials,

    PROBLEM_USER: {
        username: 'problem_user',
        password: 'secret_sauce'
    } as UserCredentials,

    PERFORMANCE_GLITCH_USER: {
        username: 'performance_glitch_user',
        password: 'secret_sauce'
    } as UserCredentials,

    ERROR_USER: {
        username: 'error_user',
        password: 'secret_sauce'
    } as UserCredentials,

    VISUAL_USER: {
        username: 'visual_user',
        password: 'secret_sauce'
    } as UserCredentials,

    INVALID_USER: {
        username: 'invalid_user',
        password: 'wrong_password'
    } as UserCredentials
};

// Productos de prueba
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
    } as Product
};

// Datos de checkout
export const CheckoutTestData = {
    VALID_CUSTOMER: {
        firstName: 'Juan',
        lastName: 'Pérez', 
        postalCode: '28001'
    } as CheckoutInformation
};
