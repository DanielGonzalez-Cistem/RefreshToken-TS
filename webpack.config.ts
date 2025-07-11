import path from 'path';
import { Configuration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import nodeExternals from 'webpack-node-externals';

/**
 * Configuración de Webpack.
 * 
 * @see {@link https://webpack.js.org/|**Documentación Oficial Webpack**}
 * @see {@link https://www.npmjs.com/package/webpack|**Documentación NPM Webpack**}
 * @see {@link https://www.npmjs.com/package/webpack|**Documentación NPM Webpack**}
 * @see {@link https://www.npmjs.com/package/webpack-cli|**Documentación CLI Webpack**}
 * @see {@link https://www.npmjs.com/package/webpack-node-externals|**Documentación Node Externals**}
 * @see {@link https://www.npmjs.com/package/@types/webpack-node-externals|**Documentación Tipado Node Externals**}
 * @see {@link https://www.npmjs.com/package/ts-loader|**Documentación Ts-loader**}
 */
export default (env: any, argv: any): Configuration|undefined => {

    console.log(`🟢 Empaquetando módulos del proyecto...\n`);

    /**
     * Bandera que índica el modo de configuración en Webpack. 
     * Esta variable se establece en **true** si `argv.mode` es igual a `production`, **false** todo lo contrario.
     * 
     * @type {boolean}
     * @default undefined
     */
    const isProduction: boolean = argv.mode === 'production';

    if ( !isProduction ) {
        console.log(`🟡 [WEBPACK_CONFIG]: La empaquetación de módulos no esta disponible en modo 'DESARROLLO'.`);
        return;
    }

    return {
        entry: './src/main.ts',
        externals: [nodeExternals()],
        externalsPresets: { node: true },
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        compress: true,
                        mangle: true
                    }
                })
            ]
        },
        output: {
            clean: true,
            filename: 'bundle.prod.min.js',
            path: path.resolve(__dirname, './shared/dist')
        },
        resolve: {
            alias: {
                '@core': path.resolve(__dirname, 'src/dependencies/core/'),
                '@db': path.resolve(__dirname, 'src/dependencies/db/'),
                '@env': path.resolve(__dirname, 'src/dependencies/env/'),
                '@errors': path.resolve(__dirname, 'src/dependencies/errors/'),
                '@helpers': path.resolve(__dirname, 'src/dependencies/helpers/'),
                '@interfaces': path.resolve(__dirname, 'src/dependencies/interfaces/'),
                '@jobs': path.resolve(__dirname, 'src/dependencies/jobs/'),
                '@middlewares': path.resolve(__dirname, 'src/dependencies/middlewares/'),
                '@utils': path.resolve(__dirname, 'src/dependencies/utils/')
            },
            extensions: ['.tsx', '.ts', '.js']
        },
        target: 'node',
        watch: false
    }

}