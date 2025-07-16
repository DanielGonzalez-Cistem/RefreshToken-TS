import { models } from '@db/repository.models';
import { secretEnvs } from '@env/handler';
import { IBaseUser } from '@interfaces/user.interface';
import { applyHashing } from '@helpers/hashing/handler';

/**
 * Servicio que gestiona el registro de usuario.
 * 
 * @function
 * @name AddUserService
 * @param args Argumentos de función.
 * @returns 
 */
export const AddUserService = async ( args: IGDTO<IBaseUser> ) => {

    const { User } = models;
    const { data, options } = args;

    //? Formular contraseña con algoritmo de hasheo
    const passwordHasing = await applyHashing(data.password + secretEnvs.PWD_SECRET);
    
    //* Registrar nuevo usuario
    const user = await User.create({
        email: data.email,
        password: passwordHasing,
        lastPasswords: JSON.stringify({
            passwords: [passwordHasing]
        })
    });

    return {
        id_user: user.idUser
    };

}