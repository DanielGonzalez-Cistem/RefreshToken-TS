import { Request, Response, NextFunction } from 'express';

import { statusCode } from '@utils/status_code/handler';

import { LogoutService } from '../services/logout.service';

/**
 * Controlador que coordina la finalización de sesión de usuario.
 * 
 * @function
 * @name LogoutController
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns {Promise<void>} Promesa que resuelve la finalización de sesión de usuario.
*/
export const LogoutController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    console.log('USER: ', req.user?.idSession!);
    
    /**
     * Integración de servicio.
     */
    const isOk = await LogoutService({
        data: {
            idSession: req.user?.idSession!
        }
    });

    if ( isOk ) {
        res.status(statusCode.OK);
        res.json({
            status_code: statusCode.OK,
            success: true,
            response: null
        });
        res.end();
    }

}