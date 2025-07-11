/**
 * Función que remueve las `::ffff:` en una dirección IP.
 * 
 * @function
 * @name applyIpFormat
 * @param ip - Dirección IP a formatear.
 * @returns Retorna una dirección IP normalizada o **127.0.0.1** en caso de que la IP recibida sea `undefined`.
 */
export const applyIpFormat = ( ip: string|undefined ): string|undefined => {

    /**
     * Asignación de dirección IP base.
     */
    const baseIp = 'localhost';

    if ( ip === undefined ) return baseIp; 

    return ip.includes(':') ? ip!.split(':').pop() : baseIp;

}