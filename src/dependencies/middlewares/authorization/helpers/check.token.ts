import { Exception } from '@errors/exception.error';
import { secretEnvs } from '@env/handler';
import { verifyToken } from '@helpers/jwt/handler';

import { ICheckToken, ICheckTokenOutput } from '../interfaces/authorization.interface';

/**
 * Función para verificar la integridad de un token.
 * 
 * @function
 * @name checkToken
 * @param args Argumentos de función.
 * @returns Propiedades de token
 */
export const checkToken = async ( args: ICheckToken ): Promise<ICheckTokenOutput> => {

    const { bearerToken, typeToken } = args;

    //* Verificar si se ha recibido un BEARER TOKEN
    if ( bearerToken === undefined ) throw new Exception({ 
        type: 'MISSING_TOKEN',
        message: 'Ausencia de token a verificar',
        details: {
            redirect_user: true
        } 
    });

    /**
     * Asignación de token de autorización desde el encabezado de una petición.
     */
    const token: string = bearerToken!.split(" ")[1];

    //* Verificación de token
    const payloadToken = verifyToken({
        signToken: typeToken === 'ACCESS_TOKEN' ? secretEnvs.JWT_ACCESS_SECRET : secretEnvs.JWT_REFRESH_SECRET,
        token,
        typeToken
    });

    //* Verificar si el origen del token es correcto
    if (payloadToken?.origin !== 'LOGIN') {
        throw new Exception({ type: 'INVALID_TRANSACTION' });
    }

    return {
        idUser: payloadToken?.idUser!,
        token
    };

}