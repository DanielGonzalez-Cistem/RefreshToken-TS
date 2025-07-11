import { regex } from '@utils/regex/handler';

/**
 * Formateador que realiza conversiones de tiempo a unidades CRON.
 * 
 * #### **Unidades de Tiempo CRON**
 * - `m`: Mínutos.
 * - `h`: Horas.
 * - `d`: Días.
 * - `M`: Meses.
 * 
 * @function
 * @name applyParseCron
 * @param time Unidad de conversión.
 * @returns Conversión de tiempo CRON.
 */
export const applyParseCron = ( time: string ): string => {

    /**
     * Bandera que indica si la unidad de tiempo proporcionada es válida.
     */
    const match = time.match(regex.CATCH_UNIT_TIME);

    //? Verifica si la unidad de tiempo es válida
    if ( !match ) {
        console.log('❌ Formato de tiempo incorrecto...');
        return '';
    }

    /**
     * Asignación de duración de tiempo.
     */
    const value = parseInt(match[1], 10);

    /**
     * Asignación de unidad de tiempo.
     */
    const unit = match[2].toLowerCase();

    /**
     * Centralización de tiempos CRON.
     */
    const timeCron: Record<string, string> = {
        'm': `*/${value} * * * *`, // Cada X minutos
        'h': `0 */${value} * * *`, // Cada X horas
        'd': `0 0 */${value} * *`, // Cada X días (ejecuta a medianoche)
        'M': `0 0 1 */${value} *`, // Cada X meses (ejecuta el primer día del mes a medianoche)
    }

    return timeCron[unit];

}