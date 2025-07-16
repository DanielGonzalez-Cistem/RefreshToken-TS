import { models } from '@db/repository.models';
import { IBaseUser } from '@interfaces/user.interface';
import { secretEnvs, timeEnvs } from '@env/handler';
import { generateToken } from '@helpers/jwt/handler';
import { Exception } from '@errors/exception.error';
import { verifyHashing } from '@helpers/hashing/handler';

/**
 * Servicio que gestiona la sesión y autenticación de usuario.
 * 
 * @function
 * @name LoginService
 * @param args Argumentos de función.
 * @returns Tokens de autenticación.
 */
export const LoginService = async ( args: IGDTO<IBaseUser> ) => {

    console.log('ARGS: ', args);
    const { data } = args;
    const { User } = models;

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

    console.log('OK...');

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

    return {
        accessToken,
        refreshToken
    };
};