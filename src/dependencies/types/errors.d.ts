/**
 * Archivo global para definir propiedades de error en la aplicación.
 */
declare global {

    /**
     * Interfaz global que define la construcción de un error.
     */
    interface IGErrorConfig {
        type: TGErrors,
        message?: string|null;
        details?: IGErrorDetails|null;
    }

    /**
     * Interfaz global que define la salida de un error.
     */
    interface IGOutputError {
        success: boolean;
        status_code: number;
        error: {
            code: string;
            message: string|null;
            details?: IGErrorDetails|null
        }
    }

    /**
     * Interfaz global que define los posibles detalles de un error.
     */
    interface IGErrorDetails {
        error_message?: string|null;
        error_name?: string|null;
        error_stack?: string|null;
        is_login?: boolean;
        is_token_login?: boolean;
        is_user_pending?: boolean;
        redirect_user?: boolean;
        unlock_date?: Date|null;
        waiting_time?: Date|null;
    }
    
    /**
     * Interfaz global que define la intergración de propiedades del esquema de errores.
     */
    interface IGErrorScheme {
        [key: TGErrors]: ( errorConfig: IGErrorConfig ) => IGOutputError;
    }

    /**
     * Interfaz global que define las propiedades para una fabrica de errores.
     */
    interface IGErrorsFactory {
        condition: boolean;
        handler: ( error: any ) => any;
    }

    /**
     * Tipado global que define el tipado de retorno
     */
    type TGErrorFactory = ( errorConfig: IGErrorConfig ) => IGOutputError;

    /**
     * Tipado global de errores.
     */
    type TGErrors = 
        'AUTHENTICATION_ERROR'  |
        'AUTO_USER_CONFLICT'    |
        'BLOCKED_USER'          |
        'DB_CONFLICT'           |
        'DUPLICATED_CONFLICT'   |
        'EMPTY_FORM'            | 
        'EXIST_CONFLICT'        |
        'EXPIRED_TOKEN'         |
        'FORM_ERROR'            |
        'INVALID_JSON_BODY'     |
        'INVALID_TOKEN'         |
        'INVALID_TRANSACTION'   |
        'MISSING_TOKEN'         |
        'SERVER_ERROR'          |
        'SERVICE_NOT_FOUND'     |
        'SESSION_CONFLICT'      |
        'STATUS_CONFLICT'       |
        'TIME_WAIT_CONFLICT'    |
        'VERIFY_CONFLICT'       
    ;

}

export {}