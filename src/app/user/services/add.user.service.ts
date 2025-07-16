import { IBaseUser } from '@interfaces/user.interface';
import { models } from '@db/repository.models';

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

    const { User } = models;

    const results = await User.findAll();
    console.log('results: ', JSON.parse(JSON.stringify(results)));


    return {
        id_user: 100
    };

}