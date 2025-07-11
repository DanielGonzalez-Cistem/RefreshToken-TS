import helmet from 'helmet';
import { RequestHandler } from 'express';

/**
 * Middleware que habilita la seguridad en encabezados HTTP.
 * 
 * @function
 * @name Helmet
 * @see {@link https://helmetjs.github.io/|**Documentación Helmet**}
 * @returns Configuración en Encabezados de Seguridad
 */
export const Helmet = (): RequestHandler => helmet();