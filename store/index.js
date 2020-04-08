import Vuex from 'vuex'

// La store debe ser un callable y no un objeto, ya que nuxt lo utiliza en 
// el servidor para iniciar una store 
const createStore = () => {
    // Se debe retornar la ejecución de la función porque si se retorna un 
    // plain javascript object, todos los clientes que se conecten al servidor
    // recibirán el mismo objeto.
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    const timeWait = Math.floor(Math.random()*(2000-500+1)+500)
                    setTimeout(() => {
                        vuexContext.commit('setPosts', [
                            {
                                id: "99",
                                author: 'Ludwing',
                                title: 'My first dummy post',
                                content: 'Lorem ipsum dolor sit amet!',
                                previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus turpis...',
                                thumbnail: 'https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg'
                            },
                            {
                                id: "100",
                                author: 'Ludwing',
                                title: 'My second dummy post',
                                content: 'Lorem ipsum dolor sit amet!',
                                previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus turpis...',
                                thumbnail: 'https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg'
                            },
                            {
                                id: "101",
                                author: 'Ludwing',
                                title: 'Dummy post - the end',
                                content: 'Lorem ipsum dolor sit amet!',
                                previewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus turpis...',
                                thumbnail: 'https://cnet2.cbsistatic.com/img/qCyN0wPErBBpX1XhxL3dlK9YJrA=/0x188:1732x1397/1092x0/2019/10/24/7a762519-5241-4a3d-a469-0a9c3def3d50/gettyimages-1088374446.jpg'
                            }
                        ])
                        resolve()
                    }, timeWait)
                    // reject(new Error())
                })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore