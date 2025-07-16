import { Optional } from 'sequelize';

import { IBaseStatus } from '@interfaces/status.interface';

/**
 * Definición de tipado de la entidad **Estado**.
 */
export type StatusCreationAttributes = Optional<IBaseStatus, 'idStatus'>;