import { NextFunction, Request, Response } from "express";

import { rootEnvs } from '@env/handler';
import { errorLogging } from '@helpers/logger/error.logging';
import { errorScheme } from '@utils/schemes/error.scheme';

import { Exception } from './exception.error';

/**
 * Middleware que coordina el manejador de errores de la aplicación.
 * 
 * @function
 * @name ErrorHandler
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
*/
export const ErrorHandler = (error: IGErrorJS, req: Request, res: Response, next: NextFunction): void => {

    if ( rootEnvs.ENABLE_SHOW_ERROR === "YES" ) {
        console.log('❌ ERROR_HANDLER: ', {
            name: error.name,
            stack: error.stack,
            type: error.type,
            message: error.message,
            error_config: error.errorConfig,       
        });
    }

    /**
     * Asignación del error capturado en el manejador.
     */
    let errorCaught: any = {};

    /**
     * Centralización de errores controlados hasta el momento.
     */
    const repositoryErrors = {
        haveErrorDb: error.name.includes('Sequelize'),
        haveErrorJSON: error.name === 'SyntaxError' && error.type === 'entity.parse.failed',
        haveCustomError: error.errorConfig !== undefined && error.errorConfig!.type in errorScheme,
    }

    /**
     * Fabrica de errores para trabajar dinámicamente con los errores detectados.
     */
    const errorsFactory: IGErrorsFactory[] = [
        {  
            condition: repositoryErrors.haveCustomError,
            handler: ( err: IGErrorJS ) => errorScheme[error.errorConfig!.type](err.errorConfig!)
        },
        {  
            condition: repositoryErrors.haveErrorDb,
            handler: ( err: IGErrorJS ) => DbError(err.message)
        },
        {  
            condition: repositoryErrors.haveErrorJSON,
            handler: ( err: IGErrorJS ) => JsonContentError(err.message)
        }
    ];

    //? --- Evaluación para captura de errores ---
    const errorFound: IGErrorsFactory|undefined = errorsFactory.find(item => item.condition);

    if ( errorFound ) {
        errorCaught = errorFound!.handler(error);
    } else {
        errorCaught = ServerError({
            name: error.name,
            message: error.message,
            stack: error.stack
        }); 

        errorLogging(error); //? Registro de error en bitácora de errores
    }

    res.status(errorCaught.status_code || 500);
    res.json(errorCaught || {});
    res.end();

}

/**
 * Error personalizado que controla las excepciones relacionadas a base de datos.
 * 
 * @function
 * @name DbError
 * @param error - Descripción del error.
 * @returns Esquema de error
 */
export const DbError = ( error: string ) => errorScheme.DB_CONFLICT({ type: 'DB_CONFLICT', message: error });

/**
 * Error personalizado que controla las excepciones relacionadas a base de datos.
 * 
 * @function
 * @name NotFound
 * @param req - Propiedades de solicitud HTTP.
 * @param res - Propiedades de respuesta HTTP.
 * @param next - Continuación de flujo.
 * 
 * @returns Esquema de error
*/
export const NotFound = (req: Request, res: Response, next: NextFunction) => next(new Exception({ type: 'SERVICE_NOT_FOUND', message: req.url }));

/**
 * Error personalizado que controla las excepciones relacionadas a un JSON no válido.
 * 
 * @function
 * @name JsonContentError
 * @param error - Descripción del error.
 * @returns Esquema de error
*/
export const JsonContentError = ( error: string ) => errorScheme.INVALID_JSON_BODY({ type: 'INVALID_JSON_BODY', message: error });

/**
 * Error personalizado que controla las excepciones relacionadas a servidor.
 * 
 * @function
 * @name ServerError
 * @param error - Stack del error generado.
 * @returns Esquema de error
 */
export const ServerError = ( error: IGErrorJS ) => errorScheme.SERVER_ERROR({
    type: 'SERVER_ERROR',
    details: {
        error_name: error.name || '', 
        error_message: error.message || '', 
        error_stack: error.stack || '' 
    }
});