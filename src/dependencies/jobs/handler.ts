import { exampleJob } from './example/example.job';

import { applyParseCron } from '@utils/parsings/apply.parse.cron';

/**
 * Función que centraliza todos las funciones automatizadas del sistema.
 * 
 * @function
 * @name startJobs
 */
export const startJobs = (): void => {
    
    //NOTE: Invoque aquí 👇🏻 sus multiples JOBS
    
    /**
     * Tiempo de ejecución en formato **CRON**.
    */
    const unitTime: string = applyParseCron('1m');
    exampleJob(unitTime);

}