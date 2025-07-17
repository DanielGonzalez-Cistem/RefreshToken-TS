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
     * Tipado global para definir origenes de token.
     */
    type TGOrigin = 'LOGIN' | 'RESET_PWD' | 'LOGIN_WITHOUT_PWD' | 'VERIFY';

    /**
     * Tipado global para definir los tipos de token.
     */
    type TGToken = 'ACCESS_TOKEN' | 'VERIFY' | 'REFRESH_TOKEN';

    /**
     * Tipado global para definir los tipos de expiración.
     */
    type TGExpirationToken = 'ACCESS_TOKEN' | 'REFRESH_TOKEN';
    // type TGExpirationToken = 'ACCESS_TOKEN' | 'LINK' | 'REFRESH_TOKEN';

    /**
     * Tipado global que define la estructura de reglas con Express Validator.
     */
    type TGValidation = ValidationChain[]|RequestHandler[];

    /**
     * Interfaz global de propiedades en esquema de error nativo de JS.
     */
    interface IGErrorJS {
        errorConfig?: IGErrorConfig;
        message: string;
        name: string;
        stack: any;
        type?: string;
    }

    /**
     * Interfaz gobal que define las propiedades de generación de token.
     */
    interface IGGenerateToken {
        origin: TGOrigin;
        payload: object;
        signToken: string;
        typeExpires: TGExpirationToken;
        typeToken?: TGToken;
    }

    /**
     * Interfaz que define las propiedades de verificación de token.
     */
    export interface IGVerifyToken {
        token: string;
        signToken: string;
        typeToken: TGToken;
    }


}

export {}