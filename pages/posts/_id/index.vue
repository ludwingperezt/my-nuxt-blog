<template>
    <div class="single-post-page">
        <section class="post">
            <h1 class="post-title">{{ loadedPost.title }}</h1>
            <div class="post-details">
                <div class="post-detail">Last updated on {{ loadedPost.updatedDate | date }}</div>
                <div class="post-detail">Written by: {{ loadedPost.author }} </div>
            </div>
            <p class="post-content"> {{ loadedPost.content }} </p>
        </section>
        <section class="post-feedback">
            <p>Let me know what you think about the post, send a mail to 
                <a href="mailto:blog@my-nuxt-blog.com">blog@my-nuxt-blog.com</a>
            </p>
        </section>
    </div>
</template>

<script>

export default {
  asyncData(context) {
    // En caso de que se generen la página de forma estática, se revisa el 
    // context en busca de un payload el cual será utilizado para generar la 
    // vista, omitiendo la llamada a la API. (Ver la configuración de generate/routes
    // en nuxt.config.js)
    if (context.payload) {
      return {
        loadedPost: context.payload.postData
      }
    }
    return context.app.$axios.$get('/posts/' + context.params.id + '.json')
    .then(data => {
      return {
        loadedPost: data
      }
    })
    .catch(e => context.error(e))
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>