import fs from 'fs';
import path from 'path';
import { createLogger, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

/**
 * Logger que registra las consultas en modo desarrollo de base de datos.
 * 
 * @function
 * @name queryLogging
 * @see {@link https://www.npmjs.com/package/winston|**Documentación Winston**}
 * @see {@link https://www.npmjs.com/package/winston-daily-rotate-file|**Documentación Winston Daily Rotate File**}
 * @param query Consultas capturadas.
 */
export const queryLogging = ( query: any ) => {

    const { combine, timestamp, printf, errors } = format;

    /**
     * Definición de ruta del directorio donde se almacenarán los registros.
     */
    const pathToSaveFile = '../../../../shared/logs';

    /**
     * Definición de ruta para el registro de consultas.
     */
    const pathQueryLogs = path.join(__dirname, pathToSaveFile);

    //? Verificar si el directorio existe
    if (!fs.existsSync(pathQueryLogs)) {
        fs.mkdirSync(pathQueryLogs, { recursive: true });
    }

    /**
     * Definición de formato personalizado en el registro de consultas
     */
    const customLogFormat = printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} [${level.toUpperCase()}]: ${stack || message}\n`;
    });

    /**
     * Configuración de transporte para consultas con rotación diaria.
     */
    const queryTransport = new DailyRotateFile({
        filename: 'queries-%DATE%.txt',      //? Nombre del archivo con la fecha
        dirname: `${pathQueryLogs}/queries`, //? Directorio de logs
        datePattern: 'YYYY-MM-DD',           //? Patrón de fecha
        level: 'info',                       //? Nivel de log para este transporte
        zippedArchive: true,                 //? Comprimir archivos rotados
        maxSize: '5k',                       //? Tamaño máximo del archivo antes de rotar
        maxFiles: '14d'                      //? Mantener logs por 14 días
    });

    //* --- Registrar error capturado ---
    const logger = createLogger({
            level: 'info',                   //? Nivel mínimo para registrar
            format: combine(
                timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                errors({ stack: true }
            ),                               //? Captura los stack traces de los consultas
            customLogFormat
        ),
        transports: [queryTransport],        //? Registrar consultas en archivos rotados
        exceptionHandlers: [queryTransport], //? Manejar excepciones no capturadas
        rejectionHandlers: [queryTransport]  //? Manejar promesas rechazadas no capturadas
    });

    logger.info(query);

}