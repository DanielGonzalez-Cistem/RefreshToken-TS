import { Request, Response, NextFunction } from 'express';

import { checkSession } from './helpers/check.session';
import { checkToken } from './helpers/check.token';
import { checkUser } from './helpers/check.user';

/**
 * Middleware que verifica la autorización de token de refresco.
 * 
 * @function
 * @name refreshAuthorization
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 */
export const refreshAuthorization = async (req: Request, res: Response, next: NextFunction) => {

    /**
     * Inicialización de token extraída de la petición.
     */
    const bearerToken: string|undefined = req.headers.authorization;

    //* Verificar estructura de token
    const { idUser, token } = await checkToken({ bearerToken, typeToken: 'REFRESH_TOKEN' });

    //* Verificar integridad de usuario
    const { email } = await checkUser( idUser );
    
    //* Realizar verificación de sesión
    const { idSession } = await checkSession({ idUser, token, typeToken: 'REFRESH_TOKEN' });

    //* Inyectar propiedades de usuario (los que sean necesario)
    req.user = {
        email,
        idSession,
        idUser,
        origin: 'LOGIN',
        token
    }

    //TODO: Inyectar propiedades adicionales (permisos, clientes, etc)

    next();

}