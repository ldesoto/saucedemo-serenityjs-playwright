import { Task } from '@serenity-js/core';
import { Click, Enter } from '@serenity-js/web';
import { PaginaProductos } from '../../pages/PaginaProductos';
import { PaginaCarrito } from '../../pages/PaginaCarrito';
import { PaginaCheckout } from '../../pages/PaginaCheckout';
import { CheckoutInformation } from '../../models/TestData';

/**
 * Información del usuario para el checkout (mantener compatibilidad)
 * @deprecated Usar CheckoutInformation de models/TestData.ts
 */
export interface InformacionUsuario {
    nombre: string;
    apellido: string;
    codigoPostal: string;
}

/**
 * Tarea para completar el proceso de checkout
 */
export const CompletarCheckout = {
    /**
     * Navega al carrito desde la página de productos
     */
    irAlCarrito: () =>
        Task.where(
            '#actor navega al carrito',
            Click.on(PaginaProductos.iconoCarrito)
        ),

    /**
     * Procede al checkout desde el carrito
     */
    procederAlCheckout: () =>
        Task.where(
            '#actor procede al checkout',
            Click.on(PaginaCarrito.botonCheckout)
        ),

    /**
     * Completa la información personal del usuario
     * @param info - información del usuario
     */
    conInformacion: (info: InformacionUsuario) =>
        Task.where(
            `#actor completa la información personal`,
            Enter.theValue(info.nombre).into(PaginaCheckout.campoNombre),
            Enter.theValue(info.apellido).into(PaginaCheckout.campoApellido),
            Enter.theValue(info.codigoPostal).into(PaginaCheckout.campoCodigoPostal),
            Click.on(PaginaCheckout.botonContinuar)
        ),

    /**
     * Finaliza la compra
     */
    finalizarCompra: () =>
        Task.where(
            '#actor finaliza la compra',
            Click.on(PaginaCheckout.botonFinalizarCompra)
        ),

    /**
     * Completa la información personal del usuario (versión con CheckoutInformation)
     * @param info - información del usuario usando el modelo estándar
     */
    conInformacionModel: (info: CheckoutInformation) =>
        Task.where(
            `#actor completa la información personal`,
            Enter.theValue(info.firstName).into(PaginaCheckout.campoNombre),
            Enter.theValue(info.lastName).into(PaginaCheckout.campoApellido),
            Enter.theValue(info.postalCode).into(PaginaCheckout.campoCodigoPostal),
            Click.on(PaginaCheckout.botonContinuar)
        ),

    /**
     * Completa con información de prueba
     */
    conInformacionAleatoria: () => {
        return CompletarCheckout.conInformacionModel({
            firstName: 'Test',
            lastName: 'User',
            postalCode: '12345'
        });
    },

    /**
     * Proceso completo de checkout con información del modelo
     * @param info - información del usuario usando CheckoutInformation
     */
    completoConInformacionModel: (info: CheckoutInformation) =>
        Task.where(
            `#actor completa todo el proceso de checkout`,
            CompletarCheckout.irAlCarrito(),
            CompletarCheckout.procederAlCheckout(),
            CompletarCheckout.conInformacionModel(info),
            CompletarCheckout.finalizarCompra()
        ),

    /**
     * Proceso completo de checkout con información del usuario (mantener compatibilidad)
     * @param info - información del usuario
     */
    completoConInformacion: (info: InformacionUsuario) =>
        Task.where(
            `#actor completa todo el proceso de checkout`,
            CompletarCheckout.irAlCarrito(),
            CompletarCheckout.procederAlCheckout(),
            CompletarCheckout.conInformacion(info),
            CompletarCheckout.finalizarCompra()
        ),
};