import { models } from '@db/repository.models';
import { secretEnvs, timeEnvs } from '@env/handler';
import { Exception } from '@errors/exception.error';
import { generateToken } from '@helpers/jwt/handler';
import { verifyHashing } from '@helpers/hashing/handler';
import { IBaseUser } from '@interfaces/user.interface';
import { IBaseSesion } from '@interfaces/session.interface';
import { formatDateWithTimeZone } from '@utils/formatters/time/handler';
import { applyParseMilliseconds } from '@utils/parsings/apply.parse.milliseconds';

import { ILogout } from '../interfaces/logout.interface';

/**
 * Servicio que gestiona la finalización de sesión de usuario.
 * 
 * @function
 * @name LogoutService
 * @param args Argumentos de función.
 * @returns Tokens de autenticación.
 */
export const LogoutService = async ( args: IGDTO<ILogout> ): Promise<boolean> => {

    const { data } = args;
    const { Session } = models;

    //? Consultar sesión
    const currentSession = await Session.findOne({
        attributes: ['idSession'] as (keyof IBaseSesion)[],
        where: {
            idSession: data.idSession
        }
    });

    //* Verificar si hay una sesión activa
    if ( currentSession === null ) {
        throw new Exception({
            type: 'SESSION_CONFLICT',
            message: 'No se ha encontrado una sesión activa'
        });
    }

    await Session.destroy({
        where: {
            idSession: data.idSession
        }
    });

    return true;    

};