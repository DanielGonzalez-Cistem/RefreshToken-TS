/**
 * Definición de atributos de la entidad **Usuario**.
 * 
 * **NOTA:** Esta interfaz puede reutilizarla para tipar modelos de DB o cualquier otro componente.
 */
export interface IBaseUser {
    idUser?: number;
	email: string;
	password: string;
	lastIp?: string;
	lastAccess?: string;
	lastPasswords?: string;
	status?: number;
	createdAt?: Date;
    updatedAt?: Date;
}

/**
 * Definición de atributos de la entidad **Usuario** para editar.
 */
export type IUserOptional = Partial<IBaseUser>;