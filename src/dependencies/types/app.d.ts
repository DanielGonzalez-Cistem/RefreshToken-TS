/**
 * Archivo global para definir propiedades globales en la aplicación.
 */
declare global {

    /**
     * Interfaz global que define el retorno de un **setup-server**.
     */
    interface IGSetupServer {
        deploy: () => void;
    }

    /**
     * Interfaz global de opciones en peticiones.
     */
    interface IGOptions {
        idUserRequest?: number|undefined;
        ip?: string|undefined;
        method?: string|undefined;
        origin?: string|undefined;
        url?: string|undefined;
    }

    /**
     * Interfaz global genérica que define la estructura de edición en un comando de base de datos.
     * 
     * Los parámetros genéricos que admite son:
     *  - **T**: Que corresponde a los datos de la entidad a editar.
     */
    interface IGEditCommand<T> {
        conditions: any;
        data: T;
    }

    /**
     * Interfaz global genérica que define la estructura DTO de la aplicación.
     * 
     * Los parámetros genéricos que admite son:
     *  - **B**: Corresponde a las propiedades de la entidad en curso.
     *  - **P**: Corresponde a las propiedades de la entidad o bien, propiedades de `req.params` en una petición.
     *  - **Q**: Corresponde a las propiedades de la entidad o bien, propiedades de `req.query` en una petición.
     */
    interface IGDTO<B, P, Q> {
        body?: B;
        params?: P;
        query?: Q;
        options?: IGOptions;
    }

    /**
     * Interfaz global que define la estructura para registrar movimientos en bitácora.
     * 
     * Los parámetros genéricos que admite son:
     *  - **M**: Corresponde a las propiedades de módulos en la aplicación.
     *  - **A**: Corresponde a las propiedades de acciones de módulos en la aplicación.
     */
    interface IGSaveWeblog<M, A> {
        module: M;
        action: A; 
        applyIn: string; 
        idUser: number|undefined; 
        ip: string|undefined|null;
        detail?: IGlobalDetailWeblog[]|null;
    }

    /**
     * Interfaz global que define la estructura de cambios en bitácora.
     */
    interface IGlobalDetailWeblog {
        field: string;
        previousValue: any;
        newValue: any;
    }

    /**
     * Interfaz global que define las propiedades de un rango de fechas.
     */
    interface IGRangeDate {
        startDate: Date|number;
        endDate: Date|number;
    }

    /**
     * Interfaz global que define la estructura para formatear una fecha.
     * Los parámetros genéricos que admite son:
     *  - **T**: Corresponde al tipo de dato de la fecha que puede ser `Date`, `string`, `number` o `null`.
     */
    interface IGDateFormat<T> {
        date: T;
        options: {
            applyTimeZone?: boolean;
            format?: TGDateFormat,
            order?: TGDateOrder;
            style?: TGDateStyles,
            returnType?: TGDateReturn;
            hour?: {
                format: TGDateHourFormat;
                milliseconds: boolean;
            },
            range?: IGRangeDate;
        }
    }

    /**
     * Tipado global de entornos de desarrollo.
     */
    type TGNodeEnv = 'development' | 'production' | 'test';

    /**
     * Tipado global de formatos fecha.
     */
    type TGDateFormat = 
        'currentDate' |      
        'date'        |
        'dateCleaned' 
    ;

    /**
     * Tipado global de orden de propiedades en una fecha.
     */
    type TGDateOrder = 'DD-MM-YYYY' | 'YYYY-MM-DD';

    /**
     * Tipado global de estilos en fechas.
     */
    type TGDateStyles = 'dashed' | 'diagonal' | 'none' ;

    /**
     * Tipado global de tipos de retorno en fechas.
     */
    type TGDateReturn = 'onlyDate' | 'fullDate';

    /**
     * Tipado global de tipos de formato en hora.
     */
    type TGDateHourFormat = '12h' | '24h';

    /**
     * Tipaod global que define el tipado de retorno.
     */
    type TGDateFormatFactory<T> = ( date: T ) => string|null|IGRangeDate;

    /**
     * Tipado de tipos de ordenamiento.
     */
    type TGTypeOrder = 'asc' | 'desc';

}

export {}