import { sign, SignOptions, verify } from 'jsonwebtoken';

import { expiresScheme } from './utils/expires.scheme';
import { JWTErrorHanlder } from './helpers/jwt.error.handler';

/**
 * Función que genera un nuevo JWT.
 * 
 * @function
 * @name generateToken
 * @param args Argumentos de función.
 * @returns token
 */
export const generateToken = ( args: IGGenerateToken ): string => {

    const { 
        origin,
        payload,
        signToken,
        typeExpires,
        typeToken = 'GENERIC'
    } = args;

    const token = sign(
        {
            origin,
            typeToken,
            ...payload
        },
        signToken,
        {
            expiresIn: expiresScheme[typeExpires]
        } as SignOptions
    );

    return token;

}

/**
 * Función que verificar la integridad de un token.
 * 
 * @function
 * @name verifyToken
 * @param args Argumentos de función.
 */
export const verifyToken = ( args: IGVerifyToken ) => {
    
    const { signToken, token, typeToken } = args;

    try {
        
        //* Decodificación de token en caso de ser correcto
        const JWTDecoded = verify(token, signToken) as IGJWTDecoded;
        console.log('JWTDecoded: ', JWTDecoded);

        return {
            idUser: JWTDecoded.idUser
        };

    } catch (error: any) {
        
        JWTErrorHanlder(error.name, typeToken);

    }

}