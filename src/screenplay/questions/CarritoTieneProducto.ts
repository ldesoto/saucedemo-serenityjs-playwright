import { Question } from '@serenity-js/core';
import { Text } from '@serenity-js/web';
import { PaginaProductos } from '../../pages/PaginaProductos';
import { PaginaCarrito } from '../../pages/PaginaCarrito';

/**
 * Preguntas relacionadas con el contenido del carrito
 */
export const CarritoTieneProducto = {
    /**
     * Verifica si un producto específico está en el carrito
     * @param nombreProducto - nombre del producto a verificar
     */
    llamado: (nombreProducto: string) =>
        Question.about(`si el carrito contiene el producto "${nombreProducto}"`, actor =>
            PaginaCarrito.productoPorNombreEnCarrito(nombreProducto).answeredBy(actor)
        ),

    /**
     * Verifica la cantidad de productos en el carrito
     * @param cantidadEsperada - número esperado de productos
     */
    cantidad: (cantidadEsperada: number) =>
        Question.about(`si el carrito tiene ${cantidadEsperada} productos`, async actor => {
            try {
                const contadorTexto = await Text.of(PaginaProductos.contadorCarrito).answeredBy(actor);
                return parseInt(contadorTexto, 10) === cantidadEsperada;
            } catch {
                return cantidadEsperada === 0; // Si no hay contador, solo es verdadero si esperamos 0
            }
        }),

    /**
     * Verifica si el carrito está vacío
     */
    estaVacio: () =>
        Question.about('si el carrito está vacío', async actor => {
            try {
                await PaginaProductos.contadorCarrito.answeredBy(actor);
                return false; // Si el contador existe, el carrito no está vacío
            } catch {
                return true; // Si no existe el contador, el carrito está vacío
            }
        }),

    /**
     * Obtiene el número total de productos en el carrito
     */
    cantidadTotal: () =>
        Question.about('la cantidad total de productos en el carrito', async actor => {
            try {
                const contadorTexto = await Text.of(PaginaProductos.contadorCarrito).answeredBy(actor);
                return parseInt(contadorTexto, 10);
            } catch {
                return 0; // Si no existe el contador, hay 0 productos
            }
        }),

    /**
     * Verifica si la cantidad de productos coincide con la esperada
     * @param cantidadEsperada - número esperado de productos
     */
    tieneCantidad: (cantidadEsperada: number) =>
        Question.about(`si el carrito tiene ${cantidadEsperada} productos`, async actor => {
            try {
                const contadorTexto = await Text.of(PaginaProductos.contadorCarrito).answeredBy(actor);
                return parseInt(contadorTexto, 10) === cantidadEsperada;
            } catch {
                return cantidadEsperada === 0; // Si no hay contador, solo es verdadero si esperamos 0
            }
        }),
};