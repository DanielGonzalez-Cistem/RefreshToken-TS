import { Router } from 'express';

import { WelcomeRouter } from './welcome/router';

/**
 * Definición de tipos de enrutadores.
 */
type TypeRouters = 
    'welcome'                 
;

/**
 * Definición dinámica de los enrutadores en el servidor **App**.
 */
type TypeAppRouters = {
    [K in TypeRouters]: Router;
}

/**
 * Centralización de enrutadores del servidor **App**.
 */
const routers: TypeAppRouters = {
    welcome: WelcomeRouter()
}

/**
 * Centralización de enrutadores del servidor **App**.
 * 
 * @function
 * @name repositoryRouters
 * @param router - Nombre de enrutador a invocar.
 * @returns Enrutador
 */
export const repositoryRouters = ( router: TypeRouters ) => routers[router];