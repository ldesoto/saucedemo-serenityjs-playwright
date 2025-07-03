import { Task } from '@serenity-js/core';
import { Enter, Click } from '@serenity-js/web';
import { PaginaLogin } from '../../pages/PaginaLogin';
import { UserCredentials, TestUsers } from '../../models/TestData';

/**
 * Login task implementation
 * Handles authentication flow for different user types
 */
export const IniciarSesion = {
    /**
     * Performs login with provided credentials
     * @param usuario - username 
     * @param contrasena - password
     */
    conCredenciales: (usuario: string, contrasena: string) =>
        Task.where(
            `login with user "${usuario}"`,
            Enter.theValue(usuario).into(PaginaLogin.campoUsuario),
            Enter.theValue(contrasena).into(PaginaLogin.campoContrasena),
            Click.on(PaginaLogin.botonIniciarSesion)
        ),

    /**
     * Login using credentials object
     */
    conCredencialesObjeto: (credentials: UserCredentials) =>
        IniciarSesion.conCredenciales(credentials.username, credentials.password),

    /**
     * Standard user login (most common test case)
     */
    conCredencialesEstandar: () =>
        IniciarSesion.conCredencialesObjeto(TestUsers.STANDARD_USER),

    /**
     * Invalid login attempt (negative testing)
     */
    conCredencialesInvalidas: () =>
        IniciarSesion.conCredencialesObjeto(TestUsers.INVALID_USER),

    /**
     * Locked user login (access denied scenario)
     */
    conUsuarioBloqueado: () =>
        IniciarSesion.conCredencialesObjeto(TestUsers.LOCKED_OUT_USER),
};