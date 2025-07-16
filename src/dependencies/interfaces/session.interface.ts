/**
 * Definición de atributos de la entidad **Sesión**.
 * 
 * **NOTA:** Esta interfaz puede reutilizarla para tipar modelos de DB o cualquier otro componente.
 */
export interface IBaseSesion {
    idSession?: number;
	idUser: number;
    accessToken: string;
    refreshToken: string;
    dateExpirationAccessToken: string;
    dateExpirationRefreshToken: string;
	createdAt?: Date;
    updatedAt?: Date;
}

/**
 * Definición de atributos de la entidad **Sesión** para editar.
 */
export type ISessionOptional = Partial<IBaseSesion>;