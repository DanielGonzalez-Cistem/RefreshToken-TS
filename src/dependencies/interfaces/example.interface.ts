/**
 * Definición de atributos de la entidad **Example**.
 * 
 * **NOTA:** Esta interfaz puede reutilizarla para tipar modelos de DB o cualquier otro componente.
 */
export interface Example {
    id_example?: number;
    name: string;
    //...
    //.
    //.
    createdAt: Date|null;
    updatedAt: Date|null;
}