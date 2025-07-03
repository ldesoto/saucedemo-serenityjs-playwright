import { PageElement, By } from '@serenity-js/web';

/**
 * Page Object para las páginas del proceso de checkout
 */
export class PaginaCheckout {
    // Información del usuario (Step 1)
    static readonly campoNombre = PageElement
        .located(By.id('first-name'))
        .describedAs('campo de nombre');

    static readonly campoApellido = PageElement
        .located(By.id('last-name'))
        .describedAs('campo de apellido');

    static readonly campoCodigoPostal = PageElement
        .located(By.id('postal-code'))
        .describedAs('campo de código postal');

    static readonly botonContinuar = PageElement
        .located(By.id('continue'))
        .describedAs('botón continuar');

    // Resumen del pedido (Step 2)
    static readonly resumenPedido = PageElement
        .located(By.css('.checkout_summary_container'))
        .describedAs('resumen del pedido');

    static readonly totalPedido = PageElement
        .located(By.css('.summary_total_label'))
        .describedAs('total del pedido');

    static readonly botonFinalizarCompra = PageElement
        .located(By.id('finish'))
        .describedAs('botón finalizar compra');

    // Confirmación (Step 3)
    static readonly mensajeConfirmacion = PageElement
        .located(By.css('.complete-header'))
        .describedAs('mensaje de confirmación del pedido');

    static readonly botonVolver = PageElement
        .located(By.id('back-to-products'))
        .describedAs('botón volver a productos');

    // Mensajes de error
    static readonly mensajeError = PageElement
        .located(By.css('[data-test="error"]'))
        .describedAs('mensaje de error en checkout');
}