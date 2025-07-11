import { Request, Response, NextFunction } from 'express';

import { WelcomeController } from './welcome.controller';

/**
 * Difinición de tipos de controladores.
 */
type TypeControllers = 'welcome';

/**
 * Definición dinámica de los controladores en el espacio de trabajo **Welcome**.
 */
type TypeAppControllers = {
    [K in TypeControllers]: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

/**
 * Centralización de enrutadores del servidor **App**.
 */
const controllers: TypeAppControllers = {
    welcome: WelcomeController
}

/**
 * Centralización de controladores de la sección **Welcome**.
 * 
 * @function
 * @name repositoryControllers
 * @param controller - Nombre de controlador a invocar.
 * @returns Controlador
 */
export const repositoryControllers = ( controller: TypeControllers ) => controllers[controller];