import { Request, Response, NextFunction } from 'express';

import { checkToken } from './helpers/checkToken';

/**
 * Middleware que verifica la autorización de un usuario.
 * 
 * @function
 * @name accessAuthorization
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 */
export const accessAuthorization = async (req: Request, res: Response, next: NextFunction) => {

    /**
     * Inicialización de token extraída de la petición.
     */
    const bearerToken: string|undefined = req.headers.authorization;

    //* Verificar estructura de token
    await checkToken({ bearerToken, typeToken: 'ACCESS_TOKEN' });


    //TODO: Realizar verificación de token (o tokens)
    //TODO: Realizar verificación de usuario (si es activo, bloqueado, cuenta con perfil o lo que sea necesario)
    //TODO: Realizar verificación de sesión

    //TODO: Inyectar propiedades de usuario (los que sean necesario)
    //TODO: Inyectar propiedades adicionales (permisos, clientes, etc)

    next();

}