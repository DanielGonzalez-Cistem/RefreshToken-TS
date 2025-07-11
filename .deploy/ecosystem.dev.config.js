module.exports = {
    apps: [
        {
        // 🔧 Nombre del proceso en PM2 (ajusta según tu proyecto)
        name: "WebDevelop-BackEnd-Template", // ← CAMBIAR si usas otro nombre

        // 📂 Agrupación lógica opcional (por cliente, módulo, etc.)
        namespace: "WebDevelop-Template", // ← CAMBIAR si necesitas agrupar procesos

        // 🏷️ Versión informativa (no afecta la ejecución)
        version: "V0.1.0-alpha", // ← CAMBIAR según la versión de tu app

        // 📜 Punto de entrada de la app (archivo TypeScript)
        script: "src/main.ts", // ← CAMBIAR si tu entry point es otro

        // ⚙️ Modo y número de instancias (fork para desarrollo)
        exec_mode: "fork",
        instances: 1,

        // 📦 Usa ts-node y tsconfig-paths para ejecutar TypeScript directamente
        interpreter: "node",
        interpreterArgs: "-r ts-node/register -r tsconfig-paths/register",

        // 📁 Ruta absoluta donde está ubicado el proyecto localmente
        cwd: "C:\\user\\deploys\\WebDevelop-BackEnd-Template", // ← CAMBIAR a la ruta de tu máquina

        // 🌎 Variables de entorno para desarrollo
        env: {
            NODE_ENV: "development", // ← Modo desarrollo
            APP_VERSION: "V0.1.0-alpha", // ← Coincide con la versión declarada
        },

        // 🔁 Reinicia automáticamente si se detiene por error
        autorestart: true,

        // 👀 Observa archivos para autorecargar (solo en desarrollo)
        watch: true, // ← Puedes poner en false si no quieres reinicio automático

        // 📝 Une logs stdout + stderr en un solo flujo
        merge_logs: true,

        // 🪟 Solo en Windows: oculta ventana de terminal
        windowsHide: true,
        },
    ],
};