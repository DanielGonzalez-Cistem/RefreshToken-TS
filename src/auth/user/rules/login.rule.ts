import { body } from 'express-validator';
import { validateRules } from '@middlewares/express_validator/validate.rules';
import { checkPassword } from '@helpers/custom_rules/handler';

/**
 * Definición de esquema de errores de iniciar sesión.
 */
export const loginRule: TGValidation = [
    body('email')
        .notEmpty().withMessage("El correo electrónico es requerido")
        .isString().withMessage("El correo electrónico no cuenta con el formato cadena de texto requerido")
        .isLength({ max: 150 }).withMessage("El correo electrónico excede la cantidad de caracteres requeridos")
        .trim()
        .toUpperCase()
    ,

    body('password')
        .notEmpty().withMessage("La contraseña es requerida")
        .isString().withMessage("La contraseña no cuenta con el formato cadena de texto requerido")
        .trim()
    ,
    
    validateRules
];