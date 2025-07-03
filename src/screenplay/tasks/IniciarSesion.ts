import { Task } from '@serenity-js/core';
import { Enter, Click } from '@serenity-js/web';
import { PaginaLogin } from '../../pages/PaginaLogin';
import { UserCredentials, TestUsers } from '../../models/TestData';

/**
 * Tarea para iniciar sesión en la aplicación
 */
export const IniciarSesion = {
    /**
     * Inicia sesión con las credenciales proporcionadas
     * @param usuario - nombre de usuario
     * @param contrasena - contraseña del usuario
     */
    conCredenciales: (usuario: string, contrasena: string) =>
        Task.where(
            `#actor inicia sesión con usuario "${usuario}"`,
            Enter.theValue(usuario).into(PaginaLogin.campoUsuario),
            Enter.theValue(contrasena).into(PaginaLogin.campoContrasena),
            Click.on(PaginaLogin.botonIniciarSesion)
        ),

    /**
     * Inicia sesión con un objeto de credenciales
     * @param credentials - objeto con credenciales del usuario
     */
    conCredencialesObjeto: (credentials: UserCredentials) =>
        IniciarSesion.conCredenciales(credentials.username, credentials.password),

    /**
     * Inicia sesión con credenciales estándar
     */
    conCredencialesEstandar: () =>
        IniciarSesion.conCredencialesObjeto(TestUsers.STANDARD_USER),

    /**
     * Intenta iniciar sesión con credenciales inválidas
     */
    conCredencialesInvalidas: () =>
        IniciarSesion.conCredencialesObjeto(TestUsers.INVALID_USER),

    /**
     * Inicia sesión con usuario bloqueado
     */
    conUsuarioBloqueado: () =>
        IniciarSesion.conCredencialesObjeto(TestUsers.LOCKED_OUT_USER),
};