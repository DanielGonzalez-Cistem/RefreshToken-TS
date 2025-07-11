import 'express-async-errors';
import express, { Express } from 'express';

import { portEnvs, rootEnvs } from '@env/handler';
import { ErrorHandler, NotFound } from '@errors/custom.errors';
import { Compression } from '@middlewares/compression/handler';
import { Cors } from '@middlewares/cors/handler';
import { ExpressBodyParser } from '@middlewares/express/body.parser';
import { Helmet } from '@middlewares/helmet/handler';
import { MorganRegister } from '@middlewares/morgan/handler';
import { deployNetworks } from '@core/deploy/handler';

import { repositoryRouters } from './repository.routes';

/**
 * Composable de propiedades y funciones para publicar recursos del servidor **Auth**.
 * 
 * @function
 * @name useSetupAuthServer
 * @returns Publicación de servicios **Auth**.
 */
export const useSetupAuthServer = (): IGSetupServer => {

    /**
     * Instancia de servidor express.
     * @see {@link https://expressjs.com/es/|**Documentación Express**}
     */
    const app: Express = express();

    /**
     * Asignación de ambiente de desarrollo.
     */
    const NODE_ENV: TGNodeEnv = rootEnvs.NODE_ENV;

    /**
     * Asignación de puerto para publicación de servicios en **Auth**.
     */
    const AUTH_PORT: number = portEnvs.AUTH_PORT;

    /**
     * Publicación de recursos del servidor **Auth**.
     * 
     * @function
     * @name deploy
     */
    const deploy = (): void => {

        //? Invocación de middlewares
        middlewares();

        //? Carga de rutas
        routes();

        //? Publicación de servidor
        deployNetworks({
            enableSocket: false,
            environment: 'AUTH',
            port: AUTH_PORT,
            server: app
        });

    }

    /**
     * Asignación de middlewares al servidor **Auth**.
     * 
     * @function
     * @name middlewares
     */
    const middlewares = (): void => {

        if (NODE_ENV === 'development') {
            app.use(MorganRegister('dev'));         //* Registro de información en peticiones HTTP
        }

        app.use(Cors());                            //* Habilitar CORS (Cross-Origin Resource Sharing)
        app.use(Helmet());                          //* Habilitar seguridad en encabezados HTTP
        app.use(ExpressBodyParser('json'));         //* Procesamiento de datos JSON
        app.use(ExpressBodyParser('url-encode'));   //* Procesamiento de datos url-encode (form-data | x-www-form-urlencode)
        app.use(Compression());                     //* Habilita la compresión de respuestas

    }

    /**
     * Configuración de rutas en servidor **Auth**.
     * 
     * @function
     * @name routes
     */
    const routes = (): void => {

        /**
         * Asignación de ruta base para invocación de servicios.
         */
        const BASE_PATH: string = '/api/v1/auth';

        //* Invoicación de servicios
        app.use(`${BASE_PATH}`, repositoryRouters('welcome'));

        //* Controlar peticiones desconocidas
        app.use(NotFound);

        //* Manjedor de errores central
        app.use(ErrorHandler); 
        
    }

    return { deploy }
    
}