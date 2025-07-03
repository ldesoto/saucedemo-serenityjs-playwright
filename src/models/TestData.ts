/**
 * Test data models and user credentials for SauceDemo application
 * Contains all user types supported by the platform
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
 * Standard test users provided by SauceDemo
 * Each user type simulates different scenarios and behaviors
 */
export const TestUsers = {
    STANDARD_USER: {
        username: 'standard_user',
        password: 'secret_sauce',
        description: 'Standard user with normal behavior'
    } as UserCredentials,

    LOCKED_OUT_USER: {
        username: 'locked_out_user', 
        password: 'secret_sauce',
        description: 'User that gets locked out after login attempt'
    } as UserCredentials,

    PROBLEM_USER: {
        username: 'problem_user',
        password: 'secret_sauce', 
        description: 'User that encounters various UI issues'
    } as UserCredentials,

    PERFORMANCE_GLITCH_USER: {
        username: 'performance_glitch_user',
        password: 'secret_sauce',
        description: 'User that experiences slow page load times'
    } as UserCredentials,

    ERROR_USER: {
        username: 'error_user',
        password: 'secret_sauce',
        description: 'User that encounters errors during checkout'
    } as UserCredentials,

    VISUAL_USER: {
        username: 'visual_user', 
        password: 'secret_sauce',
        description: 'User for visual regression testing'
    } as UserCredentials,

    INVALID_USER: {
        username: 'invalid_user',
        password: 'wrong_password',
        description: 'Invalid credentials for negative testing'
    } as UserCredentials
};

/**
 * Test products available in SauceDemo
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
 * Test checkout information
 */
export const CheckoutTestData = {
    VALID_CUSTOMER: {
        firstName: 'John',
        lastName: 'Doe', 
        postalCode: '12345'
    } as CheckoutInformation,

    MINIMAL_DATA: {
        firstName: 'A',
        lastName: 'B',
        postalCode: '1'
    } as CheckoutInformation
};
