export default function (context) {
    if (process.client) {
        // process es una variable de entorno que nuxt provee.
        // Debido a que localStorage es una característica del navegador
        // es necesario verificar mediante process.client si se está corriendo
        // en el navegador o en el servidor.
        context.store.dispatch('initAuth')
    }
}