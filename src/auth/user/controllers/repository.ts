import { Request, Response, NextFunction } from 'express';

import { LoginController } from './login.controller';

/**
  * Definición de tipos de controladores.
 */
type TypeControllers = 
    'login' 
;

/**
  * Definición dinámica de los controladores en **Usuario**.
 */
type TypeAppControllers = {
    [K in TypeControllers]: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

/**
  * Centralización de controladores de **Usuario**.
 */
const controllers: TypeAppControllers = {
    login: LoginController,
}

/**
  * Centralización de enritadores de **Usuario**.
  * 
  * @function
  * @name repositoryRouters
  * @param controller - Nombre de controlador a invocar.
  * @returns Controlador
 */
export const repositoryControllers = ( controller: TypeControllers ) => controllers[controller];