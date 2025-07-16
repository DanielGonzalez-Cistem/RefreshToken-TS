import * as tedious from 'tedious';
import { dbEnvs, rootEnvs } from '@env/handler';
import { ISQLProps } from '../interfaces/connection.interface';

/**
 * Configuración de propiedades SQL para conexión a base de datos.
 */
export const sqlProps: ISQLProps = {
    dialect: 'mssql',
    dialectModule: tedious,
    dialectOptions: {
        options: {
            encrypt: dbEnvs.DB_ENABLE_ENCRYPT === 'YES',
            trustServerCertificate: dbEnvs.DB_ENABLE_TRUST_SERVER_CERTIFICATE === 'YES'
        }
    },
    host: dbEnvs.DB_SERVER,
    logging: ( log: string ) => {
        if ( dbEnvs.DB_ENABLE_LOGS === 'YES' ) {
            console.log('[SEQUELIZE]: ', log);
            console.log('');
            return;
        }
    },
    pool: {
        acquire: 30000,
        idle: 10000,
        max: 10,
        min: 1,
    },
    timezone: rootEnvs.TIMEZONE,
} 