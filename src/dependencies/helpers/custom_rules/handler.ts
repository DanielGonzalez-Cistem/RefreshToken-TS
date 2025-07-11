import { Meta } from 'express-validator';

import { regex } from '@utils/regex/handler';

/**
 * Regla personalizada que verifica que la fecha proporcionada no sea posterior a la fecha actual.
 *
 * @function
 * @name checkCurrentDate
 * @param date Fecha a evaluar.
 * @returns `true` si la fecha es menor a la fecha actual, `false` de lo contrario.
 */
export const checkCurrentDate = ( date: string|number ): boolean => {

    /**
     * Asignación de la fecha a comprar como formato Fecha.
     */
    const setDate = new Date(date); 

    /**
     * Asignación de la fecha actual.
     */
    const now = new Date(); 

    return setDate <= now;

};

/**
 * Regla personalizada que verifica que la estructura sea un correo electrónico válido.
 * 
 * @function
 * @name checkEmail
 * @param email - Correo electrónico a verificar.
 * @returns `true` si es un correo válido, `false` todo lo contrario.
 */
export const checkEmail = ( email: string ): boolean => regex.CHECK_EMAIL.test( email );

/**
 * Regla personalizada que verificar si la fecha final es anterior a la fecha inicial.
 * 
 * @function
 * @name checkEndDateLessStartDate
 * @param endDate Fecha final a evaluar.
 * @param req Objeto `Request` de la petición.
 * @returns `true` si la fecha final no es anterior a la fecha inicial, `false` de lo contrario.
 */
export const checkEndDateLessStartDate = (date: string|number, { req }: Meta ): boolean => {

    /**
     * Asignación de fecha inicial en formato Fecha.
     */
    const startDate: Date = new Date(req.query!.start_date); 
    
    /**
     * Asignación de fecha final en formato Fecha.
     */
    const endDate: Date = new Date(date); 

    return endDate >= startDate;

};

/**
 * Regla personalizada que verifica que el valor contenga solo números.
 * 
 * @function
 * @name checkOnlyNumbers
 * @param value - Valor a verificar.
 * @returns `true` si tiene solo números correo válido, `false` todo lo contrario.
 */
export const checkOnlyNumbers = ( value: string ): boolean => regex.CHECK_INT.test( value );

/**
 * Regla personalizada que verifica si la estructura de una contraseña válida.
 * 
 * @function
 * @name checkPassword
 * @param password - Contraseña a verificar.
 * @returns `true` si es una contraseña válida, `false` todo lo contrario.
 */
export const checkPassword = ( password: string ): boolean => regex.CHECK_PASSWORD.test( password );

/**
 * Regla personalizada que verifica que un valor no contenga solo espacios en blanco.
 * 
 * @function
 * @name validateBlankSpaces
 * @param value - Valor a verificar.
 * @returns `true` si no es un espacio en blanco, `false` todo lo contrario.
 */
export const checkSpaces = ( value: string ): boolean => !(value.replace(regex.CHECK_CHARACTERES_SPACE, '').length === 0);

/**
 * Regla personalizada que verifica si un objeto esta vacío.
 * 
 * @function
 * @name emptyObject
 * @param valueObj Objeto a verificar si se encuentra vacío.
 * @returns `true` si todo es correcto, `false` si hay un error.
 */
export const isEmptyObject = ( valueObj: any ): boolean => !(Object.keys(valueObj).length === 0);

/**
 * Verifica que la fecha proporcionada no sea posterior a la fecha actual.
 *
 * @function
 * @name validateCurrentDate
 * @param {string | number} value - Fecha final en milisegundos como cadena o número.
 * @returns {boolean} `true` si la fecha es válida, `false` de lo contrario.
 */
export const validateCurrentDate = (value: string | number): boolean => {

    //* Convertir la cadena de fecha a un objeto Date
    const date = new Date(Number(value)); 

    //* Obtener la fecha actual como objeto Date
    const currentDate = new Date(); 

    return date <= currentDate;

};