/**
 * Archivo global para definir propiedades en dependencias de la aplicación
 */
declare global {

    /**
     * Tipado global de propiedades **Morgan**.
     */
    type TGMorganRegister = 'combined' | 'common' | 'dev' | 'short' | 'tiny';

    /**
     * Tipado global de propiedades de decodificación de cuerpos de petición en **Express**.
     */
    type TGParser = 'json' | 'url-encode';

    /**
     * Tipado global para definir la extración de propiedades en una petición.
     */
    type TGPropRequest = 'body' | 'params' | 'query';

    /**
     * Tipado global que define la estructura de reglas con Express Validator.
     */
    type TGValidation = ValidationChain[]|RequestHandler[];

    /**
     * Tipado global de propiedades en esquema de error nativo de JS.
     */
    interface IGErrorJS {
        errorConfig?: IGErrorConfig;
        message: string;
        name: string;
        stack: any;
        type?: string;
    }

}

export {}