import { Optional } from 'sequelize';

import { IBaseSesion } from '@interfaces/session.interface';

/**
 * Definición de tipado de la entidad **Sesión**.
 */
export type SessionCreationAttributes = Optional<IBaseSesion, 'idSession'>;