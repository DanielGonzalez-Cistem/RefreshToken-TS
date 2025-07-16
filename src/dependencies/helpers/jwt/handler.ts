import { sign, SignOptions, verify } from 'jsonwebtoken';

import { secretEnvs, timeEnvs } from '@env/handler';

/**
 * Función que genera un nuevo JWT.
 * 
 * @function
 * @name generateToken
 * @param args Argumentos de función.
 * @returns token
 */
export const generateToken = ( args: IGenerateToken ): string => {

    const { 
        origin,
        payload,
        signToken,
        typeExpires,
        typeToken = 'GENERIC'
    } = args;

    const repositoryExpires = {
        ACCESS_TOKEN: timeEnvs.JWT_ACCESS_EXPIRES,
        // LINK: '',
        REFRESH_TOKEN: timeEnvs.JWT_REFRESH_EXPIRES,
    }

    const token = sign(
        {
            origin,
            typeToken,
            ...payload
        },
        signToken,
        {
            expiresIn: repositoryExpires[typeExpires]
        } as SignOptions
    );

    return token;

}