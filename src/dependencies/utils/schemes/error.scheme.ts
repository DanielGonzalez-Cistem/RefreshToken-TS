import { rootEnvs } from '@env/handler';
import { statusCode } from '@utils/status_code/handler';

/**
 * Centralización de esquema de errores en la aplicación.
 */
export const errorScheme: Record<TGErrors, TGErrorFactory> = {
    SERVER_ERROR: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.INTERNAL_SERVER_ERROR,
            error: {
                code: 'B01',
                message: 'Opp... hemos recibido un error desconocido',
                details: {
                    error_message: errorConfig.details?.error_message,
                    error_name: errorConfig.details?.error_name,
                    error_stack: rootEnvs.NODE_ENV === 'development' ? errorConfig.details?.error_stack : 'Stack de error no disponible en ambiente de producción'

                }
            }
        }
    },
    SERVICE_NOT_FOUND: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.NOT_FOUND,
            error: {
                code: 'B02',
                message: `El servicio '${errorConfig.message}' que intenta consultar no esta disponible`,
                details: null
            }
        }
    },
    INVALID_JSON_BODY: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B03',
                message: `ERROR_JSON_CONTENT: ${errorConfig.message}`,
                details: null
            }
        }
    },
    EXPIRED_TOKEN: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B04',
                message: `El token proporcionado ha expirado`,
                details: {
                    is_token_login: errorConfig.details?.is_token_login || false
                }
            }
        }
    },
    INVALID_TOKEN: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B05',
                message: `El token proporcionado no es válido`,
                details: {
                    redirect_user: errorConfig.details?.redirect_user || false
                }
            }
        }
    },
    MISSING_TOKEN: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B06',
                message: `${errorConfig.message}`,
                details: {
                    redirect_user: errorConfig.details?.redirect_user || false
                }
            }
        }
    },
    INVALID_TRANSACTION: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B07',
                message: 'La transacción del token proporcionado no es válido',
                details: null
            }
        }
    },
    FORM_ERROR: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.BAD_REQUEST,
            error: {
                code: 'B08',
                message: `${errorConfig.message}`,
                details: null
            }
        }
    },
    EMPTY_FORM: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B09',
                message: 'No se detectaron cambios en el formulario',
                details: null
            }
        }
    },
    STATUS_CONFLICT: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B10',
                message: `${errorConfig.message}`,
                details: {
                    redirect_user: errorConfig.details?.redirect_user || false
                }
            }
        }
    },
    EXIST_CONFLICT: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B11',
                message: `${errorConfig.message}`,
                details: null
            }
        }
    },
    DUPLICATED_CONFLICT: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.CONFLICT,
            error: {
                code: 'B12',
                message: `${errorConfig.message}`,
                details: null
            }
        }
    },
    TIME_WAIT_CONFLICT: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.BAD_REQUEST,
            error: {
                code: 'B13',
                message: `Hemos detectado que existe una solicitud en curso, favor de intentar después de`,
                details: {
                    waiting_time: errorConfig.details?.waiting_time
                }
            }
        }
    },
    AUTHENTICATION_ERROR: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B14',
                message: `La autenticación no pudo realizarse exitosamente`,
                details: null
            }
        }
    },
    BLOCKED_USER: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B15',
                message: `El usuario se encuentra bloqueado`,
                details: {
                    is_login: errorConfig.details?.is_login || false,
                    unlock_date: errorConfig.details?.unlock_date
                }
            }
        }
    },
    VERIFY_CONFLICT: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B16',
                message: `${errorConfig.message}`,
                details: {
                    is_user_pending: errorConfig.details?.is_user_pending || false
                }
            }
        }
    },
    SESSION_CONFLICT: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B17',
                message: `${errorConfig.message}`,
                details: null
            }
        }
    },
    AUTO_USER_CONFLICT: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.UNAUTHORIZED,
            error: {
                code: 'B18',
                message: `${errorConfig.message}`,
                details: null
            }
        }
    },
    DB_CONFLICT: ( errorConfig: IGErrorConfig ) => {
        return {
            success: false,
            status_code: statusCode.INTERNAL_SERVER_ERROR,
            error: {
                code: 'B19',
                message: `ERROR_DATABASE: ${errorConfig.message}`,
                details: null
            }
        }
    },
}