import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { Exception } from '@errors/exception.error';

/**
 * Función que procesa las reglas.
 * 
 * @function
 * @name validateRules
 * @see {@link https://express-validator.github.io/docs/|**Documentación Express Validator**}
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns Ejecución de validador Express-Validator.
*/
export const validateRules = (req: Request, res: Response, next: NextFunction) => {

    /**
     * Asignación de los errores detectados en la validación.
     */
    const errors = validationResult(req);

    if ( !errors.isEmpty() ) {
        const firstErrors = errors.array()[0];
        return next( new Exception({ type: 'FORM_ERROR', message: firstErrors.msg }) );
    }

    next();
}