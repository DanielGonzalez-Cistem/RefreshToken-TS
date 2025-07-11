//* Importaciones
import { body } from 'express-validator';
import { checkSpaces } from '@helpers/custom_rules/handler';
import { validateRules } from '@middlewares/express_validator/validate.rules';

/**
 * Validador que verifica la estructura de consultas paginadas.
 * 
 * @function
 * @name validatePaginate
 * @param allowedOrderFields - Configuración de campos permitidos en ordenamiento.
 * @returns Validador de Paginaciones.
 */
export const validatePaginate = ( allowedOrderFields: string[] ): TGValidation => {

    /**
     * Tipos de ordenamientos permitidos.
     */
    const allowedTypeOrder: TGTypeOrder[] = ['asc', 'desc'];

    return [
        body('page')
            .notEmpty().withMessage("El número de página es requerido")
            .isNumeric().withMessage("El número de página no cumple con el formato numérico requerido")
            .isInt({ gt: 0 }).withMessage("El número de página debe ser mayor a cero")
            .toInt()
        ,
        body('limit')
            .notEmpty().withMessage("El límite de registros es requerido")
            .isNumeric().withMessage("El límite de registros no cumple con el formato numérico requerido")
            .isInt({ gt: 0 }).withMessage("El límite de registros debe ser mayor a cero")
            .toInt()
        ,
        body('keyword')
            .optional()
            .notEmpty().withMessage("El valor de búsqueda es requerido")
            .isString().withMessage("El valor de búsqueda no cumple con el formato cadena requerido")
            .custom(checkSpaces).withMessage("El valor de búsqueda no debe contener solo espacios en blanco")
            .trim()
        ,
        body('field_order')
            .if( body('sort_type').exists())
            .notEmpty().withMessage("El campo a ordenar es requerido")
            .isString().withMessage("El campo a ordenar no cumple con el formato cadena requerido")
            .custom(checkSpaces).withMessage("El campo a ordenar no debe contener solo espacios en blanco")
            .isIn(allowedOrderFields).withMessage("El campo a ordenar es desconocido")
            .trim()
        ,
        body('sort_type')
            .if( body('field_order').exists())
            .notEmpty().withMessage("El tipo de ordenamiento es requerido")
            .isString().withMessage("El tipo de ordenamiento no cumple con el formato cadena requerido")
            .custom(checkSpaces).withMessage("El tipo de ordenamiento no debe contener solo espacios en blanco")
            .isIn(allowedTypeOrder).withMessage("El tipo de ordenamiento es desconocido")
            .trim()
        ,
        validateRules //* 👈🏻 IMPORTANTE invocar el validador de reglas
    ];

}