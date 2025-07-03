import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { actorCalled } from '@serenity-js/core';
import { chromium, Browser } from 'playwright';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { Navigate, isVisible } from '@serenity-js/web';
import { Ensure, equals } from '@serenity-js/assertions';
import { IniciarSesion } from '../../src/screenplay/tasks/IniciarSesion';
import { AgregarProductoAlCarrito } from '../../src/screenplay/tasks/AgregarProductoAlCarrito';
import { RemoverProductoDelCarrito } from '../../src/screenplay/tasks/RemoverProductoDelCarrito';
import { CompletarCheckout } from '../../src/screenplay/tasks/CompletarCheckout';
import { EstaLogueado } from '../../src/screenplay/questions/EstaLogueado';
import { CarritoTieneProducto } from '../../src/screenplay/questions/CarritoTieneProducto';
import { OrdenConfirmada } from '../../src/screenplay/questions/OrdenConfirmada';
import { EnvironmentUtils } from '../../src/utilities/TestUtils';
import { DataTable } from '@cucumber/cucumber';

let browser: Browser;

// Configuración inicial antes de cada escenario
Before(async function () {
    const browserConfig = EnvironmentUtils.getBrowserConfig();
    browser = await chromium.launch(browserConfig);
    
    this.actor = actorCalled('Usuario').whoCan(
        BrowseTheWebWithPlaywright.using(browser)
    );
});

// Limpieza después de cada escenario
After(async function () {
    if (browser) {
        await browser.close();
    }
});

// Steps en español
Given('que el usuario está en la página de login', { timeout: 60000 }, async function () {
    await this.actor.attemptsTo(
        Navigate.to(EnvironmentUtils.getBaseUrl())
    );
});

Given('que el usuario está logueado en la página de productos', { timeout: 60000 }, async function () {
    await this.actor.attemptsTo(
        Navigate.to(EnvironmentUtils.getBaseUrl()),
        IniciarSesion.conCredencialesEstandar()
    );
});

Given('tiene productos en el carrito', async function () {
    await this.actor.attemptsTo(
        AgregarProductoAlCarrito.backpack()
    );
});

When('ingresa usuario {string} y contraseña {string}', { timeout: 120000 }, async function (username: string, password: string) {
    await this.actor.attemptsTo(
        IniciarSesion.conCredenciales(username, password)
    );
});

When('agrega el producto {string} al carrito', async function (productName: string) {
    await this.actor.attemptsTo(
        AgregarProductoAlCarrito.llamado(productName)
    );
});

When('remueve el producto {string} del carrito', async function (productName: string) {
    await this.actor.attemptsTo(
        RemoverProductoDelCarrito.llamado(productName)
    );
});

When('procede al checkout', { timeout: 60000 }, async function () {
    await this.actor.attemptsTo(
        CompletarCheckout.irAlCarrito(),
        CompletarCheckout.procederAlCheckout()
    );
});

When('completa la información de checkout con:', { timeout: 60000 }, async function (dataTable: DataTable) {
    const data = dataTable.hashes()[0];
    await this.actor.attemptsTo(
        CompletarCheckout.conInformacionModel({
            firstName: data.firstName,
            lastName: data.lastName,
            postalCode: data.postalCode
        }),
        CompletarCheckout.finalizarCompra()
    );
});

Then('debería ver la página de productos', { timeout: 60000 }, async function () {
    await this.actor.attemptsTo(
        Ensure.that(EstaLogueado.enLaPaginaDeProductos(), isVisible())
    );
});

Then('debería ver un mensaje de error', { timeout: 60000 }, async function () {
    await this.actor.attemptsTo(
        Ensure.that(EstaLogueado.mensajeDeError(), isVisible())
    );
});

Then('el carrito debería contener el producto {string}', async function (productName: string) {
    await this.actor.attemptsTo(
        Ensure.that(CarritoTieneProducto.llamado(productName), isVisible())
    );
});

Then('el carrito debería mostrar {int} productos', async function (count: number) {
    await this.actor.attemptsTo(
        Ensure.that(CarritoTieneProducto.cantidad(count), equals(true))
    );
});

Then('debería ver el mensaje de confirmación del pedido', { timeout: 60000 }, async function () {
    await this.actor.attemptsTo(
        Ensure.that(OrdenConfirmada.mensajeVisible(), isVisible())
    );
});

// Step genérico para diferentes tipos de resultado
Then('debería ver {string}', { timeout: 60000 }, async function (expectedResult: string) {
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
