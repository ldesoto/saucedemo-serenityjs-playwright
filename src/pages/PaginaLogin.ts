import { PageElement, By } from '@serenity-js/web';

/**
 * Page Object para la página de inicio de sesión
 * Contiene todos los selectores y elementos de la página de login
 */
export class PaginaLogin {
    // Campos de entrada
    static readonly campoUsuario = PageElement
        .located(By.id('user-name'))
        .describedAs('campo de nombre de usuario');

    static readonly campoContrasena = PageElement
        .located(By.id('password'))
        .describedAs('campo de contraseña');

    // Botones
    static readonly botonIniciarSesion = PageElement
        .located(By.id('login-button'))
        .describedAs('botón de iniciar sesión');

    // Mensajes de error
    static readonly mensajeError = PageElement
        .located(By.css('[data-test="error"]'))
        .describedAs('mensaje de error de login');

    // Lista de usuarios disponibles
    static readonly usuariosDisponibles = PageElement
        .located(By.id('login_credentials'))
        .describedAs('lista de usuarios disponibles');

    // Texto de contraseñas disponibles
    static readonly contrasenasDisponibles = PageElement
        .located(By.css('.login_password'))
        .describedAs('texto de contraseñas disponibles');
}