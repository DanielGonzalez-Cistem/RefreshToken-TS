import { Exception } from "@errors/exception.error";

/**
 * Función que gestiona los errores en un JWT.
 * 
 * @function
 * @name JWTErrorHanlder
 * @param typeError Tipo de error.
 * @param typeToken Tipo de token.
 */
export const JWTErrorHanlder = (typeError: string, typeToken: TGToken) => {

    /**
     * Bandera que indica si el token un error.
     */
    const isTokenError = typeError === 'JsonWebTokenError';
    
    if ( isTokenError ) {
        throw new Exception({
            type: 'INVALID_TOKEN',
            message: typeToken === 'ACCESS_TOKEN' ? 'El token de acceso no es válido' : 'El token de refresco no es válido',
            details: {
                redirect_user: true,
            }
        });
    }

    /**
     * Bandera que indica si el token ha expirado.
     */
    const isTokenExpired = typeError === 'TokenExpiredError';

    if ( isTokenExpired ) {
        throw new Exception({
            type: 'EXPIRED_TOKEN',
            message: typeToken === 'ACCESS_TOKEN' ? 'El token de acceso ha expirado' : 'El token de refresco ha expirado',
            details: {
                is_token_login: true,
                access_token_expired: true,
                refresh_token_expired: typeToken === 'ACCESS_TOKEN' ? false : true
            }
        });
    }

}