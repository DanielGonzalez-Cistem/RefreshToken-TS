import dotenv from 'dotenv';
import env from 'env-var';

dotenv.config();

/**
 * Centralización de variables de entorno raíz.
 * @see {@link https://www.npmjs.com/package/env-var|**Documentación env-var**}
 */
export const rootEnvs = {
    NODE_ENV: env.get('NODE_ENV').required().asEnum(['development', 'production', 'test']),
    VERSION: env.get('VERSION').required().asString(),
    BRAND: env.get('BRAND').required().asString(),
    ENABLE_SHOW_ERROR: env.get('ENABLE_SHOW_ERROR').required().asEnum(['YES', 'NO']),
    TIMEZONE: env.get('TIMEZONE').required().asString(),
    USER_ATTEMPTS: env.get('USER_ATTEMPTS').default(3).asInt(),
}

/**
 * Centralización de variables de entorno para puertos de aplicación.
 * @see {@link https://www.npmjs.com/package/env-var|**Documentación env-var**}
 */
export const portEnvs = {
    APP_PORT: env.get('APP_PORT').required().asInt(),
    AUTH_PORT: env.get('AUTH_PORT').required().asInt(),
}

/**
 * Centralización de variables de entorno para configuración SSL.
 * @see {@link https://www.npmjs.com/package/env-var|**Documentación env-var**}
 */
export const sslEnvs = {
    HOST: env.get('HOST').asString(),
    SSL_CERT: env.get('SSL_CERT').asString(),
    SSL_KEY: env.get('SSL_KEY').asString(),
}

/**
 * Centralización de variables de entorno para configuración a base de datos.
 * @see {@link https://www.npmjs.com/package/env-var|**Documentación env-var**}
 */
export const dbEnvs = {
    DB_SERVER: env.get('DB_SERVER').required().asString(),
    DB_USER: env.get('DB_USER').required().asString(),
    DB_PWD: env.get('DB_PWD').required().asString(),
    DB_NAME: env.get('DB_NAME').required().asString(),
    DB_PORT: env.get('DB_PORT').default(''),
    DB_ENABLE_ENCRYPT: env.get('DB_ENABLE_ENCRYPT').required().asEnum(['YES', 'NO']),
    DB_ENABLE_TRUST_SERVER_CERTIFICATE: env.get('DB_ENABLE_TRUST_SERVER_CERTIFICATE').required().asEnum(['YES', 'NO']),
    DB_ENABLE_LOGS: env.get('DB_ENABLE_LOGS').required().asEnum(['YES', 'NO']),
}

/**
 * Centralización de variables de entorno para configuración de correos.
 * @see {@link https://www.npmjs.com/package/env-var|**Documentación env-var**}
 */
export const mailEnvs = {
    PROVIDER_NAME: env.get('PROVIDER_NAME').required().asString(),
    EMAIL: env.get('EMAIL').required().asString(),
    EMAIL_HOST: env.get('EMAIL_HOST').required().asString(),
    EMAIL_PORT: env.get('EMAIL_PORT').required().asString(),
    EMAIL_USER: env.get('EMAIL_USER').required().asString(),
    EMAIL_PWD: env.get('EMAIL_PWD').required().asString(),
}

/**
 * Centralización de variables de entorno de claves secretas.
 * @see {@link https://www.npmjs.com/package/env-var|**Documentación env-var**}
 */
export const secretEnvs = {
    PWD_SECRET: env.get('PWD_SECRET').required().asString(),
    JWT_SECRET: env.get('JWT_SECRET').required().asString()
}

/**
 * Centralización de variables de entorno de tiempo.
 * @see {@link https://www.npmjs.com/package/env-var|**Documentación env-var**}
 */
export const timeEnvs = {
    USER_LEVEL_UNLOCK: env.get('USER_LEVEL_UNLOCK').required().asString(),
    JWT_AUTH_EXPIRES: env.get('JWT_AUTH_EXPIRES').required().asString(),
    JWT_LINK_EXPIRES: env.get('JWT_LINK_EXPIRES').required().asString()
}