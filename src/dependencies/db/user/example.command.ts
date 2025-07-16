/**
  * Comando que agrega un nuevo elemento a base de datos.
  * 
  * @function
  * @name saveExample
  * @param args Nuevo elemento.
  * @returns Referencia de elemento agregado.
 */
export const saveExample = async ( args: any ): Promise<any> => console.log('SAVE: ', args);

/**
  * Comando que consulta la referencia de un solo elemento en base de datos.
  * 
  * @function
  * @name getOneExample
  * @param args Configuración de consulta.
  * @returns Referencia de un elemento.
 */
export const getOneExample = async ( args: any ): Promise<any|null> => {}

/**
  * Comando que consulta todos los elementos de la base de datos.
  * 
  * @function
  * @name getAllExamples
  * @param args Configuración de consulta.
  * @returns Referencia de elementos.
 */
export const getAllExamples = async ( args: any ): Promise<any[]> => [];

/**
  * Comando que edita un elemento existente en la base de datos.
  * 
  * @function
  * @name editExample
  * @param args Argumentos y criterios de edición.
  * @returns Filas afectadas en la edición.
 */
export const editExample = async ( args: IGEditCommand<any> ): Promise<any> => console.log('EDIT: ', args); 

/**
  * Comando que elimina un elemento existente en la base de datos.
  * 
  * @function
  * @name removeExample
  * @param args Argumentos y criterios de edición.
  * @returns Referencia de elemento eliminado.
 */
export const removeExample = async ( args: any ): Promise<any> => console.log('REMOVE: ', args); 