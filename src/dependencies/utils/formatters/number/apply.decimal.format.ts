/**
 * Formatea un valor a numérico (ejemplo: 1,023.20).
 * 
 * @function
 * @name applyDecimalFormat
 * @param numberToFormat Valor a formatear.
 * @param decimalPlaces Número de decimales a mostrar.
 */
export const applyDecimalFormat = (numberToFormat: string|number, decimalPlaces: number = 2 ) => {
    
    if ( numberToFormat === undefined || numberToFormat === '' ) return '';

    /**
     * Asignación de número formateado.
     */
    let number = '';

    //? Elimina cualquier carácter no numérico(comas,letras,etc..), excepto el punto decimal
    number = String(numberToFormat).replace(/[^\d.]/g, '');

    //* Formatear el número con el número deseado de decimales
    let parts = number.split('.');
    let integerPart = parts[0]; // Parte entera
    let decimalPart = parts[1] ? parts[1].slice(0, decimalPlaces) : ''; // Truncar decimales

    //* Si se requieren decimales, asegurarse de que siempre tenga el número exacto de decimales
    decimalPart = decimalPart.padEnd(decimalPlaces, '0');

    //* Formatear para miles con separación de coma
    let completePart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let finalPart = `${completePart}.${decimalPart}`

    return finalPart;

}