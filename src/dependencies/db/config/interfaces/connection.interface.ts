import { Dialect } from "sequelize";;

/**
 * Interfaz que define las propiedades de conexión SQL.
 */
export interface ISQLProps {
    host: string|undefined;
    dialect: Dialect|undefined;
    dialectModule: object|undefined;
    port?: number;
    pool: IPoolProps;
    timezone: string;
    logging: ( log: string ) => void,
    dialectOptions: {
        options: IOptionProps
    }
}

/**
 * Interfaz que define las propiedades del pool de conexión.
 */
interface IPoolProps {
    acquire: number;
    idle: number;
    max: number;
    min: number;
}

/**
 * Interfaz que define las propiedades opcionales de conexión.
 */
interface IOptionProps {
    encrypt: boolean;
    trustServerCertificate: boolean;
}