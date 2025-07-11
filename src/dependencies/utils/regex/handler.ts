/**
 * Centralización de expresiones regulares.
 */
export const regex = {
    CATCH_UNIT_TIME: /^(\d+)([mMhHdD])$/,
    CHECK_CHARACTERES_SPACE: /\s/g,
    CHECK_DATE: /^(?:(?:31\/(0?[13578]|1[02]))|(?:30\/(0?[13-9]|1[0-2]))|(?:29\/(0?[1-9]|1[0-2]))|(?:0?[1-9]|1\d|2[0-8])\/(0?[1-9]|1[0-2]))\/(?:19|20\d\d)$|^(29\/02\/(?:19|20)(?:[02468][048]|[13579][26]))$/,
    CHECK_EMAIL: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
    CHECK_INT: /^[0-9]+$/,
    CHECK_NUMERIC_FLOAT: /^-?\d+(\.\d+)?$/,
    CHECK_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,}$/,
    ONLY_DIGIT_NUM: /^\d+$/,
}