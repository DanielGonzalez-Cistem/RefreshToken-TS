import { Request, Response, NextFunction } from 'express';

import { statusCode } from '@utils/status_code/handler';

import { RefreshTokenService } from '../services/refresh.token.service';

/**
 * Controlador que coordina el refresco de tokens de usuario.
 * 
 * @function
 * @name RefreshTokenController
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns {Promise<void>} Promesa que resuelve el refresco de tokens de usuario.
*/
export const RefreshTokenController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    //? Invocación de servicio
    const tokens = await RefreshTokenService({
        data: {
            idSession: req.user?.idSession!,
            idUser: req.user?.idUser!
        }
    })

    res.status(statusCode.CREATED);
    res.json({
        status_code: statusCode.CREATED,
        success: true,
        response: tokens
    });
    res.end();

}