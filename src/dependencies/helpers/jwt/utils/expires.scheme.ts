import { timeEnvs } from '@env/handler';

/**
 * Esquema que centraliza los tiempos de expiración.
 */
export const expiresScheme = {
    ACCESS_TOKEN: timeEnvs.JWT_ACCESS_EXPIRES,
    // LINK: '',
    REFRESH_TOKEN: timeEnvs.JWT_REFRESH_EXPIRES,
}