import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { PaginaProductos } from '../../pages/PaginaProductos';
import { Product, TestProducts } from '../../models/TestData';
import { TestDataUtils } from '../../utilities/TestUtils';

/**
 * Tarea para agregar productos al carrito
 */
export const AgregarProductoAlCarrito = {
    /**
     * Agrega un producto específico al carrito por su nombre
     * @param nombreProducto - nombre del producto a agregar
     */
    llamado: (nombreProducto: string) =>
        Task.where(
            `#actor agrega el producto "${nombreProducto}" al carrito`,
            Click.on(PaginaProductos.botonAgregarPorNombre(nombreProducto))
        ),

    /**
     * Agrega un producto usando el objeto Product
     * @param product - objeto producto a agregar
     */
    producto: (product: Product) =>
        AgregarProductoAlCarrito.llamado(product.name),

    /**
     * Agrega productos predefinidos comunes
     */
    backpack: () =>
        AgregarProductoAlCarrito.producto(TestProducts.BACKPACK),

    bikeLight: () =>
        AgregarProductoAlCarrito.producto(TestProducts.BIKE_LIGHT),

    boltTShirt: () =>
        AgregarProductoAlCarrito.producto(TestProducts.BOLT_TSHIRT),

    /**
     * Agrega múltiples productos al carrito
     * @param productos - array de nombres de productos
     */
    multiples: (...productos: string[]) =>
        Task.where(
            `#actor agrega múltiples productos al carrito`,
            ...productos.map(producto => Click.on(PaginaProductos.botonAgregarPorNombre(producto)))
        ),

    /**
     * Agrega múltiples productos usando objetos Product
     * @param products - array de objetos Product
     */
    productosMultiples: (...products: Product[]) =>
        Task.where(
            `#actor agrega múltiples productos al carrito`,
            ...products.map(product => Click.on(PaginaProductos.botonAgregarPorNombre(product.name)))
        ),
};