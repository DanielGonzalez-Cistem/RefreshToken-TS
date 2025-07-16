import { models } from '@db/repository.models';
import { secretEnvs, timeEnvs } from '@env/handler';
import { Exception } from '@errors/exception.error';
import { generateToken } from '@helpers/jwt/handler';
import { verifyHashing } from '@helpers/hashing/handler';
import { IBaseUser } from '@interfaces/user.interface';
import { formatDateWithTimeZone } from '@utils/formatters/time/handler';
import { applyParseMilliseconds } from '@utils/parsings/apply.parse.milliseconds';

/**
 * Servicio que gestiona la sesión y autenticación de usuario.
 * 
 * @function
 * @name LoginService
 * @param args Argumentos de función.
 * @returns Tokens de autenticación.
 */
export const LoginService = async ( args: IGDTO<IBaseUser> ) => {

    const { data } = args;
    const { Session, User } = models;

    //* Verificamos si el usuario existe
    const user = await User.findOne({
        attributes: ['idUser', 'email', 'password'] as (keyof IBaseUser)[],
        where: { email: data.email }
    });
    if ( user === null ) throw new Exception({ type: 'AUTHENTICATION_ERROR' });

    //* Verificación de contraseña
    const password: string = data.password + secretEnvs.PWD_SECRET;
    const isPassword: boolean = await verifyHashing(password, user.password);
    if ( !isPassword ) throw new Exception({ type: 'AUTHENTICATION_ERROR' });

    //? Generación de token de acceso
    const accessToken = generateToken({
        origin: 'LOGIN',
        payload: { idUser: user.idUser },
        signToken: secretEnvs.JWT_ACCESS_SECRET,
        typeExpires: 'ACCESS_TOKEN',
        typeToken: 'ACCESS_TOKEN'
    });

    //? Generación de token de refresco
    const refreshToken = generateToken({
        origin: 'LOGIN',
        payload: { idUser: user.idUser },
        signToken: secretEnvs.JWT_REFRESH_SECRET,
        typeExpires: 'REFRESH_TOKEN',
        typeToken: 'REFRESH_TOKEN'
    });

    //* Generar sesión de usuario
    const dateExpirationAccessToken: Date = new Date(Date.now() + applyParseMilliseconds(timeEnvs.JWT_ACCESS_EXPIRES));
    const dateExpirationRefreshToken: Date = new Date(Date.now() + applyParseMilliseconds(timeEnvs.JWT_REFRESH_EXPIRES));

    await Session.create({
        idUser: user.idUser!,
        accessToken,
        refreshToken,
        dateExpirationAccessToken: formatDateWithTimeZone(dateExpirationAccessToken.getTime())!,
        dateExpirationRefreshToken: formatDateWithTimeZone(dateExpirationRefreshToken.getTime())!
    });

    return {
        accessToken,
        refreshToken
    };
};