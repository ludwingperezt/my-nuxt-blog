import Vuex from 'vuex'
import axios from 'axios'

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
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                )
                state.loadedPosts[postIndex] = editedPost
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get(process.env.baseUrl + '/posts.json')
                    .then(res => {
                        const postList = []
                        for (let key in res.data) {
                            postList.push({...res.data[key], id: key})
                        }
                        vuexContext.commit('setPosts', postList)
                    })
                    .catch(e => context.error(e))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            },
            addPost(vuexContext, post) {
                // Insertar nuevo post y actualizar store

                const createdPost = {...post, updatedDate: new Date()}
                
                // Al URL de la base de datos realtime en firebase hay que agregar
                // el nombre de la colección + .json (firebase así lo requiere)
                return axios.post(process.env.baseUrl + '/posts.json', 
                    createdPost)
                    .then(res => { 
                        vuexContext.commit('addPost', {...createdPost, id: res.data.name})
                    })
                    .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {
                // Actualizar un post existente en el backend y en la store
                return axios.put(process.env.baseUrl + '/posts/' 
                    + editedPost.id + '.json', editedPost)
                    .then(res => { 
                        vuexContext.commit('editPost', editedPost)
                    })
                    .catch(e => console.log(e))
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