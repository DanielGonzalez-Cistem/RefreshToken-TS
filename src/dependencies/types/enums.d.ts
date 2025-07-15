declare global {

    /**
     * Enumerador global que centraliza los estados de la aplicación.
     */
    enum EGStatus {
        PENDING = 1,
        ACTIVE = 2,
        INACTIVE = 3,
        DELETED = 4,
        BLOCKED = 5,
    }

}

export {}