import { Optional } from 'sequelize';

import { IBaseUser } from '@interfaces/user.interface';

/**
 * Definición de tipado de la entidad **Usuario**.
 */
export type UserCreationAttributes = Optional<IBaseUser, 'idUser'>;