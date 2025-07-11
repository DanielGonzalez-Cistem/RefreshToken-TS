import os from 'os';
import { IGetNetworks } from '../interfaces/network.interface';

/**
 * Helper para obtener las direcciones locales del servidor.
 * 
 * @function
 * @name getNetworks
 * @param args - Argumentos de función.
 * @param args.port - Puerto de despliegue.
 * @param args.suffix - Prefijo de protocolo HTTP.
 * @param args.host - Host de configuración `(optional)`.
 * @returns Direcciones IP Locales.
 */
export const getNetworks = ( args: IGetNetworks ): string[] => {

    const { port, suffix, host } = args;

    /**
     * Asignación de interfaces de red.
     */
    const interfaces = os.networkInterfaces();

    const addresses: string[] = [];

    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]!) {
            if (iface.family === 'IPv4' && !iface.internal) {
                if ( suffix === 'http' ) {
                    addresses.push(`${suffix}://${iface.address}:${port}`);
                } else {
                    addresses.push(`${suffix}://${host}:${port}`);
                }
            }
        }
    }

    return addresses;

}