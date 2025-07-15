import { Router } from 'express';
import { repositoryControllers } from './controllers/repository';

import { addUserRule } from './rules/add.user.rule';

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
        addUser: '/user'
    };

    /**
     * * Servicio que agrega un nuevo usuario.  
     * 
     * @function
     * @name POST /user
     * @path {POST} /user
     * @memberof userRouter
    */
    userRouter.post(
        paths.addUser,
        addUserRule,
        repositoryControllers('addUser')
    );

    return userRouter;

}