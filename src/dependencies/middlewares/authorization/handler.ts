import { Request, Response, NextFunction } from 'express';

/**
 * Middleware que verifica la autorización de un usuario.
 * 
 * @function
 * @name authorizationUser
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 */
export const authorizationMiddleware = (req: Request, res: Response, next: NextFunction) => {

    //TODO: Realizar verificación de token (o tokens)
    //TODO: Realizar verificación de usuario (si es activo, bloqueado, cuenta con perfil o lo que sea necesario)

    //TODO: Inyectar propiedades de usuario (los que sean necesario)
    //TODO: Inyectar propiedades adicionales (permisos, clientes, etc)

    next();

}