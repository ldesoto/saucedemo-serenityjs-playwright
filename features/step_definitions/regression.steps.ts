import { Given, When, Then } from '@cucumber/cucumber';
import { Navigate, isVisible } from '@serenity-js/web';
import { Ensure, equals } from '@serenity-js/assertions';
import { IniciarSesion } from '../../src/screenplay/tasks/IniciarSesion';
import { AgregarProductoAlCarrito } from '../../src/screenplay/tasks/AgregarProductoAlCarrito';
import { CompletarCheckout } from '../../src/screenplay/tasks/CompletarCheckout';
import { EstaLogueado } from '../../src/screenplay/questions/EstaLogueado';
import { CarritoTieneProducto } from '../../src/screenplay/questions/CarritoTieneProducto';
import { OrdenConfirmada } from '../../src/screenplay/questions/OrdenConfirmada';

// This file reuses steps from other step definition files
// Additional steps specific to regression scenarios can be added here

// Example of a complex regression step
When('they complete the full purchase flow with {string}', async function (productName: string) {
    await this.actor.attemptsTo(
        AgregarProductoAlCarrito.llamado(productName),
        CompletarCheckout.completoConInformacion({
            nombre: 'John',
            apellido: 'Doe', 
            codigoPostal: '12345'
        })
    );
});

// Verification step for complete flow
Then('the purchase should be completed successfully', async function () {
    await this.actor.attemptsTo(
        Ensure.that(OrdenConfirmada.fueCompletadaExitosamente(), equals(true))
    );
});
