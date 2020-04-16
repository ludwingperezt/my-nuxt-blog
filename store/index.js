import Vuex from 'vuex'
import Cookie from 'js-cookie'

// La store debe ser un callable y no un objeto, ya que nuxt lo utiliza en 
// el servidor para iniciar una store 
const createStore = () => {
    // Se debe retornar la ejecución de la función porque si se retorna un 
    // plain javascript object, todos los clientes que se conecten al servidor
    // recibirán el mismo objeto.
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
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
            },
            setToken(state, token) {
                state.token = token
            },
            clearToken(state) {
                state.token = null
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return context.app.$axios.$get('/posts.json')
                    .then(data => {
                        const postList = []
                        for (let key in data) {
                            postList.push({...data[key], id: key})
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
                return this.$axios.$post('/posts.json?auth=' + vuexContext.state.token, 
                    createdPost)
                    .then(data => { 
                        vuexContext.commit('addPost', {...createdPost, id: data.name})
                    })
                    .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {
                // Actualizar un post existente en el backend y en la store
                return this.$axios.$put('/posts/' 
                    + editedPost.id + '.json?auth=' + vuexContext.state.token, editedPost)
                    .then(result => { 
                        vuexContext.commit('editPost', editedPost)
                    })
                    .catch(e => console.log(e))
            },
            authenticateUser(vuexContext, authData) {
                let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fbAPIKey
      
                if (!authData.isLogin) {
                    authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.fbAPIKey
                }

                return this.$axios.$post(authUrl,{
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true
                    })
                    .then(result => {
                        vuexContext.commit('setToken', result.idToken)
                        localStorage.setItem('token', result.idToken)
                        // El tiempo de expiración del token se almacena
                        // como una marca de tiempo en el futuro a partir de la
                        // cual el token ya no será válido
                        const expirationDate = new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
                        localStorage.setItem('tokenExpiration', expirationDate)
                        
                        //Almacenar en cookie
                        Cookie.set('jwt', result.idToken)
                        Cookie.set('expirationDate', expirationDate)
                    })
                    .catch(e => console.log(e))
            },
            initAuth(vuexContext, req) {
                let token;
                let expirationDate;
                if (req) {
                    if (!req.headers.cookie) {
                        return
                    }
                    const jwtCookie = req.headers.cookie
                        .split(';')
                        .find(c => c.trim().startsWith('jwt='))
                    
                    if (!jwtCookie) {
                        return
                    }
                    token = jwtCookie.split('=')[1]

                    expirationDate = req.headers.cookie
                        .split(';')
                        .find(c => c.trim().startsWith('expirationDate='))
                        .split('=')[1]
                }
                else {
                    token = localStorage.getItem('token')
                    expirationDate = localStorage.getItem('tokenExpiration')
                }

                // Se antepone el signo más (+) a expirationDate para convertir
                // su valor de cadena a entero. 
                if (new Date().getTime() > +expirationDate || !token) {
                    console.log('No token or invalid token')
                    vuexContext.dispatch('logout')
                    return
                }

                // Establecer el tiempo de expiración del token como la diferencia
                // (el tiempo que aún queda) entre la marca de tiempo establecida
                // como el limite de expiración y el momento actual
                vuexContext.commit('setToken', token)
            },
            logout(vuexContext) {
                vuexContext.commit('clearToken')
                Cookie.remove('jwt')
                Cookie.remove('expirationDate')
                localStorage.removeItem('token')
                localStorage.removeItem('tokenExpiration')
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            },
            isAuthenticated(state) {
                return state.token != null
            }
        }
    })
}

export default createStore