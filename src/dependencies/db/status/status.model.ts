import { DataTypes, Model, Sequelize } from 'sequelize';

import { IBaseStatus } from '@interfaces/status.interface';

import { StatusCreationAttributes } from './status.type';

/**
 * Definición de atributos de la entidad **Estado**.
 */
export class Status extends Model<IBaseStatus, StatusCreationAttributes> implements IBaseStatus {

    public idStatus?: number|undefined;
    public name!: string;
    public createdAt?: Date|undefined;
    public updatedAt?: Date|undefined;

    static initModel ( sequelize: Sequelize ): typeof Status {
        Status.init(
            {
                idStatus: {
                    field: 'EstadoID',
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                name: {
                    field: 'Nombre',
                    type: DataTypes.STRING(30),
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
                tableName: 'Estado',
                modelName: 'status',
                timestamps: true,
                createdAt: 'FechaAlta',
                updatedAt: 'FechaEdicion'
            }
        );

        return Status;
    }

}