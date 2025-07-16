import { Sequelize } from 'sequelize';

import { dbConnection } from './config/connection';

import { User } from './user/user.model';

/**
 * Función que centraliza
 * 
 * @function
 * @name repositoryModels
 * @returns Modelos de base de datos.
 */
const repositoryModels = () => {
    
    /**
     * Inicialización de conexión a base de datos.
     */
    const sequelize = dbConnection();
    
    //? Inicialización de modelos
    User.initModel(sequelize);

    //? Relaciones SQL

    return {
        User,
    }

}

/**
 * Centralización de modelos.
 */
export const models = repositoryModels();