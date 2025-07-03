import { Given, When, Then } from '@cucumber/cucumber';
import { Ensure, equals } from '@serenity-js/assertions';
import { isVisible, Navigate, Click } from '@serenity-js/web';
import { AgregarProductoAlCarrito } from '../../src/screenplay/tasks/AgregarProductoAlCarrito';
import { RemoverProductoDelCarrito } from '../../src/screenplay/tasks/RemoverProductoDelCarrito';
import { CarritoTieneProducto } from '../../src/screenplay/questions/CarritoTieneProducto';
import { IniciarSesion } from '../../src/screenplay/tasks/IniciarSesion';
import { PaginaProductos } from '../../src/pages/PaginaProductos';

Given('the user is logged in to the products page', async function () {
    await this.actor.attemptsTo(
        Navigate.to('https://www.saucedemo.com/'),
        IniciarSesion.conCredenciales('standard_user', 'secret_sauce')
    );
});

When('they add product {string} to the cart', async function (productName: string) {
    await this.actor.attemptsTo(
        AgregarProductoAlCarrito.llamado(productName)
    );
});

When('they remove product {string} from the cart', async function (productName: string) {
    await this.actor.attemptsTo(
        RemoverProductoDelCarrito.llamado(productName)
    );
});

Then('the cart should contain product {string}', async function (productName: string) {
    await this.actor.attemptsTo(
        // Navegar al carrito primero para verificar el contenido
        Click.on(PaginaProductos.iconoCarrito),
        Ensure.that(CarritoTieneProducto.llamado(productName), isVisible())
    );
});

Then('the cart should show {int} products', async function (quantity: number) {
    await this.actor.attemptsTo(
        Ensure.that(CarritoTieneProducto.cantidadTotal(), equals(quantity))
    );
});
