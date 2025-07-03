import { PageElement, By } from '@serenity-js/web';

/**
 * Page Object para la página de productos
 * Contiene selectores para la gestión de productos
 */
export class PaginaProductos {
    // Contenedor principal
    static readonly contenedorProductos = PageElement
        .located(By.css('.inventory_list'))
        .describedAs('contenedor de lista de productos');

    // Elementos de producto
    static readonly productoPorNombre = (nombre: string) => PageElement
        .located(By.css(`[data-test="inventory-item-name"]:has-text("${nombre}")`))
        .describedAs(`producto ${nombre}`);

    static readonly botonAgregarPorNombre = (nombre: string) => PageElement
        .located(By.css(`[data-test="add-to-cart-${nombre.toLowerCase().replace(/\s+/g, '-')}"]`))
        .describedAs(`botón agregar al carrito para ${nombre}`);

    // Carrito
    static readonly iconoCarrito = PageElement
        .located(By.css('.shopping_cart_link'))
        .describedAs('icono del carrito de compras');

    static readonly contadorCarrito = PageElement
        .located(By.css('.shopping_cart_badge'))
        .describedAs('contador de productos en el carrito');

    // Menú hamburguesa
    static readonly menuHamburguesa = PageElement
        .located(By.id('react-burger-menu-btn'))
        .describedAs('menú hamburguesa');

    static readonly opcionCerrarSesion = PageElement
        .located(By.id('logout_sidebar_link'))
        .describedAs('opción cerrar sesión');
}