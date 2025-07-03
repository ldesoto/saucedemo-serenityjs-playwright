import { Given, When, Then } from '@cucumber/cucumber';
import { isVisible } from '@serenity-js/web';
import { Ensure } from '@serenity-js/assertions';
import { IniciarSesion } from '../../src/screenplay/tasks/IniciarSesion';
import { AgregarProductoAlCarrito } from '../../src/screenplay/tasks/AgregarProductoAlCarrito';
import { CompletarCheckout } from '../../src/screenplay/tasks/CompletarCheckout';
import { OrdenConfirmada } from '../../src/screenplay/questions/OrdenConfirmada';
import { EstaLogueado } from '../../src/screenplay/questions/EstaLogueado';

Given('they have products in the cart', async function () {
    await this.actor.attemptsTo(
        AgregarProductoAlCarrito.llamado('Sauce Labs Backpack')
    );
});

When('they proceed to checkout', async function () {
    await this.actor.attemptsTo(
        CompletarCheckout.irAlCarrito(),
        CompletarCheckout.procederAlCheckout()
    );
});

When('they complete checkout information with:', async function (dataTable) {
    const data = dataTable.hashes()[0];
    await this.actor.attemptsTo(
        CompletarCheckout.conInformacion({
            nombre: data.firstName,
            apellido: data.lastName,
            codigoPostal: data.postalCode
        }),
        CompletarCheckout.finalizarCompra()
    );
});

Then('they should see the order confirmation message', { timeout: 60000 }, async function () {
    await this.actor.attemptsTo(
        Ensure.that(OrdenConfirmada.mensajeVisible(), isVisible())
    );
});

// Additional step for different result types
Then('they should see {string}', { timeout: 60000 }, async function (expectedResult: string) {
    if (expectedResult === 'products page') {
        await this.actor.attemptsTo(
            Ensure.that(EstaLogueado.enLaPaginaDeProductos(), isVisible())
        );
    } else if (expectedResult === 'error message') {
        await this.actor.attemptsTo(
            Ensure.that(EstaLogueado.mensajeDeError(), isVisible())
        );
    }
});
