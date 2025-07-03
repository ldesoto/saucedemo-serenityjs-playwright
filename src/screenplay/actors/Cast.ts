import { Actor, Cast, Stage } from '@serenity-js/core';
import { BrowseTheWebWithPlaywright } from '@serenity-js/playwright';
import { Browser } from 'playwright';

/**
 * Elenco estándar que crea nuevos Actores de Serenity/JS,
 * cada uno con su propio contexto y página de Playwright aislados.
 * 
 * Espera una instancia de Browser de Playwright (no una Page!).
 */
export class ElencoEstandar extends Cast {
    private escenario!: Stage;

    /**
     * Recibe el Browser de Playwright (¡no una Page!)
     * @param navegador - instancia del navegador Playwright
     */
    constructor(private readonly navegador: Browser) {
        super();
    }

    /**
     * Serenity/JS llama automáticamente a esto para dar al Cast su Stage,
     * para que cada Actor conozca el mismo Stage.
     * @param stage - el escenario compartido
     */
    assign(stage: Stage): void {
        this.escenario = stage;
    }

    /**
     * El contrato abstracto Cast requiere prepare(), incluso si no se usa.
     * @param actor - el actor a preparar
     * @returns el actor preparado
     */
    prepare(actor: Actor): Actor {
        return actor;
    }

    /**
     * Crea un nuevo Actor con su propio contexto y página de Playwright,
     * y le da la habilidad de navegar por la web.
     * @param nombre - nombre del actor
     * @returns Promise que resuelve al actor creado
     */
    async actorNamed(nombre: string): Promise<Actor> {
        // Opción 1: Si BrowseTheWebWithPlaywright.using() espera un Browser
        return new Actor(nombre, this.escenario).whoCan(
            BrowseTheWebWithPlaywright.using(this.navegador)
        );
        
        // Opción 2: Si BrowseTheWebWithPlaywright.using() espera una Page (comentado)
        // const contexto = await this.navegador.newContext();
        // const pagina = await contexto.newPage();
        // return new Actor(nombre, this.escenario).whoCan(
        //     BrowseTheWebWithPlaywright.using(pagina)
        // );
    }

    /**
     * Cierra el navegador y limpia recursos
     */
    async cerrar(): Promise<void> {
        if (this.navegador) {
            await this.navegador.close();
        }
    }
}

/**
 * Alias para mantener compatibilidad con el nombre en inglés
 * @deprecated Usar ElencoEstandar en su lugar
 */
export const StandardCast = ElencoEstandar;