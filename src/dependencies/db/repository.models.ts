import { Sequelize } from 'sequelize';

import { dbConnection } from './config/connection';

import { Session } from './session/session.model';
import { Status } from './status/status.model';
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
    Session.initModel(sequelize);
    Status.initModel(sequelize);
    User.initModel(sequelize);
    
    //? Relaciones SQL
    User.hasOne(Status, { foreignKey: 'idStatus', as: 'statusDetail' });
    Status.belongsTo(User, { foreignKey: 'idStatus', as: 'userDetail' });

    Session.hasOne(User, { foreignKey: 'idUser', as: 'userDetail' });
    User.belongsTo(Session, { foreignKey: 'idUser', as: 'sessionDetail' });

    return {
        Session,
        Status,
        User,
    }

}

/**
 * Centralización de modelos.
 */
export const models = repositoryModels();