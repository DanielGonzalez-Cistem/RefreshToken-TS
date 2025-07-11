import { DateTime } from 'luxon';

import { rootEnvs } from '@env/handler';

/**
 * Función que obtiene la fecha y hora actual de servidor adaptado a la zona horaria.
 * 
 * @function
 * @name getCurrentDate
 * @returns Fecha y hora actual.
 */
export const getCurrentDate = () => DateTime.now().setZone(rootEnvs.TIMEZONE).toISO({ includeOffset: false });

/**
 * Función para obtener parámetros de fecha individuales.
 * 
 * @function
 * @name getPropsDate
 * @param date Fecha a evaluar.
 * @returns Propiedades de una fecha (Año, mes, dia, horas, minutos, segundos y milisegundos)
 */
export const getPropsDate = ( date: string ) => {

    const fromDate = DateTime.fromISO(date);

    return {
        year: fromDate.year,
        month: fromDate.month - 1, // meses base 0
        day: fromDate.day,
        hour: fromDate.hour,
        minute: fromDate.minute,
        second: fromDate.second,
        millisecond: fromDate.millisecond,
    }

}

/**
 * Función que aplica un formateo a un rango de fechas, inicializado en `00:00:00.000` y `23:59:59.999` respectivamente.
 * 
 * @function
 * @name formatDateRange
 * @param args Argumentos de función.
 * @param args.startDate Fecha inicial en milisegundos.
 * @param args.endDate Fecha final en milisegundos.
 * @returns Rango de fecha formateado.
 */
export const formatDateRange = ( args: { startDate: number, endDate: number } ) => {
    return {
        start: DateTime.fromMillis(args.startDate, { zone: rootEnvs.TIMEZONE }).startOf('day').toISO({ includeOffset: false }),
        end: DateTime.fromMillis(args.endDate, { zone: rootEnvs.TIMEZONE }).endOf('day').toISO({ includeOffset: false }),
    }
}

/**
 * Función que aplica un formato a una fecha en `YYYY-MM-DD HH:mm:ss`.
 * 
 * @function
 * @name formatDateWithTimeZone
 * @param date Fecha a formtear en milisegundos.
 * @returns Fecha formteada.
 */
export const formatDateWithTimeZone = ( date: number ) => {
    return DateTime.fromMillis(date, { zone: rootEnvs.TIMEZONE }).toISO({ includeOffset: false });
}