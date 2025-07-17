import { Exception } from '@errors/exception.error';
import { verifyToken } from '@helpers/jwt/handler';

import { ICheckToken } from '../interfaces/authorization.interface';
import { secretEnvs } from '@env/handler';

/**
 * 
 * @param args Argumentos de función.
 */
export const checkToken = async ( args: ICheckToken ) => {

    const { bearerToken, typeToken } = args;

    console.log('ARGS: ', args);
    console.log('BEARER TOKEN: ', bearerToken);

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
    
    console.log('payloadToken: ', payloadToken);


}