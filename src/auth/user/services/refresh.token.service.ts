import { models } from '@db/repository.models';
import { secretEnvs, timeEnvs } from '@env/handler';
import { generateToken } from '@helpers/jwt/handler';
import { formatDateWithTimeZone } from '@utils/formatters/time/handler';
import { applyParseMilliseconds } from '@utils/parsings/apply.parse.milliseconds';

import { IRefreshToken } from '../interfaces/refresh.token.interface';

/**
 * Servicio que gestiona la sesión y autenticación de usuario.
 * 
 * @function
 * @name RefreshTokenService
 * @param args Argumentos de función.
 * @returns Tokens de autenticación.
 */
export const RefreshTokenService = async ( args: IGDTO<IRefreshToken> ) => {

    const { data } = args;
    const { Session } = models;

    //? Generación de token de acceso
    const accessToken = generateToken({
        origin: 'LOGIN',
        payload: { idUser: data.idUser },
        signToken: secretEnvs.JWT_ACCESS_SECRET,
        typeExpires: 'ACCESS_TOKEN',
        typeToken: 'ACCESS_TOKEN'
    });

    //? Generación de token de refresco
    const refreshToken = generateToken({
        origin: 'LOGIN',
        payload: { idUser: data.idUser },
        signToken: secretEnvs.JWT_REFRESH_SECRET,
        typeExpires: 'REFRESH_TOKEN',
        typeToken: 'REFRESH_TOKEN'
    });

    //* Generar sesión de usuario
    const dateExpirationAccessToken: Date = new Date(Date.now() + applyParseMilliseconds(timeEnvs.JWT_ACCESS_EXPIRES));
    const dateExpirationRefreshToken: Date = new Date(Date.now() + applyParseMilliseconds(timeEnvs.JWT_REFRESH_EXPIRES));

    await Session.update(
        {
            accessToken,
            refreshToken,
            dateExpirationAccessToken: formatDateWithTimeZone(dateExpirationAccessToken.getTime())!,
            dateExpirationRefreshToken: formatDateWithTimeZone(dateExpirationRefreshToken.getTime())!
        },
        {
            where: {
                idSession: data.idSession,
                idUser: data.idUser
            }
        });

    return {
        accessToken,
        refreshToken
    };

};