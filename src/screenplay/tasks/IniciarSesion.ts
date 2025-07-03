import { Task } from '@serenity-js/core';
import { Enter, Click } from '@serenity-js/web';
import { PaginaLogin } from '../../pages/PaginaLogin';
import { UserCredentials, TestUsers } from '../../models/TestData';

/**
 * Implementación de tarea de login
 * Maneja el flujo de autenticación para diferentes tipos de usuario
 */
export const IniciarSesion = {
    /**
     * Realiza login con credenciales proporcionadas
     * @param usuario - nombre de usuario 
     * @param contrasena - contraseña
     */
    conCredenciales: (usuario: string, contrasena: string) =>
        Task.where(
            `iniciar sesión con usuario "${usuario}"`,
            Enter.theValue(usuario).into(PaginaLogin.campoUsuario),
            Enter.theValue(contrasena).into(PaginaLogin.campoContrasena),
            Click.on(PaginaLogin.botonIniciarSesion)
        ),

    /**
     * Login usando objeto de credenciales
     */
    conCredencialesObjeto: (credentials: UserCredentials) =>
        IniciarSesion.conCredenciales(credentials.username, credentials.password),

    /**
     * Login de usuario estándar (caso de prueba más común)
     */
    conCredencialesEstandar: () =>
        IniciarSesion.conCredencialesObjeto(TestUsers.STANDARD_USER),

    /**
     * Intento de login inválido (pruebas negativas)
     */
    conCredencialesInvalidas: () =>
        IniciarSesion.conCredencialesObjeto(TestUsers.INVALID_USER),

    /**
     * Login de usuario bloqueado (escenario de acceso denegado)
     */
    conUsuarioBloqueado: () =>
        IniciarSesion.conCredencialesObjeto(TestUsers.LOCKED_OUT_USER),
};