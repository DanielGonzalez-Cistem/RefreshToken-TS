import fs from 'fs';
import http from 'http';
import https from 'https';

import { IDeployServer, IGetNetworks } from './interfaces/network.interface';
import { getNetworks } from './helpers/networks.helper';

import { rootEnvs, sslEnvs } from '@env/handler';

//! Habilite solo si necesitará WebSocket
// import { startWebSocketServer } from '@websocket/handler'; 

/**
 * Función que obtiene las interfaces de red para entrelazarla con un servidor.
 * 
 * @function
 * @name deployNetworks
 * @param args Argumentos de despliegue de interfaces de red.
 * @param args.enableSocket Bandera que indica si requerirá de configuración WebSocket.
 * @param args.environment Define el entorno a ejecutar.
 * @param args.port Define el número de puerto de despliegue.
 * @param args.server Define el servidor a ejecutar.
 */
export const deployNetworks = ( args: IDeployServer ): void => {

    //? Desestructuración de argumentos
    const { enableSocket, environment, port, server } = args;

    /**
     * Inicializar instancia de servidor.
     */
    let initServer: http.Server | https.Server;

    const host = sslEnvs.HOST;
    const nodeEnv = rootEnvs.NODE_ENV;
    const sslCert = sslEnvs.SSL_CERT!;
    const sslKey = sslEnvs.SSL_KEY!;

    /**
     * Crear servidor dependiendo del entorno y certificados
     */
    if (host !== null && nodeEnv === 'production') {

        if(!host) {
            console.error('Host no definido');
            process.exit(1);
        }

        if (sslCert || sslKey) {
            console.error('Certificados SSL no definidos');
            process.exit(1);
        }
        if (!fs.existsSync(sslCert) || !fs.existsSync(sslKey)) {
            console.error('Archivos de certificados SSL no encontrados');
            process.exit(1);
        }

        const setSslCert = fs.readFileSync(sslCert, 'utf-8');
        const setSslKey = fs.readFileSync(sslKey, 'utf-8');

        initServer = https.createServer({ cert: setSslCert, key: setSslKey }, server);
    } else {
        initServer = http.createServer(server);
    }

    /**
     * Detectar si el servidor es HOST por su constructor
     */
    const isHttps = initServer instanceof https.Server;

    /**
     * Protocolo de comunicación del servidor.
     */
    const protocol = isHttps ? 'https' : 'http';

    //* Despliegue de servidor con interfaces de red
    initServer.listen(port, '0.0.0.0', () => {

        console.log(`⚡[${environment}] running at: `);
        console.log(`  ➜ Local:   ${isHttps ? 'https' : 'http'}://localhost:${port}`);

        const networkAddresses = getNetworks({
            port,
            suffix: protocol,
            host
        });

        for (const addr of networkAddresses) {
            console.log(`  ➜ Network: ${addr}\n`);
        }
        
    });

    //! Habilite solo si necesitará WebSocket
    // if ( enableSocket ) {
    //     startWebSocketServer( initServer );
    // }

}