import { models } from '@db/repository.models';
import { Exception } from '@errors/exception.error';
import { IBaseUser } from '@interfaces/user.interface';
import { bold } from '@utils/bold/handler';

import { ICheckUserOutput } from '../interfaces/authorization.interface';

/**
 * Función para verificar la integridad de un usuario.
 * 
 * @function
 * @name checkUser
 * @param args Argumentos de función.
 * @returns Propiedades de usuario.
 */
export const checkUser = async ( idUser: number ): Promise<ICheckUserOutput> => {

    const { User } = models;

    //? Consultar usuario
    const user = await User.findOne({
        attributes: ['idUser', 'email', 'status'] as (keyof IBaseUser)[],
        where: { idUser }
    });
    
    //* Verificar si el usuario existe
    if ( user === null ) {
        throw new Exception({
            type: 'EXIST_CONFLICT',
            message: `El usuario con ID ${bold(idUser)} no se encuentra disponible`,
            details: {
                redirect_user: true
            }
        });
    }

    //* Verificar si el usuario se encuentra ACTIVO
    if ( user.status !== 2) {
        throw new Exception({
            type: 'STATUS_CONFLICT',
            message: `El usuario al sistema solo esta habilitado para usuarios con estado ${bold('ACTIVO')}`
        });
    }

    return {
        email: user.email,
        idUser
    }

}