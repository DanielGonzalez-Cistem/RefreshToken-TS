import { Router } from 'express';

import { repositoryControllers } from './controllers/repository';
import { loginRule } from './rules/login.rule';

/**
 * Enrutador que coordina los servicios de **Usuario**.
 * 
 * @function
 * @name UserRouter
 * @returns Enrutador
*/
export const UserRouter = (): Router => {

    /**
     * Instancia de enrutador.
    */
    const userRouter: Router = Router();

    /**
     * Centralización de rutas del enrutador **Usuario**.
    */
    const paths = {
        login: '/login'
        
    };

    /**
     * * Servicio que realiza la autenticación de usuario.
     * 
     * @function
     * @name GET /login
     * @path {GET} /login
     * @memberof userRouter
    */
    userRouter.post(
        paths.login,
        loginRule,
        repositoryControllers('login')
    );

    return userRouter;

}