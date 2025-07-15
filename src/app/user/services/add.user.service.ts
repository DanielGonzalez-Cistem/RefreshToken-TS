import { IBaseUser } from '@interfaces/user.interface';

/**
 * Servicio que gestiona el registro de usuario.
 * 
 * @function
 * @name AddUserService
 * @param args Argumentos de función.
 * @returns 
 */
export const AddUserService = async ( args: IGDTO<IBaseUser> ) => {

    console.log('ARGS: ', args);

    return {
        id_user: 100
    };

}