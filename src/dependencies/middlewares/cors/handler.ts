import cors from 'cors';
import { RequestHandler } from 'express';

/**
 * Middleware que habilita CORS para todo tipo de origenes.
 * 
 * @function
 * @name Cors
 * @see {@link https://github.com/expressjs/cors#readme|**Documentación CORS**}
 * @returns Configuración Cors
 */
export const Cors = (): RequestHandler => cors({ origin: true });