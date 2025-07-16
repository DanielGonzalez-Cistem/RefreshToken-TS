import { Request, Response, NextFunction } from 'express';

import { statusCode } from '@utils/status_code/handler';

import { LoginService } from '../services/login.service';

/**
 * Controlador que coordina la autenticación de usuario.
 * 
 * @function
 * @name LoginController
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns {Promise<void>} Promesa que resuelve la autenticación de usuario.
*/
export const LoginController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const tokens = await LoginService({
        data: {
            email: req.body.email,
            password: req.body.password
        }
    });

    res.status(statusCode.CREATED);
    res.json({
        status_code: statusCode.CREATED,
        success: true,
        response: tokens
    });
    res.end();

}