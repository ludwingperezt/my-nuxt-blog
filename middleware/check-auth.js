export default function (context) {
    // Debido a que initAuth require que se envíe un request (tradicional de
    // node), se envía la misma, la cual está contenida en el objeto context.
    // En el caso de que se esté ejecutando en el cliente context.req será igual
    // a null, por lo tanto la función recibirá null y continuará su ejecución
    // normal 
    context.store.dispatch('initAuth', context.req)
}