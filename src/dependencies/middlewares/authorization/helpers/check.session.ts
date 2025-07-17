import { models } from '@db/repository.models';
import { IBaseSesion } from '@interfaces/session.interface';

import { ICheckSession, ICheckSessionOutput } from '../interfaces/authorization.interface';
import { Exception } from '@errors/exception.error';

/**
 * Función para verificar si hay una sesión activa por parte del usuario.
 * 
 * @function
 * @name checkSession
 * @param args Argumentos de función.
 * @returns `true` si todo es correcto, `throw` si hay un error.
 */
export const checkSession = async ( args: ICheckSession ): Promise<ICheckSessionOutput> => {

    const { Session } = models;
    const { idUser, token, typeToken } = args;

    let querySession: any = { idUser }

    if ( typeToken === 'ACCESS_TOKEN' ) {
        querySession.accessToken = token
    } else {
        querySession.refreshToken = token
    }

    //? Consultar sesión
    const session = await Session.findOne({
        attributes: ['idSession'] as (keyof IBaseSesion)[],
        where: querySession
    });

    //* Evalúa si hay una sesión activa
    if ( session === null ) {
        throw new Exception({
            type: 'SESSION_CONFLICT',
            message: 'No se ha encontrado una sesión activa'
        });
    }

    return {
        idSession: session.idSession!
    };

}