import { configure, Duration } from '@serenity-js/core';
import { ConsoleReporter } from '@serenity-js/console-reporter';
import { Photographer, TakePhotosOfFailures, TakePhotosOfInteractions } from '@serenity-js/web';

// Configuración completa de Serenity/JS
configure({
    // Configuración del equipo de reportes
    crew: [
        // Reporter para consola con colores para terminales oscuras
        ConsoleReporter.forDarkTerminals(),
        
        // Fotógrafo que toma capturas en fallos y opcionalmente en interacciones
        process.env.TAKE_PHOTOS === 'all' 
            ? Photographer.whoWill(TakePhotosOfInteractions)
            : Photographer.whoWill(TakePhotosOfFailures),
    ],
    
    // Configuración de timeouts
    cueTimeout: Duration.ofMilliseconds(parseInt(process.env.SERENITY_TIMEOUT || '90000')),
});

export {};
