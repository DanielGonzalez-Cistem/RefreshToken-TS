import { Request, Response, NextFunction } from 'express';

import { LoginController } from './login.controller';
import { RefreshTokenController } from './refresh.token.controller';

/**
  * Definición de tipos de controladores.
 */
type TypeControllers = 
  'login'         |
  'refreshToken' 
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
    refreshToken: RefreshTokenController
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