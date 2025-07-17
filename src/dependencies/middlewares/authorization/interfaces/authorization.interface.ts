/**
 * Interfaz que define las propiedades de comprobar token.
 */
export interface ICheckToken {
    bearerToken: string|undefined;
    typeToken: TGToken;
}

/**
 * Interfaz que define el retorno de propiedades después de verificar un token.
 */
export interface ICheckTokenOutput {
    idUser: number;
    token: string;
}

/**
 * Interfaz que define el retorno de propiedades después de verificar un usuario.
 */
export interface ICheckUserOutput {
    idUser: number;
    email: string;
}

/**
 * Interfaz que define las propiedades de comprobar sesión.
 */
export interface ICheckSession {
    idUser: number;
    token: string;
    typeToken: TGToken;
}

/**
 * Interfaz que define el retorno de propiedades después de verificar una sesión.
 */
export interface ICheckSessionOutput {
    idSession: number;
}