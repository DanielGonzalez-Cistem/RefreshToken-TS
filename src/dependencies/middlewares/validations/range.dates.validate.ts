import { query } from 'express-validator';

import { validateRules } from '@middlewares/express_validator/validate.rules';
import { validateCurrentDate, checkEndDateLessStartDate } from '@helpers/custom_rules/handler';

/**
 * Definición de esquema de errores de rango de fechas.
 */
export const rangeDatesRule: TGValidation = [
    query('start_date')
        .notEmpty().withMessage(`La fecha inicial es requerida`)
        .isString().withMessage(`La fecha inicial no es válida`)
        .custom(validateCurrentDate).withMessage(`La fecha inicial no puede ser posterior a la fecha actual`)
    ,

    query('end_date')
        .notEmpty().withMessage(`La fecha final es requerida`)
        .isString().withMessage(`La fecha final no es válida`)
        .custom(validateCurrentDate).withMessage(`La fecha final no puede ser posterior a la fecha actual`)
        .custom(checkEndDateLessStartDate).withMessage(`La fecha final no puede ser anterior a la fecha inicial`)
    ,
    
    validateRules
];