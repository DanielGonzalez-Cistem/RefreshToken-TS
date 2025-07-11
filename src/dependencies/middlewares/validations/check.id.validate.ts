import { body, param, query } from 'express-validator';

import { bold } from '@utils/bold/handler';
import { checkOnlyNumbers } from '@helpers/custom_rules/handler';
import { validateRules } from '@middlewares/express_validator/validate.rules';

/**
 * Validador para verificar la integridad de un ID proporcionado.
 *
 * @function
 * @name checkIdValidate
 * @param id ID a verificar.
 * @param propRequest Propiedad de petición en la cual se extraera el valor.
 * @returns Reglas de validación.
 */
export const checkIdValidate = ( id: string, propRequest: TGPropRequest ): TGValidation => {

    const repositoryPropRequest: Record<TGPropRequest, TGValidation> = {
        'body': [
            body(id)
                .notEmpty().withMessage(`El campo ${bold(id)} es requerido`)
                .isNumeric().withMessage(`El campo ${bold(id)} no cumple con el formato numérico requerido`)
                .custom(checkOnlyNumbers).withMessage(`El campo ${bold(id)} proporcionado no es válido`)
                .trim()
                .toInt()
            ,
            validateRules
        ],
        'params': [
            param(id)
                .notEmpty().withMessage(`El campo ${bold(id)} es requerido`)
                .isNumeric().withMessage(`El campo ${bold(id)} no cumple con el formato numérico requerido`)
                .custom(checkOnlyNumbers).withMessage(`El campo ${bold(id)} proporcionado no es válido`)
                .trim()
                .toInt()
            ,
            validateRules
        ],
        'query': [
            query(id)
                .notEmpty().withMessage(`El campo ${bold(id)} es requerido`)
                .isNumeric().withMessage(`El campo ${bold(id)} no cumple con el formato numérico requerido`)
                .custom(checkOnlyNumbers).withMessage(`El campo ${bold(id)} proporcionado no es válido`)
                .trim()
                .toInt()
            ,
            validateRules
        ]
    }

    return repositoryPropRequest[propRequest];

}