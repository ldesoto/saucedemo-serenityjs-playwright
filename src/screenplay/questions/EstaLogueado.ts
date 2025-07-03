import { Question } from '@serenity-js/core';
import { PaginaProductos } from '../../pages/PaginaProductos';
import { PaginaLogin } from '../../pages/PaginaLogin';

/**
 * Preguntas relacionadas con el estado de autenticación del usuario
 */
export const EstaLogueado = {
    /**
     * Verifica si el usuario está en la página de productos (logueado exitosamente)
     */
    enLaPaginaDeProductos: () =>
        Question.about('si el usuario está en la página de productos', actor =>
            PaginaProductos.contenedorProductos.answeredBy(actor)
        ),

    /**
     * Verifica si hay un mensaje de error visible en el login
     */
    mensajeDeError: () =>
        Question.about('si hay un mensaje de error visible', actor =>
            PaginaLogin.mensajeError.answeredBy(actor)
        ),

    /**
     * Verifica si el menú hamburguesa está visible (indica que está logueado)
     */
    menuVisible: () =>
        Question.about('si el menú hamburguesa está visible', actor =>
            PaginaProductos.menuHamburguesa.answeredBy(actor)
        ),
};