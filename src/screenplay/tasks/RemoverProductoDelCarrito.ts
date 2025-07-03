import { Task } from '@serenity-js/core';
import { Click } from '@serenity-js/web';
import { PaginaCarrito } from '../../pages/PaginaCarrito';
import { PaginaProductos } from '../../pages/PaginaProductos';
import { Product } from '../../models/TestData';

/**
 * Tarea para remover productos del carrito
 */
export const RemoverProductoDelCarrito = {
    /**
     * Remueve un producto específico del carrito por su nombre
     * @param nombreProducto - nombre del producto a remover
     */
    llamado: (nombreProducto: string) =>
        Task.where(
            `#actor remueve el producto "${nombreProducto}" del carrito`,
            Click.on(PaginaProductos.iconoCarrito), // Navegar al carrito primero
            Click.on(PaginaCarrito.botonRemoverPorNombre(nombreProducto))
        ),

    /**
     * Remueve un producto usando el objeto Product
     * @param product - objeto producto a remover
     */
    producto: (product: Product) =>
        RemoverProductoDelCarrito.llamado(product.name),

    /**
     * Remueve múltiples productos del carrito
     * @param productos - array de nombres de productos
     */
    multiples: (...productos: string[]) =>
        Task.where(
            `#actor remueve múltiples productos del carrito`,
            Click.on(PaginaProductos.iconoCarrito), // Navegar al carrito primero
            ...productos.map(producto => Click.on(PaginaCarrito.botonRemoverPorNombre(producto)))
        ),

    /**
     * Remueve todos los productos del carrito
     */
    todos: () =>
        Task.where(
            `#actor remueve todos los productos del carrito`,
            Click.on(PaginaProductos.iconoCarrito)
            // Aquí se podría implementar lógica para remover todos los productos
            // basándose en los elementos encontrados en el carrito
        ),
};
