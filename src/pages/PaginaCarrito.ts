import { PageElement, By } from '@serenity-js/web';

/**
 * Page Object para la página del carrito
 */
export class PaginaCarrito {
    // Contenedor del carrito
    static readonly contenedorCarrito = PageElement
        .located(By.css('.cart_list'))
        .describedAs('contenedor del carrito');

    // Elementos del carrito
    static readonly productosEnCarrito = PageElement
        .located(By.css('.cart_item'))
        .describedAs('productos en el carrito');

    static readonly productoPorNombreEnCarrito = (nombre: string) => PageElement
        .located(By.css(`.cart_item:has([data-test="inventory-item-name"]:has-text("${nombre}"))`))
        .describedAs(`producto ${nombre} en el carrito`);

    // Botones
    static readonly botonCheckout = PageElement
        .located(By.id('checkout'))
        .describedAs('botón de checkout');

    static readonly botonContinuarComprando = PageElement
        .located(By.id('continue-shopping'))
        .describedAs('botón continuar comprando');

    // Botones de remover
    static readonly botonRemoverPorNombre = (nombre: string) => PageElement
        .located(By.css(`[data-test="remove-${nombre.toLowerCase().replace(/\s+/g, '-')}"]`))
        .describedAs(`botón remover ${nombre}`);
}