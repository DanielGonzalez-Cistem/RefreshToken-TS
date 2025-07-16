import { DataTypes, Model, Sequelize } from 'sequelize';

import { IBaseSesion } from '@interfaces/session.interface';

import { SessionCreationAttributes } from './session.type';

/**
 * Definición de atributos de la entidad **Estado**.
 */
export class Session extends Model<IBaseSesion, SessionCreationAttributes> implements IBaseSesion {

    public idSession?: number|undefined;
    public idUser!: number;
    public accessToken!: string;
    public refreshToken!: string;
    public dateExpirationAccessToken!: string;
    public dateExpirationRefreshToken!: string;
    public createdAt?: Date|undefined;
    public updatedAt?: Date|undefined;

    static initModel ( sequelize: Sequelize ): typeof Session {
        Session.init(
            {
                idSession: {
                    field: 'SesionID',
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                idUser: {
                    field: 'UsuarioID',
                    type: DataTypes.INTEGER,
                    allowNull: false,
                },
                accessToken: {
                    field: 'TokenAcceso',
                    type: DataTypes.STRING(255),
                    allowNull: false,
                },
                refreshToken: {
                    field: 'TokenRefresco',
                    type: DataTypes.STRING(255),
                    allowNull: false,
                },
                dateExpirationAccessToken: {
                    field: 'FechaExpiracionTokenAcceso',
                    type: DataTypes.DATE,
                    allowNull: false,
                },
                dateExpirationRefreshToken: {
                    field: 'FechaExpiracionTokenRefresco',
                    type: DataTypes.DATE,
                    allowNull: false,
                },
                createdAt: {
                    field: 'FechaAlta',
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW
                },
                updatedAt: {
                    field: 'FechaEdicion',
                    type: DataTypes.DATE,
                    allowNull: false,
                    defaultValue: DataTypes.NOW
                },
            },
            {
                sequelize,
                tableName: 'Sesion',
                modelName: 'session',
                timestamps: true,
                createdAt: 'FechaAlta',
                updatedAt: 'FechaEdicion'
            }
        );

        return Session;
    }

}