/**
 * Model for user credentials
 */
export interface UserCredentials {
    username: string;
    password: string;
}

/**
 * Model for user checkout information
 */
export interface CheckoutInformation {
    firstName: string;
    lastName: string;
    postalCode: string;
}

/**
 * Model for product information
 */
export interface Product {
    name: string;
    description: string;
    price: string;
}

/**
 * Predefined users for testing
 */
export const TestUsers = {
    STANDARD_USER: { username: 'standard_user', password: 'secret_sauce' } as UserCredentials,
    LOCKED_OUT_USER: { username: 'locked_out_user', password: 'secret_sauce' } as UserCredentials,
    PROBLEM_USER: { username: 'problem_user', password: 'secret_sauce' } as UserCredentials,
    PERFORMANCE_GLITCH_USER: { username: 'performance_glitch_user', password: 'secret_sauce' } as UserCredentials,
    INVALID_USER: { username: 'invalid_user', password: 'wrong_password' } as UserCredentials,
};

/**
 * Test products
 */
export const TestProducts = {
    BACKPACK: { name: 'Sauce Labs Backpack', description: 'carry.allTheThings()', price: '$29.99' } as Product,
    BIKE_LIGHT: { name: 'Sauce Labs Bike Light', description: 'A red light isn\'t the desired state', price: '$9.99' } as Product,
    BOLT_TSHIRT: { name: 'Sauce Labs Bolt T-Shirt', description: 'Get your testing superhero on', price: '$15.99' } as Product,
};
