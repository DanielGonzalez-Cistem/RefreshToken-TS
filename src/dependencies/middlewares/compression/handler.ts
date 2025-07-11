import compression from 'compression';
import { RequestHandler } from 'express';

/**
 * Middleware que habilita la compresión segura de respuestas en API.
 * 
 * @function
 * @name Compression
 * @see {@link https://www.npmjs.com/package/compression|**Documentación Compression**}
 * @returns Optimización de Respuestas
 */
export const Compression = (): RequestHandler => compression();