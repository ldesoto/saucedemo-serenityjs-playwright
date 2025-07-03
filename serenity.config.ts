import { configure, Duration } from '@serenity-js/core';
import { ConsoleReporter } from '@serenity-js/console-reporter';
import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';
import { Photographer, TakePhotosOfFailures, TakePhotosOfInteractions } from '@serenity-js/web';

// Configuración de Serenity/JS
configure({
    crew: [
        ConsoleReporter.forDarkTerminals(),
        SerenityBDDReporter.fromJSON({}),
        // Tomar capturas en fallos o en todas las interacciones
        process.env.TAKE_PHOTOS === 'all' 
            ? Photographer.whoWill(TakePhotosOfInteractions)
            : Photographer.whoWill(TakePhotosOfFailures),
    ],
    // Timeout para usuarios lentos
    cueTimeout: Duration.ofMilliseconds(90000),
});

export {};
