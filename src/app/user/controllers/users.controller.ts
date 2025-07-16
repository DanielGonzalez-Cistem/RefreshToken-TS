import { Request, Response, NextFunction } from 'express';

import { statusCode } from '@utils/status_code/handler';

import { UsersService } from '../services/users.service';

/**
 * Controlador que coordina la consulta de usuarios.
 * 
 * @function
 * @name UsersController
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns {Promise<void>} Promesa que resuelve la consulta de usuarios.
*/
export const UsersController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const users = await UsersService();

    res.status(statusCode.OK);
    res.json({
        status_code: statusCode.OK,
        success: true,
        response: users
    });
    res.end();

}