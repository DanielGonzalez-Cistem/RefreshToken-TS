import { DataTypes, Model, Sequelize } from 'sequelize';

import { IBaseUser } from '@interfaces/user.interface';

import { UserCreationAttributes } from './user.type';

/**
 * Definición de atributos de la entidad **Usuario**.
 */
export class User extends Model<IBaseUser, UserCreationAttributes> implements IBaseUser {

    public idUser?: number|undefined;
    public email!: string;
    public password!: string;
    public lastIp?: string|undefined;
    public lastAccess?: string|undefined;
    public lastPasswords?: string|undefined;
    public status?: number|undefined;
    public createdAt?: Date|undefined;
    public updatedAt?: Date|undefined;

    static initModel ( sequelize: Sequelize ): typeof User {
        User.init(
            {
                idUser: {
                    field: 'UsuarioID',
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                email: {
                    field: 'Correo',
                    type: DataTypes.STRING(150),
                    allowNull: false
                },
                password: {
                    field: 'Contrasena',
                    type: DataTypes.STRING(255),
                    allowNull: false
                },
                lastIp: {
                    field: 'UltimaIP',
                    type: DataTypes.STRING(20),
                    allowNull: true
                },
                lastAccess: {
                    field: 'UltimoAcceso',
                    type: DataTypes.DATE,
                    allowNull: true
                },
                lastPasswords: {
                    field: 'UltimasContrasenas',
                    type: DataTypes.TEXT,
                    allowNull: false,
                    defaultValue: '{"passwords":[]}'
                },
                status: {
                    field: 'EstadoID',
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    defaultValue: 2
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
                tableName: 'Usuario',
                modelName: 'user',
                timestamps: true,
                createdAt: 'FechaAlta',
                updatedAt: 'FechaEdicion'
            }
        );

        return User;
    }

}