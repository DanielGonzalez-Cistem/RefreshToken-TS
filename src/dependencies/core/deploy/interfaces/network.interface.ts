import { Application } from "express";

/**
 * Interfaz que define las propiedades de configuración para publicación de servidor.
 */
export interface IDeployServer {
    enableSocket: boolean;
    environment: string;
    port: number;
    server: Application
}

/**
 * Interfaz que define las propiedades para obtención de redes locales.
 */
export interface IGetNetworks {
    port: number;
    suffix: 'http'|'https';
    host?: string;
}