import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { actorCalled } from '@serenity-js/core';
import { chromium, Browser } from 'playwright';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { Navigate, isVisible } from '@serenity-js/web';
import { Ensure } from '@serenity-js/assertions';
import { IniciarSesion } from '../../src/screenplay/tasks/IniciarSesion';
import { EstaLogueado } from '../../src/screenplay/questions/EstaLogueado';
import { EnvironmentUtils } from '../../src/utilities/TestUtils';

let browser: Browser;

Before(async function () {
    const browserConfig = EnvironmentUtils.getBrowserConfig();
    browser = await chromium.launch(browserConfig);
    
    this.actor = actorCalled('User').whoCan(
        BrowseTheWebWithPlaywright.using(browser)
    );
});

After(async function () {
    if (browser) {
        await browser.close();
    }
});

Given('the user is on the login page', { timeout: 60000 }, async function () {
    await this.actor.attemptsTo(
        Navigate.to(EnvironmentUtils.getBaseUrl())
    );
});

When('they enter username {string} and password {string}', { timeout: 90000 }, async function (username: string, password: string) {
    await this.actor.attemptsTo(
        IniciarSesion.conCredenciales(username, password)
    );
});

Then('they should see the products page', { timeout: 60000 }, async function () {
    await this.actor.attemptsTo(
        Ensure.that(EstaLogueado.enLaPaginaDeProductos(), isVisible())
    );
});

Then('they should see an error message', { timeout: 60000 }, async function () {
    await this.actor.attemptsTo(
        Ensure.that(EstaLogueado.mensajeDeError(), isVisible())
    );
});
