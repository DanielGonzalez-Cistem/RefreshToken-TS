import fs from 'fs';
import path from 'path';
import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

/**
 * Logger que registra los errores inesperados de la aplicación.
 * 
 * @function
 * @name errorLogging
 * @see {@link https://www.npmjs.com/package/winston|**Documentación Winston**}
 * @see {@link https://www.npmjs.com/package/winston-daily-rotate-file|**Documentación Winston Daily Rotate File**}
 * @param error Error capturado.
 */
export const errorLogging = ( error: any ): void => {

    const { combine, timestamp, printf, errors } = format;

    /**
     * Definición de ruta del directorio donde se almacenarán los registros.
     */
    const pathToSaveFile = '../../../../shared/logs';

    /**
     * Definición de ruta para el registro de errores.
     */
    const pathErrorLogs = path.join(__dirname, pathToSaveFile);

    //? Verificar si el directorio existe
    if (!fs.existsSync(pathErrorLogs)) {
        fs.mkdirSync(pathErrorLogs, { recursive: true });
    }

    /**
     * Definición de formato personalizado en el registro de errores
     */
    const customLogFormat = printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} [${level.toUpperCase()}]: ${stack || message}\n`;
    });

    /**
     * Configuración de transporte para errores con rotación diaria.
     */
    const errorTransport = new DailyRotateFile({
        filename: 'errors-%DATE%.txt',       //? Nombre del archivo con la fecha
        dirname: `${pathErrorLogs}/errors`,  //? Directorio de logs
        datePattern: 'YYYY-MM-DD',           //? Patrón de fecha
        level: 'error',                      //? Nivel de log para este transporte
        zippedArchive: true,                 //? Comprimir archivos rotados
        maxSize: '5k',                       //? Tamaño máximo del archivo antes de rotar
        maxFiles: '14d'                      //? Mantener logs por 14 días
    });

    //* --- Registrar error capturado ---
    const logger = createLogger({
            level: 'info',                   //? Nivel mínimo para registrar
            format: combine(
            timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            errors({ stack: true }),         //? Captura los stack traces de los errores
            customLogFormat
        ),
        transports: [errorTransport],        //? Registrar errores en archivos rotados
        exceptionHandlers: [errorTransport], //? Manejar excepciones no capturadas
        rejectionHandlers: [errorTransport]  //? Manejar promesas rechazadas no capturadas
    });

    logger.error(error);

}