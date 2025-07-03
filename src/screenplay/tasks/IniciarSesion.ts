import { Task } from '@serenity-js/core';
import { Enter, Click } from '@serenity-js/web';
import { PaginaLogin } from '../../pages/PaginaLogin';
import { UserCredentials, TestUsers } from '../../models/TestData';

/**
 * Task para login de usuarios
 */
export const IniciarSesion = {
    conCredenciales: (usuario: string, contrasena: string) =>
        Task.where(
            `iniciar sesión con usuario "${usuario}"`,
            Enter.theValue(usuario).into(PaginaLogin.campoUsuario),
            Enter.theValue(contrasena).into(PaginaLogin.campoContrasena),
            Click.on(PaginaLogin.botonIniciarSesion)
        ),

    conCredencialesObjeto: (credentials: UserCredentials) =>
        IniciarSesion.conCredenciales(credentials.username, credentials.password),

    conCredencialesEstandar: () =>
        IniciarSesion.conCredencialesObjeto(TestUsers.STANDARD_USER),

    conCredencialesInvalidas: () =>
        IniciarSesion.conCredencialesObjeto(TestUsers.INVALID_USER),

    conUsuarioBloqueado: () =>
        IniciarSesion.conCredencialesObjeto(TestUsers.LOCKED_OUT_USER),
};