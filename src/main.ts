import { rootEnvs } from '@env/handler';
import { startJobs } from '@jobs/handler';

import { useSetupAppServer } from './app/setup';
import { useSetupAuthServer } from './auth/setup';

/**
 * Inicio de aplicación **REST API**.
 * 
 * @function
 * @name mainApp
 * @see {@link https://www.npmjs.com/package/typescript|**Documentación Typescript**}
 * @see {@link https://www.npmjs.com/package/ts-node-dev|**Documentación Ts-node-dev**}
 */
const mainApp = (): void => {

    const { deploy: deployServerApp } = useSetupAppServer();
    const { deploy: deployServerAuth } = useSetupAuthServer();

    deployServerApp();
    deployServerAuth();

    // startJobs(); //? Ejecución de rutinas automáticas

    console.log(`\n🟢 ${rootEnvs.BRAND} ${rootEnvs.VERSION} ha sido inicializado...\n`);

}

mainApp();