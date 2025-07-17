/**
 * Interfaz que define las propiedades de comprobar token.
 */
export interface ICheckToken {
    bearerToken: string|undefined;
    typeToken: TGToken;
}