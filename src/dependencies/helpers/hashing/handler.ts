import { compare, hash } from 'bcryptjs';

/**
 * Función de hasheao de información.
 * 
 * @function
 * @name applyHashing
 * @param valueToHash Valor al que se le aplicará  el algoritmo de hasheo.
 * @returns Valor haseado.
 */
export const applyHashing = async ( valueToHash: any ): Promise<string> => {
    return await hash(valueToHash, 8);
}

/**
 * Función de verificación de hashing.
 * 
 * @function
 * @name verifyHashing
 * @param valueToVerify Valor a verificar.
 * @param valueWithHashing Valor con hasheo a comparar.
 * @returns `true` si la comparación es correcta, `false` todo lo contrario.
 */
export const verifyHashing = async (valueToVerify: any, valueWithHashing: string): Promise<boolean> => {
    return await compare(valueToVerify, valueWithHashing);
}