import cron from 'node-cron';

/**
 * Función automatizada de prueba.
 * 
 * @function
 * @name userLevelUnlockJob
 * @param unitTime Unidad de tiempo requerido para definir la ejecución.
 */
export const exampleJob = ( unitTime: string ): void => {

    cron.schedule(unitTime, () => {

        console.log('✅ Rutina automática ejecutada...');

    });

}