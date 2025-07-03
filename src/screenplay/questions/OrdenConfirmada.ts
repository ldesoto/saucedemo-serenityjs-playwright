import { Question } from '@serenity-js/core';
import { Text } from '@serenity-js/web';
import { PaginaCheckout } from '../../pages/PaginaCheckout';

/**
 * Preguntas relacionadas con la confirmación de la orden
 */
export const OrdenConfirmada = {
    /**
     * Verifica si el mensaje de confirmación está visible
     */
    mensajeVisible: () =>
        Question.about('si el mensaje de confirmación está visible', actor =>
            PaginaCheckout.mensajeConfirmacion.answeredBy(actor)
        ),

    /**
     * Obtiene el texto del mensaje de confirmación
     */
    textoMensaje: () =>
        Question.about('el texto del mensaje de confirmación', actor =>
            Text.of(PaginaCheckout.mensajeConfirmacion).answeredBy(actor)
        ),

    /**
     * Verifica si la orden fue completada exitosamente
     */
    fueCompletadaExitosamente: () =>
        Question.about('si la orden fue completada exitosamente', async actor => {
            try {
                const mensaje = await Text.of(PaginaCheckout.mensajeConfirmacion).answeredBy(actor);
                return mensaje.includes('THANK YOU FOR YOUR ORDER') || 
                       mensaje.includes('complete') || 
                       mensaje.includes('success');
            } catch {
                return false;
            }
        }),

    /**
     * Verifica si el botón de volver a productos está disponible
     */
    botonVolverDisponible: () =>
        Question.about('si el botón volver está disponible', actor =>
            PaginaCheckout.botonVolver.answeredBy(actor)
        ),
};