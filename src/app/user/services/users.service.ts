import { models } from '@db/repository.models';
import { IBaseStatus } from '@interfaces/status.interface';
import { IBaseUser } from '@interfaces/user.interface';

/**
 * Servicio que gestiona la consulta de usuarios.
 * 
 * @function
 * @name UsersService
 * @returns 
 */
export const UsersService = async () => {

    const { Status, User } = models;
    
    //* Consultar usuarios
    try {
        const users = await User.findAll({
            attributes: ['idUser', 'email'] as (keyof IBaseUser)[],
            include: [
                { 
                    model: Status, 
                    as: 'statusDetail',
                    attributes: ['idStatus', 'name'] as (keyof IBaseStatus)[]
                }
            ]
        });
    
        return users;

    } catch (error) {
        console.log('error: ', error);
    }

}