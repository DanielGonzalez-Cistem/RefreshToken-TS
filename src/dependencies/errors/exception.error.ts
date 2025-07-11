/**
 * Clase personalizada de excepciones a partir de la clase base **Error**.
 * @class Exception
 */
export class Exception extends Error {
    constructor(public errorConfig: IGErrorConfig) {
        super();
        
        this.errorConfig = errorConfig;
    }
}