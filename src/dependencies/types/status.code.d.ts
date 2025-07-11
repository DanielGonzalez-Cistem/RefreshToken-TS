/**
 * Archivo global para definir propiedades de códigos de estado HTTP.
 */
declare global {
    
    /**
     * Interfaz global que define los códigos de estado HTTP.
     */
    interface IGStatusCode {
        CONTINUE: number;
        SWITCHING_PROTOCOLS: number;
        OK: number;
        CREATED: number;
        ACCEPTED: number;
        NON_AUTHORITATIVE_INFORMATION: number;
        NO_CONTENT: number;
        RESET_CONTENT: number;
        PARTIAL_CONTENT: number;
        MULTIPLE_CHOICES: number;
        MOVED_PERMANENTLY: number;
        FOUND: number;
        SEE_OTHER: number;
        NOT_MODIFIED: number;
        USE_PROXY: number;
        UNUSED: number;
        TEMPORARY_REDIRECT: number;
        PERMANENT_REDIRECT: number;
        BAD_REQUEST: number;
        UNAUTHORIZED: number;
        PAYMENT_REQUIRED: number;
        FORBIDDEN: number;
        NOT_FOUND: number;
        METHOD_NOT_ALLOWED: number;
        NOT_ACCEPTABLE: number;
        PROXY_AUTHENTICATION_REQUIRED: number;
        REQUEST_TIMEOUT: number;
        CONFLICT: number;
        GONE: number;
        LENGTH_REQUIRED: number;
        PRECONDITION_FAILED: number;
        PAYLOAD_TOO_LARGE: number;
        REQUEST_ENTITY_TOO_LARGE: number;
        REQUEST_URI_TOO_LONG: number;
        URI_TOO_LONG: number;
        UNSUPPORTED_MEDIA_TYPE: number;
        REQUESTED_RANGE_NOT_SATISFIABLE: number;
        EXPECTATION_FAILED: number;
        MISDIRECTED_REQUEST: number;
        UPGRADE_REQUIRED: number;
        PRECONDITION_REQUIRED: number;
        TOO_MANY_REQUESTS: number;
        REQUEST_HEADER_FIELDS_TOO_LARGE: number;
        INTERNAL_SERVER_ERROR: number;
        NOT_IMPLEMENTED: number;
        BAD_GATEWAY: number;
        SERVICE_UNAVAILABLE: number;
        GATEWAY_TIMEOUT: number;
        HTTP_VERSION_NOT_SUPPORTED: number;
        NETWORK_AUTHENTICATION_REQUIRED: number;
    }
    
}

export {}