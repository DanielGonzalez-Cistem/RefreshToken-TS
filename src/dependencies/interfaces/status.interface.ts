/**
 * Definición de atributos de la entidad **Estado**.
 * 
 * **NOTA:** Esta interfaz puede reutilizarla para tipar modelos de DB o cualquier otro componente.
 */
export interface IBaseStatus {
    idStatus?: number;
	name: string;
	createdAt?: Date;
    updatedAt?: Date;
}

/**
 * Definición de atributos de la entidad **Estado** para editar.
 */
export type IStatusOptional = Partial<IBaseStatus>;