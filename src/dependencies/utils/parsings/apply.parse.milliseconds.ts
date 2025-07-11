/**
 * Función que realiza la conversión de un valor a milisegundos según el esquema de tiempo.
 * 
 * @function
 * @name applyParseMilliseconds
 * @param unitTime - Unidad de tiempo.
 * @returns Conversión a milisegundos.
 */
export const applyParseMilliseconds = ( unitTime: string ) => {

    /**
     * Esquema de conversión a milisegundos
     */
    const millisecondScheme: Record<string, any> = {
      's': (time: number) => time * 1000,
      'm': (time: number) => time * 60 * 1000,
      'h': (time: number) => time * 60 * 60 * 1000,
      'd': (time: number) => time * 24 * 60 * 60 * 1000,
      'w': (time: number) => time * 7 * 24 * 60 * 60 * 1000,
      'M': (time: number) => time * 30 * 24 * 60 * 60 * 1000,
      'y': (time: number) => time * 365 * 24 * 60 * 60 * 1000
    }
  
    /**
     * Asignación de tiempo a convertir.
     */
    const parseTime: number = parseInt(unitTime);
  
    /**
     * Asignación de unidad de tiempo.
     */
    const unit: string = unitTime.slice(-1);
  
    if ( !millisecondScheme[unit] ) {
      throw new Error('Unidad de tiempo inválida');
    }
  
    return millisecondScheme[unit](parseTime);
    
  }