import { Request, Response, NextFunction } from 'express';

import { statusCode } from '@utils/status_code/handler';

import { AddUserService } from '../services/add.user.service';

/**
 * Controlador que coordina el controlador para agregar usuario.
 * 
 * @function
 * @name AddUserController
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns {Promise<void>} Promesa que resuelve el controlador para agregar usuario.
*/
export const AddUserController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const user = await AddUserService({
        data: {  
            email: req.body.email,
            password: req.body.password
        }
    });

    res.status(statusCode.CREATED);
    res.json({
        status_code: statusCode.CREATED,
        success: true,
        response: user
    });
    res.end();

}