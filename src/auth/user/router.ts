import { Router } from 'express';

import { refreshAuthorization } from '@middlewares/authorization/refresh.authorization';

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
        login: '/login',
        logout: '/logout',
        refreshToken: '/refresh_token'
    };

    /**
     * * Servicio que realiza la autenticación de usuario.
     * 
     * @function
     * @name POST /login
     * @path {POST} /login
     * @memberof userRouter
    */
    userRouter.post(
        paths.login,
        loginRule,
        repositoryControllers('login')
    );

    /**
     * * Servicio que realiza la finalización de usuario.
     * 
     * @function
     * @name POST /logout
     * @path {POST} /logout
     * @memberof userRouter
    */
    userRouter.delete(
        paths.logout,
        refreshAuthorization,
        repositoryControllers('logout')
    );

    /**
     * * Servicio que realiza el refresco de tokens de autenticación.
     * 
     * @function
     * @name POST /refresh_token
     * @path {POST} /refresh_token
     * @memberof userRouter
    */
    userRouter.post(
        paths.refreshToken,
        refreshAuthorization,
        repositoryControllers('refreshToken')
    );

    return userRouter;

}